import { RecoilRoot } from "recoil"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Addproduct } from "../components/Addproduct"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { ProductList } from "../components/ProductList"

export const SellerHome = () => {
     const location = useLocation();
  
     return (
          <>
               <Navbar seller={true}/>
               <div className="flex">
                    <RecoilRoot>
                         <Sidebar />

                       {location.pathname == "/home/seller"?(
                         <Addproduct />
                       ):null}

                       {location.pathname == "/home/seller/product-list"?(
                          <ProductList/>
                       ):null}

                    </RecoilRoot>
               </div>
          </>

     )
}