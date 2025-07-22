import { useEffect, useRef, useState } from "react";
import axios from 'axios';

export const Addproduct = () => {
    const fileInputRef = useRef(null);
    const formData = new FormData();

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [product_Information, setProductInformaiton] = useState({
        product_Img: {
            allfiles: []
        },
        product_name: "",
        product_discription: "",
        category: "",
        product_price: "",
        offer_price: ""
    });

    const handleAllInformation = (event) => {
        event.preventDefault();
        setProductInformaiton(prev => ({
            ...prev,
            product_Img: {
                allfiles: files
            }
        }));
    }

    function handleImageClick() {
        fileInputRef.current.click();
    }
    function handleUploadedFile(event) {
        const file = event.target.files[0];
        if (files.length >= 4) {
            alert("Only 4 Images Can Be Able To Ubload")
        }
        else {
            if (file) {
                setFiles(prev => [...prev, file]);
                URL.createObjectURL(file);
            }
        }
    }
    useEffect(() => {
        if (product_Information.product_name) {
            if (product_Information.product_Img.allfiles.length == 0) {
                alert("Image Is Required")
            } else {
                setLoading(true);
                formData.append("product_name", product_Information.product_name);
                formData.append("product_discription", product_Information.product_discription);
                formData.append("category", product_Information.category);
                formData.append("product_price", product_Information.product_price);
                formData.append("offer_price", product_Information.offer_price);
              
                // Append files
                files.forEach((file) => {
                    formData.append(`files`, file); // use `files` or `files[]` depending on your backend parsing
                });

                axios.post("http://localhost:3000/api/v1/addproduct", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }).then(res => {
                    console.log(res.data);
                    setLoading(false);
                    alert("Successfully added")
                }).catch(err=>{
                    alert(err);
                    setLoading(false);
                });

                setProductInformaiton(prev => ({
                    ...prev,
                    product_name: "",
                    product_price: 0,
                    product_discription: "",
                    offer_price: 0,
                    category: "Select Category"
                }));
                setFiles([])
            }
        }
    }, [product_Information.product_Img.allfiles])

    return (
        <div className="font-semibold text-neutral-700 p-8 w-full overflow-hidden overflow-y-scroll">

            {loading ? (<div role="status" className="absolute h-180 backdrop-blur-sm inset-0 z-10 flex items-center justify-center">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>):null}

            <p className="">Product Image</p>
            <form action="" onSubmit={handleAllInformation}>
                <div className="grid md:flex grid-cols-3 gap-2 mt-2 mb-3">
                    <input type="file" ref={fileInputRef} className="hidden" onChange={handleUploadedFile} />
                    <img src={files[0] ? URL.createObjectURL(files[0]) : "/upload_area.png"} alt="" onClick={handleImageClick} className="w-23 h-15 cursor-pointer" />
                    <img src={files[1] ? URL.createObjectURL(files[1]) : "/upload_area.png"} alt="" onClick={handleImageClick} className="w-23 h-15 cursor-pointer" />
                    <img src={files[2] ? URL.createObjectURL(files[2]) : "/upload_area.png"} alt="" onClick={handleImageClick} className="w-23 h-15 cursor-pointer" />
                    <img src={files[3] ? URL.createObjectURL(files[3]) : "/upload_area.png"} alt="" onClick={handleImageClick} className="w-23 h-15 cursor-pointer" />
                </div>

                {/* product name */}
                <p className="">Product Name</p>
                <input onChange={(e) => setProductInformaiton(prev => ({
                    ...prev,
                    product_name: e.target.value
                }))} value={product_Information.product_name} type="text" required placeholder="Type here" className="border focus:outline-none w-65 md:w-100 px-4 py-2 mt-1 font-normal border-neutral-300 rounded-sm" />

                {/* product discription */}
                <p className="mt-4">Product Discription</p>
                <textarea onChange={(e) => setProductInformaiton(prev => ({
                    ...prev,
                    product_discription: e.target.value
                }))} value={product_Information.product_discription} type="text" required placeholder="Type here" className="border focus:outline-none h-30 w-65 md:w-100 px-4 py-2 mt-1 font-normal border-neutral-300 rounded-sm" />

                {/* Category */}
                <p className="mt-2">Category</p>
                <select onChange={(e) => setProductInformaiton(prev => ({
                    ...prev,
                    category: e.target.value
                }))} value={product_Information.category} name="" required className="font-normal border focus:outline-neutral-400 w-65 md:w-100 h-9 mt-1 px-3 rounded-sm border-neutral-300">
                    <option value="">Select Category</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Instant">Instant</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Grains">Grains</option>
                </select>

                <span className="flex gap-4">
                    <span className="">
                        <p className="mt-5">Product Price</p>
                        <input type="number" onChange={(e) => setProductInformaiton(prev => ({
                            ...prev,
                            product_price: e.target.value
                        }))} value={product_Information.product_price} required className="border md:w-48 font-normal rounded-sm py-1 px-2 w-30 mt-1 border-neutral-300" />
                    </span>
                    <span className="">
                        <p className="mt-5">Offer Price</p>
                        <input onChange={(e) => setProductInformaiton(prev => ({
                            ...prev,
                            offer_price: e.target.value
                        }))} value={product_Information.offer_price} type="number" required className="border md:w-48 font-normal rounded-sm py-1 px-2 w-30 mt-1 border-neutral-300" />
                    </span>
                </span>

                <button type="submit" className="bg-green-400 px-8 py-2 rounded-sm mt-5 cursor-pointer text-white">
                    Add
                </button>
            </form>

        </div>
    )
}