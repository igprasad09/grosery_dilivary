export const Category = () =>{
     return (
         <div className="p-6 md:p-1 md:pl-27 md:pr-27">
             <label className="text-3xl text-gray-700 font-semibold">Categories</label>
             <div className=" grid grid-cols-2 md:grid-cols-6 md:gap-10 gap-7 mt-6">

                 <div className="bg-orange-100  p-4 rounded-sm group">
                     <img src="/images/organic_vegitable_image.png " className=" scale-90 transition cursor-pointer group-hover:scale-100"/>
                     <p className="font-semibold text-center text-gray-800 text-[13px]">Organic Veggies</p>
                 </div> 
                  <div className="bg-red-100  p-4 rounded-sm group">
                     <img src="/images/fresh_fruits_image.png" className=" scale-90 transition cursor-pointer group-hover:scale-100"/>
                     <p className="font-semibold text-center text-gray-800 text-[13px]">Organic Veggies</p>
                 </div> 
                  <div className="bg-lime-50  p-4 rounded-sm group">
                     <img src="/images/bottles_image.png " className=" scale-90 transition cursor-pointer group-hover:scale-100"/>
                     <p className="font-semibold text-center text-gray-800 text-[13px]">Organic Veggies</p>
                 </div> 
                  <div className="bg-green-100  p-4 rounded-sm group">
                     <img src="/images/maggi_image.png " className=" scale-90 transition cursor-pointer group-hover:scale-100"/>
                     <p className="font-semibold text-center text-gray-800 text-[13px]">Organic Veggies</p>
                 </div> 
                  <div className="bg-sky-100 p-4 rounded-sm group">
                     <img src="/images/bakery_image.png " className=" scale-90 transition cursor-pointer group-hover:scale-100"/>
                     <p className="font-semibold text-center text-gray-800 text-[13px]">Organic Veggies</p>
                 </div> 
                  <div className="bg-purple-100  p-4 rounded-sm group">
                     <img src="/images/grain_image.png " className=" scale-90 transition cursor-pointer group-hover:scale-100"/>
                     <p className="font-semibold text-center text-gray-800 text-[13px]">Organic Veggies</p>
                 </div> 
                
             </div>
         </div>
     )
}