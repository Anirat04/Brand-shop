/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {

    const [brandData, setBrandsData] = useState([]);
    const takeBrandData = useLoaderData();
    const currentBrand = useParams();

    useEffect(() => {
        // Use useEffect to update state once, after initial render
        const takeName = takeBrandData?.map(data => data);
        setBrandsData(takeName);
    }, [takeBrandData]); // Add takeBrandData as a dependency
    const brandCards = brandData?.filter(brands => brands.brand.toLowerCase() == currentBrand.brand.toLowerCase())

    const checkLength = brandCards.length;
    return (
        <>
            <div className="carousel w-full max-h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sb0CjGL/5952228-1877.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KDHskxJ/nike-shoe-adver.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Jd2Tj3L/original-68985d7f6e10b26fe7a92f9e48c494bf.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="pb-[100px] bg-slate-50">
                {
                    checkLength ? <>
                        <div className="common-heading text-center py-[60px]">
                            <h1 className="text-[40px] font-bold text-[#2b87ff]">All Products of {currentBrand.brand}</h1>
                            <h3 className="text-[18px] italic text-black">Get authentic brand products</h3>
                        </div>
                    </>
                        : <h1 className="min-h-[500px] flex justify-center items-center capitalize text-6xl font-bold">No Products Available</h1>
                }

                <div className="card-container max-w-[1300px] grid grid-cols-4 justify-items-center gap-[10px] mx-auto">
                    {
                        brandCards?.map(data => (
                            <div key={data._id} className="flex shadow-lg rounded-[10px] w-[300px] max-w-[300px] flex-col bg-white border mb-[20px]">
                                <div className=" ">
                                    <img className="min-w-full max-h-[250px] rounded-t-[10px] " src={data.productImg} />
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between flex-row align-items-center">
                                        <h4 className="text-[26px]">${data.price}</h4>
                                        <div className="rating mt-[8px] max-w-[75px]">
                                            {Array.from({ length: data.ratings }, (_, index) => (
                                                <input
                                                    key={index}
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    disabled
                                                />
                                            ))}

                                            {/* Empty stars */}
                                            {Array.from({ length: Math.max(0, 5 - data.ratings) }, (_, index) => (
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
                                    <h5 className="text-[26px] font-bold truncate">{data.productName}</h5>

                                    <div className="max-w-[400px]">
                                        <p className="truncate text-[20px]">{data.description}</p>
                                    </div>

                                    <div className="text-gray-600 flex gap-3">
                                        <p className="rounded-lg bg-slate-300 px-[5px] inline-block capitalize">Type: {data.productType}</p>
                                        <p>||</p>
                                        <p className="rounded-lg bg-slate-300 px-[5px] inline-block uppercase">Brand: {data.brand}</p>
                                    </div>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left px-5 pb-5">
                                    <div className="flex flex-col">
                                        <Link to={`/brand-products/${data.brand}/product-details/${data._id}`} className="min-w-full mx-auto ">
                                            <button type="button" className="min-w-full mb-[15px] py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Details</button>
                                        </Link>
                                        <Link to={`/brand-products/${data.brand}/update-product/${data._id}`} className="min-w-full mx-auto">
                                            <button type="button" className="min-w-full py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Update</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </>

    );
};

export default BrandProducts;