/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {

    const detailsProduct = useLoaderData();
    const { productImg, productName, brand, ratings, price, productType, description } = detailsProduct;

    const handleAddToCart = () => {
        // send data to the server
        fetch('https://a-10-sell-shop-server.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detailsProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Enjoy Shoping!',
                    'Product added to the cart!',
                    'success'
                  )
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have already added this product to the cart!',
                  })
            })
    }


    return (
        <div className="pb-[100px] bg-slate-50">
            <div className="common-heading text-center py-[60px]">
                <h1 className="text-[40px] font-bold text-[#2b87ff]">Product Details of: {productName}</h1>
                <h3 className="text-[18px] italic text-black">Get authentic brand products</h3>
            </div>
            <div className="card-container max-w-[600px] mx-auto rounded-lg shadow-2xl">
                <div className="">
                    <img className="min-w-full max-h-[450px] rounded-t-lg" src={productImg} />
                </div>
                <div className="flex justify-between p-[20px] bg-white border rounded-lg mb-[20px]">

                    <div className="min-w-[400px]">
                        <div className="flex gap-6 items-center mb-3">

                            <h5 className="text-[26px] font-bold ">{productName}</h5>
                            <div className="flex">
                                <div className="rating mt-[8px] max-w-[75px]">
                                    {Array.from({ length: ratings }, (_, index) => (
                                        <input
                                            key={index}
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            disabled
                                        />
                                    ))}

                                    {/* Empty stars */}
                                    {Array.from({ length: Math.max(0, 5 - ratings) }, (_, index) => (
                                        <input
                                            key={`empty-${index}`}
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-gray-300"
                                            disabled
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="max-w-[400px]">
                            <p >{description}</p>
                        </div>

                    </div>
                    <div className=" mt-1 flex flex-col justify-start items-center">
                        <div className="d-flex flex-row align-items-center">
                            <h4 className="text-[26px]">${price}</h4>
                        </div>
                        <h6 className="text-success mb-[40px]">Free shipping</h6>

                        <div className="text-gray-700">
                            <p className="bg-slate-200 rounded-lg px-5 inline-block mb-3 capitalize">Type: {productType}</p>
                            <br />
                            <p className="bg-slate-200 rounded-lg px-5 inline-block capitalize">Brand: {brand}</p>
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <Link to={`#`} className="max-w-[250px] mx-auto">
                                <button onClick={handleAddToCart} type="button" className="min-w-[120px] py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Add to cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;