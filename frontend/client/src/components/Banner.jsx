export const Banner = () => {
    return (
        <div className="p-6 md:p-10 md:pl-27 md:pr-27">

            <div className="flex flex-col gap-3 absolute md:p-20 p-5 mt-90 md:mt-0 text-gray-700 md:text-5xl text-3xl z-30">
                <p className="font-black ">Freshness You Can</p>
                <p className="font-black ">Trust, Savings You</p>
                <p className="font-black ">Will Love!</p>
                <span className="flex gap-2 items-center font-semibold text-sm">
                    <button className=" bg-emerald-600 hover:bg-emerald-800 cursor-pointer text-white w-32 rounded-sm font-semibold h-10 ">Shop now</button>
                    <div className="flex items-center group cursor-pointer">
                        <p className="pl-6">Explore deals</p>
                        <img
                            src="/black_arrow_icon.svg"
                            className="transition-all pl-1 duration-300 ease-in-out group-hover:pl-4"
                            alt="Arrow"
                        />
                    </div>
                </span>
            </div>
            <img
                className="md:block hidden relative"
                src="/images/main_banner_bg.png"
                alt="Colorful  grocery-themed banner with fresh fruits and vegetables arranged on a bright background, conveying a cheerful and inviting atmosphere"
            />
            <img
                className="md:hidden block relative"
                src="/images/main_banner_bg_sm.png" alt="" />
        </div>
    )
}