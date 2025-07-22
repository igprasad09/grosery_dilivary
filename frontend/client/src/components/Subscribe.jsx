export const Subscribe = () =>{
     return (
         <div className="text-center grid gap-5 mt-5">
               <p className="md:text-4xl text-2xl text-gray-700 font-semibold">Never Miss a Deal!</p>
               <p className="font-semibold text-md text-neutral-500">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
               <span className="flex justify-center items-center">
                     <input className="border rounded-l-sm px-5  border-neutral-300 focus:border-neutral-400 md:w-130 w-50 h-13" type="email" placeholder="Enter your emain id"/>
                     <button className="cursor-pointer font-semibold rounded-r-sm h-13 bg-emerald-400 border-neutral-300 md:w-34 w-30  text-white">Subscribe</button>
               </span>
         </div>
     )
}