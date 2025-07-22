const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");
const routes = express.Router();
const { Cart, CartImgUrl, Users, AddedCart } = require("../db/mongo");
const jwt = require('jsonwebtoken');
const { handleuserExist } = require("../middlewares/userMiddleware");
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

routes.post("/addproduct", upload.array("files"), async (req, res) => {
  const body = req.body;
  const allfiles = req.files;
  
  if (req.files) {
    const cart = await Cart.create({
               product_name: body.product_name,
               product_discription: body.product_discription,
               category: body.category,
               product_price: body.product_price,
               offer_price: body.offer_price,
               live: true
    });
    
    const path = []; 
    const originalname = [];
    allfiles.map((element)=>{
            path.push(element.path);
            originalname.push(element.originalname);
    });

    await CartImgUrl.create({
         productId: cart._id,
         path: path,
         file_name: originalname
    })

    return res.json({
      msg: "Multiple images uploaded successfully!",
      files: req.files,
    });
  } else {
    return res.status(400).json({
      msg: "error",
    });
  }
});

routes.get("/allproductlist", async(req, res)=>{
         const cart = await Cart.find({
         });
         const ids = cart.map(item=>item._id);
         const imgurls = await CartImgUrl.find({
                       productId: {$in: ids}
         });

         return res.json({       
                    cart,
                    imgurls
         })
});

//update cart.live on / off
routes.post("/changelive",async(req, res)=>{
         const {live, product_name} = req.body;
         const change = Boolean(live)? false: true;
         await Cart.findOneAndUpdate({
               product_name
         },{
               live: change
         })
         return res.json({
               change
         })
});


routes.get('/bestseller',async(req, res)=>{
           const {authorization} = req.headers;
           const auth = authorization.split(' ');
           if(auth[0] == "Bearer"){
              const token = auth[1];
              const body = jwt.decode(token,jwtSecret);
         
              const userExists = await Users.findById({
                         _id: body.userId
              })
              if(userExists){
                   const cart = await Cart.find({
                           bestseller: "true",
                           live: true
                   });
                   const ids = cart.map(element=>{
                        return element._id;
                   })
                   const imgurls = await CartImgUrl.find({
                                 productId: {$in: ids}
                   })
                   const path = imgurls.map((element)=>{
                              return element.path[0]
                   })
                   return res.json({
                       cart,
                       path
                    })
              }else{
                 return res.status(400).json({
                       message: "invalid user"
                  })
              }
              
           }
         
});

routes.get("/products", async(req, res)=>{
        const {authorization} = req.headers;
        if(authorization){
              const headbody = authorization.split(" ");
              if(headbody[0] == "Bearer"){
                  const token = headbody[1];
                  const {userId} = jwt.decode(token,jwtSecret);
                  const user = await Users.findOne({
                             _id: userId
                  })
                  if(user){
                      const products = await Cart.find({
                                     live: true
                      });
                      const ids = products.map(element=>{
                               return element._id;
                      })
                      const imgurl = await CartImgUrl.find({
                                  productId: {$in: ids}
                      });
                      const path = imgurl.map((element)=>{
                              return {path: element.path[0],
                                      id: element.productId  
                                    }
                      })
                      return res.json({
                           products,
                           path
                      })
                  }
              }
        }
        return res.status(400).json({
            message: "falled"
        })
});

routes.get("/productview",async(req, res)=>{
    const {authorization} = req.headers;
    const {id} = req.query;
        if(authorization){
              const headbody = authorization.split(" ");
              if(headbody[0] == "Bearer"){
                  const token = headbody[1];
                  const {userId} = jwt.decode(token,jwtSecret);
                  const user = await Users.findOne({
                             _id: userId
                  })
                  if(user){
                      const cart = await Cart.findById(id);
                      const relatedProduct = await  Cart.find({
                           $and:[
                              {category: cart.category},
                              {_id: {$ne: cart._id}}
                           ]
                      })
                      
                      const imgurl = await CartImgUrl.findOne({
                                 productId: id
                      })
                      const ids = relatedProduct.map((element)=>{
                               return element._id
                      })
                      const relatedProductimg = await CartImgUrl.find({
                                productId: {$in: ids}
                      })
                      return res.json({
                          body: {
                              cart,
                              imgurl: imgurl.path,
                          },
                          relatedProduct,
                          relatedProductimg
                      })
                  }
              }
        }
        return res.status(400).json({
            message: "falled"
        })
});

routes.post("/addedcart", async (req, res) => {
    try {
        const { authorization } = req.headers;
        const body = req.body;

        if (!authorization) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        const auth = authorization.split(' ');
        if (auth[0] !== "Bearer") {
            return res.status(401).json({ message: "Invalid authorization format" });
        }

        const token = auth[1];
        const decoded = jwt.decode(token, jwtSecret);

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ message: "Invalid token" });
        }

        const user = await AddedCart.findOne({ userId: decoded.userId });

        if (user) {
            // Check if the product already exists for this user
            const productExist = await AddedCart.findOne({
                userId: decoded.userId,
                "userCart.product_name": body.product_name
            });

            if (!productExist) {
                // Product does not exist, push new product to cart
                const addedcart = await AddedCart.updateOne(
                    { userId: decoded.userId },
                    {
                        $push: {
                            userCart: {
                                product_name: body.product_name,
                                img: body.img,
                                price: body.price,
                                qty: body.qty
                            }
                        }
                    }
                );

                if (addedcart.modifiedCount === 1) {
                    return res.json({ message: "Product added to cart" });
                } else {
                    return res.status(500).json({ message: "Failed to add product to cart" });
                }

            } else {
                // Product exists, increment quantity
                const updatedCart = await AddedCart.updateOne(
                    {
                        userId: decoded.userId,
                        "userCart.product_name": body.product_name
                    },
                    {
                        $inc: { "userCart.$.qty": 1 }
                    }
                );

                if (updatedCart.modifiedCount === 1) {
                    return res.json({ message: "Product quantity incremented" });
                } else {
                    return res.status(500).json({ message: "Failed to increment product quantity" });
                }
            }

        } else {
            // User does not have a cart, create cart with the first product
            const created = await AddedCart.create({
                userId: decoded.userId,
                userCart: [
                    {
                        product_name: body.product_name,
                        img: body.img,
                        price: body.price,
                        qty: body.qty
                    }
                ]
            });

            if (created) {
                return res.json({ message: "Cart created and product added" });
            } else {
                return res.status(500).json({ message: "Failed to create cart" });
            }
        }

    } catch (err) {
        console.error("Error in /addedcart:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

routes.get('/addcartproducts',async(req, res)=>{
        const {authorization} = req.headers;
        if(authorization){
              const auth = authorization.split(' ');
              if(auth[0] == "Bearer"){
                  const token = auth[1];
                  const decoded = jwt.decode(token, jwtSecret);
                  const cart = await AddedCart.findOne({
                            userId: decoded.userId
                  })
                  return res.json({
                        cart
                  })
              }
          } 
          return res.status(400).json({
                message: "error"
          })

});

routes.post('/deletecart', handleuserExist, async (req, res) => {
    const body = req.body;
    const head = req.headers;

    const cart = await AddedCart.findOneAndUpdate(
        {
            userId: head.userId
        },
        {
            $pull: { userCart: { product_name: body.product_name } }
        },
        { new: true } 
    );

    return res.json({
        message: "Product removed successfully",
        
    });
});





module.exports = routes;
