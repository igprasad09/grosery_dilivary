const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@clusterlearn.9aeov48.mongodb.net/grocery_delivery');

const Cart = mongoose.model('Cart',{
  product_name: String,
  product_discription: String,
  category: String,
  product_price: String,
  offer_price: String,
  live:Boolean
},'Cart');

const CartImgUrl = mongoose.model('Cartimgurl',{
        productId: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Cart",
        },
        path: [],
        file_name: [],
},'CartImgUrl');

const Users = mongoose.model('Users',{
         email: String,
         password: String
},'Users');

const AddedCart = mongoose.model('AddedCart',{
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Users"
            },
            userCart: []
},'AddedCart');

module.exports = {
     Cart,
     CartImgUrl,
     Users,
     AddedCart
}