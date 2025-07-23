import { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { cartCount } from "../Recoil/Context";

export const Navbar = ({ seller , onclick, onchange}) => {
    const [menu, setMenu] = useState(false);
    const cartvalueCount = useRecoilValue(cartCount); 
    const navigate = useNavigate();
    function handleMenu() {
        setMenu(!menu);
    }
    
    return seller ? (
        <div className="border-b-1 border-gray-300 py-3 flex justify-between">
            <img src="/logo.svg" className="ml-5" alt="" />
            <span className="flex gap-4 text-gray-500 items-center mr-5">
                <p className="font-semibold text-sm">Hi! Admin</p>
                <button className="border-1 px-3 py-1 rounded-2xl border-gray-500 text-sm">Logout</button>
            </span>
        </div>
    ) : (
        <div className="">
            <div className="border-b-1 border-gray-300 py-3 flex justify-between">
                <img src="/logo.svg" className="ml-5" alt="" />

                <span className="flex gap-6 items-center">
                    
                    <button onClick={onclick} className="text-[12px] hidden md:block focus:border-neutral-400 border rounded-r-full text-neutral-500 border-neutral-300 rounded-l-full w-30 h-6">Seller Dashboard</button>
                     <Link to="/home">
                        <p className="hidden md:block font-medium text-neutral-600">Home</p>  
                     </Link>
                    <Link to="/products">
                        <p className="hidden md:block text-neutral-600 text-md font-medium">All Product</p>   
                     </Link>
                     <input onChange={onchange}
                            className="text-sm hidden md:block border border-neutral-300 rounded-full px-2 pl-5 h-7 focus:border-neutral-300 focus:outline-none "
                            type="text"
                            placeholder="Search Products"
                        />

                    <div className="relative">
                        <div className=" absolute  left-6 -top-1">
                            
                        </div>
                       <Link to="/cart">
                          <img src="/cart_icon.svg" alt="" className="w-6" />
                       </Link>
                    </div>
                    <img src="/menu_icon.svg" alt="" className="mr-5 w-5 md:hidden" onClick={handleMenu} />
                   <Link to="/signup">
                    <button className="hidden md:block cursor-pointer bg-emerald-500 mr-25 text-white text-center w-23 p-1 font-semibold rounded-r-full rounded-l-full">Login</button>
                   </Link>
                </span>

            </div>
            {menu ? (<span className=" absolute bg-white w-full pl-5 z-50 text-neutral-800">
                <Link to="/home"><p className="p-2">Home</p></Link>
                <Link to="/products"><p className="p-2">All Product</p></Link>
                <p className="p-2">Contant</p>
                 <Link to="/signup">
                <button className="bg-green-400 m-2 mb-4 text-white w-20 h-8 rounded-r-full rounded-l-full ">Login</button>
                 </Link>
            </span>) : null}
        </div>
    );
};
