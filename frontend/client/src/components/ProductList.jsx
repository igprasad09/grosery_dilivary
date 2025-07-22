import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

export const ProductList = () =>{
     const [isChecked, setIsChecked] = useState(true);
     const [product_list, setProductList] = useState(null);

     function handleToggleButton(element){
           axios.post("http://localhost:3000/api/v1/changelive",element).then((res)=>{
               
           }).catch(err=>alert(err));
            axios.get("http://localhost:3000/api/v1/allproductlist").then((res)=>{
                 setProductList(res.data);
          }).catch(err=>alert(err));
     }
     useEffect(()=>{
          axios.get("http://localhost:3000/api/v1/allproductlist").then((res)=>{
                 setProductList(res.data);
          }).catch(err=>alert(err));
     },[product_list]);

     return (
         <div className="p-8 font-bold w-full">
              <p className="text-neutral-600">All Product</p>
              <table className="md:table-auto table-fixed w-full overflow-hidden">
                    <thead className="text-gray-900 text-sm text-left">
                         <tr>
                             <th className="px-4 py-3 font-semibold truncate">Product</th>
                             <th className="px-4 py-3 font-semibold truncate">Category</th>
                             <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>
                             <th className="px-4 py-3 font-semibold truncate">In Stock</th>
                         </tr>
                    </thead>
                    <tbody className="text-sm text-gray-500">
                            {product_list?(
                              product_list.cart.map((element, index)=>(
                                    <tr key={element._id} className="border-t text-left border-gray-500/20">
                              <th className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                   <div className="border border-gray-300 rounded p-2">
                                        <img className="w-16" src={product_list.imgurls[index].path[0]} alt="" />
                                   </div>
                                   <span className="truncate max-sm:hidden text-left w-full">{element.product_name}</span>
                              </th>
                              <th className="px-4 py-3">{element.category}</th>
                              <th className="px-4 py-3 max-sm:hidden">${element.product_price}</th>
                              <th className="px-4 py-3">
                                   <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                         <input type="checkbox" className="sr-only peer" checked={element.live} onChange={()=>handleToggleButton(element)}/>
                                         <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                         <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                   </label>
                              </th>
                          </tr>
                              ))
                            ):null}
                    </tbody>
              </table>
         </div>
     )
}