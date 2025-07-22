import { useEffect, useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { locationNameAtom } from '../Recoil/Context';

export const  Sidebar = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const [locationName, setlocaitonName] = useRecoilState(locationNameAtom);
    const color = `bg-emerald-100 border-r-4`;

    useEffect(()=>{
          setlocaitonName(location.pathname);
    },[location.pathname])
     return (
         <div className="h-screen w-10  md:w-58 border-gray-300 border-r text-neutral-700">
              <div onClick={()=>navigate("/home/seller")} className={`w-full cursor-pointer h-12 flex ${locationName=="/home/seller"?color:null} border-green-500 p-2 gap-3 font-semibold items-center`}>
                 <img src="/add_icon.svg" alt="" />
                 <p className=" hidden md:block">Add Products</p>
              </div>

               <div onClick={()=>navigate("/home/seller/product-list")} className={`w-full cursor-pointer h-12 flex  ${locationName=="/home/seller/product-list"?color:null}  border-green-500 p-2 gap-3 font-semibold items-center`}>
                 <img src="/product_list_icon.svg" alt="" />
                 <p className="hidden md:block">Product List</p>
              </div>

               <div onClick={()=>navigate("/home/seller/orders")} className={`w-full cursor-pointer h-12 flex ${locationName=="/home/seller/orders"?color:null}  border-green-500 p-2 gap-3 font-semibold items-center`}>
                 <img src="/order_icon.svg" alt="" />
                 <p className="hidden md:block">Orders</p>
              </div>
         </div>
     )
}
