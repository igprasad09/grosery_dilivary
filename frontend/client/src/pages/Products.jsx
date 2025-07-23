import { useEffect, useState } from "react";
import { Cart } from "../components/Cart";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { SellerLogin } from "../components/SellerLogin";
import { CartSkeleton } from "../components/CartSkeleton";

function Products() {
   const [product_imf, setProduct_imf] = useState({ products: [], path: [] });
   const [sellerLogin, setSellerLogin] = useState(false);
   const [searchfilterProduct, setsearchfilterProduct] = useState([]);
   const [searchfilterImg, setSearchfilterImg] = useState([]);
   const [loading, setloading] = useState(true);
   const [input, setInput] = useState("");

   useEffect(() => {
      axios.get("https://grosery-dilivary.vercel.app/api/v1/products", {
         headers: {
            Authorization: localStorage.getItem('token')
         },
      }).then((res) => {
         setProduct_imf(res.data);
      });
   }, []);

   useEffect(() => {
      if (product_imf?.products?.length && product_imf?.path?.length) {
         const filterProduct = product_imf.products.filter(element =>
            element.product_name.toLowerCase().startsWith(input.toLowerCase())
         );
         const ids = filterProduct.map(element => element._id.toString());

         const filteredImages = product_imf.path.filter(element =>
            ids.includes(element.id)
         );

         setsearchfilterProduct(filterProduct);
         setSearchfilterImg(filteredImages);
         setloading(false)
      }
   }, [input, product_imf]);

   function sellerLoginToggle() {
      setSellerLogin(!sellerLogin);
   }

   return (
      <div className="">
         <Navbar
            seller={false}
            onchange={(e) => setInput(e.target.value)}
            onclick={sellerLoginToggle}
         />

         {sellerLogin && <SellerLogin />}

         <div className="md:p-20 md:mt-0 mt-10 md:pl-30 md:pr-30">
            <p className="text-2xl md:ml-0 ml-4 font-semibold text-gray-600">ALL PRODUCTS</p>
            <div className="grid overflow-hidden md:ml-0 -ml-2 md:grid-cols-5 grid-cols-2">
               {loading ? (
                  // Show 4 skeletons while loading
                  Array(10).fill("").map((_, i) => <CartSkeleton key={i} />)
               ) : (
                  searchfilterProduct?.length > 0 && (
                     searchfilterProduct.map((element) => (
                        <Link to={`/products/productview?id=${element._id}`} key={element._id}>
                           <Cart
                              product_imf={element}
                              product_img={
                                 searchfilterImg.find(img => img.id === element._id?.toString())?.path || ""
                              }
                           />
                        </Link>
                     ))
                  )
               )}
            </div>
         </div>
      </div>
   );
}

export default Products;
