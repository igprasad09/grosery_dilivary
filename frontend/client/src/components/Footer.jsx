export const Footer = () => {
    return (
        <div className="bg-emerald-50">
            <div className=" md:flex md:justify-between mt-30">

                <div className="md:w-100 w-80 md:ml-30 ml-4 mt-10">
                    <img src="/logo.svg" className="mb-5" />
                    <p className="text-gray-500">We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
                </div>

                <div className="md:flex grid md:gap-15 mr-30 mt-10 ml-5">

                    <div className="">
                        <p className="font-semibold mb-4">Quick Links</p>
                        <ul className="text-neutral-600 text-sm ">
                            <li className="hover:underline cursor-pointer">Home</li>
                            <li className="hover:underline cursor-pointer">Best Sellers</li>
                            <li className="hover:underline cursor-pointer">Offers & Deals</li>
                            <li className="hover:underline cursor-pointer">Contact Us</li>
                            <li className="hover:underline cursor-pointer">FAQs</li>
                        </ul>
                    </div>

                    <div className="md:mt-0 mt-5">
                        <p className="font-semibold mb-4">Need help?</p>
                        <ul className="text-neutral-600 text-sm ">
                            <li className="hover:underline cursor-pointer">Delivery Information</li>
                            <li className="hover:underline cursor-pointer">Return & Refund Policy</li>
                            <li className="hover:underline cursor-pointer">Payment Methods</li>
                            <li className="hover:underline cursor-pointer">Track your Order</li>
                            <li className="hover:underline cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    <div className="md:mt-0 mt-5">
                        <p className="font-semibold mb-4">Follow Us</p>
                        <ul className="text-neutral-600 text-sm ">
                            <li className="hover:underline cursor-pointer">Instagram</li>
                            <li className="hover:underline cursor-pointer">Twitter</li>
                            <li className="hover:underline cursor-pointer">Facebook</li>
                            <li className="hover:underline cursor-pointer">YouTube</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="text-neutral-300 ml-25 mr-25 mb-5 mt-5"/>
            <p className="text-center text-neutral-700 mb-5">Copyright 2025 © GreatStack.dev All Right Reserved.</p>
        </div>
    )
}