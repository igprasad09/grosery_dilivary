import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Cart } from "../components/Cart";
import { Category } from "../components/Category";
import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { Subscribe } from "../components/Subscribe";
import { Footer } from "../components/Footer";
import { SellerLogin } from "../components/SellerLogin";

function Home() {
    const navigate = useNavigate();
    const [bestsellerProducts, setBestsellerProducts] = useState([]);

    const [sellerLogin, setSellerLogin] = useState(false);

    function sellerLoginToggle() {
        setSellerLogin(!sellerLogin);
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/signin');
        }
        axios.get('https://grosery-dilivary-1.onrender.com/api/v1/bestseller', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            setBestsellerProducts(res.data);
        }).catch((err) => alert(err));
    }, []);
    return (
        <div className="">
            <Navbar seller={false} onclick={sellerLoginToggle} />

            {sellerLogin ? <SellerLogin /> : null}

            <Banner />
            <Category />
            <p className="pl-25 mt-6 text-3xl text-gray-700 font-semibold ">Best Sellers</p>

            <div className=" grid md:grid-cols-5 grid-cols-2 md:pl-18 md:pr-16 overflow-hidden ">

                {bestsellerProducts.cart ? (
                    bestsellerProducts.cart.map((element, index) => (
                        <Link to={`/products/productview?id=` + element._id} key={element._id}>
                            <Cart product_imf={element} product_img={bestsellerProducts.path[index]} />
                        </Link>
                    ))
                ) : (

                    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                        <div className="flex items-center w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[400px]">
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[440px]">
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[360px]">
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>

                )}

            </div>

            {/* whychoseussection */}
            <WhyChooseUsSection />


            {/* subscribe section */}
            <Subscribe />

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Home
