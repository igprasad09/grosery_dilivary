import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Signin() {
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    

    function handleSignup(){
         axios.post('https://grosery-dilivary.vercel.app/user/signin',{
               email: inputEmail,
               password: inputPassword
         }).then((res)=>{
              alert("successfully Signin");
              localStorage.setItem('token',"Bearer " + res.data.token);
              navigate('/home');
         }).catch(err=>alert(err));
    }
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src="https://res.cloudinary.com/dcazlekl5/image/upload/v1752903787/logo_fpftkd.svg"
                            className="w-32 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign In
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} placeholder="Email" />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} placeholder="Password" />
                                <button 
                                    onClick={handleSignup}
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Sign In
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                   <p onClick={()=>navigate('/signup')} className="mt-6 text-xs text-blue-600 underline cursor-pointer text-center">
                                       Create New Account
                                   </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 bg-[url(https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg)] xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        >
                    </div>
{/* https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg)] xl:m-16 w-full bg-contain bg-center bg-no-repeat                     */}
                </div>
            </div>
        </div>

    )
}

export default Signin
