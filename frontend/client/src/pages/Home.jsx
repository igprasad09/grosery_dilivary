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
import { CartSkeleton } from "../components/CartSkeleton";

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
        axios.get('https://grosery-dilivary.vercel.app/api/v1/bestseller', {
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
                    Array(5).fill("").map((_,index)=>(
                       <CartSkeleton key={index}/>         
                    ))
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
