export const WhyChooseUsSection = () => {
     return (
          <div className="md:p-10 p-3 relative w-fit">
               <img className="md:block hidden scale-90" src="/images/bottom_banner_image.png" alt="#" />
               <img className="md:hidden block scale-90" src="/images/bottom_banner_image_sm.png" alt="#" />

               <p className=" md:left-160 md:bottom-60 md:text-3xl text-2xl right-5 bottom-130 text-emerald-500 font-black absolute inset-0 flex items-center justify-center">
                    Why We Are the Best?
               </p>

               <div className=" md:left-220 w-60 md:w-90 md:bottom-30 md:text-2xl right-5 md:right-0 left-14 bottom-100 text-gray-600 font-bold absolute inset-0 flex items-center justify-center">
                    <span className="flex gap-4">
                         <img src="/delivery_truck_icon.svg" />
                         <span className="">
                              <p className="">Fastest Delivery</p>
                              <p className="md:text-sm text-[10px] font-normal">Groceries delivered in under 30 minutes.</p>
                         </span>
                    </span>
               </div>

               <div className=" md:left-220 w-60 md:w-90 md:bottom-0 md:text-2xl right-5 md:right-0 left-13 bottom-42 text-gray-600 font-bold absolute inset-0 flex items-center justify-center">
                    <span className="flex gap-4">
                         <img src="/leaf_icon.svg" />
                         <span className="">
                              <p className="">Freshness Guaranteed</p>
                              <p className="md:text-sm text-[10px] font-normal">Fresh produce straight from the source.</p>
                         </span>
                    </span>
               </div>


               <div className=" md:left-219 w-60 md:w-90 md:-bottom-30 md:text-2xl right-5 md:right-0 left-12 bottom-15 text-gray-600 font-bold absolute inset-0 flex items-center justify-center">
                    <span className="flex gap-4">
                         <img src="/coin_icon.svg" />
                         <span className="">
                              <p className="">Affordable Prices</p>
                              <p className="md:text-sm text-[10px] font-normal">Quality groceries at unbeatable prices.</p>
                         </span>
                    </span>
               </div>

               
                 <div className=" md:left-220 w-60 md:w-90 md:-bottom-60 md:text-2xl right-5 md:right-0 left-12 bottom-70 text-gray-600 font-bold absolute inset-0 flex items-center justify-center">
                    <span className="flex gap-4">
                         <img src="/trust_icon.svg" />
                         <span className="">
                              <p className="">Trusted by Thousands</p>
                              <p className="md:text-sm text-[10px] font-normal">Loved by 10,000+ happy customers.</p>
                         </span>
                    </span>
               </div>


          </div>

     )
}