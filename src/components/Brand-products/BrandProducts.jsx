/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
    // const [brandData, setBrandsData] = useState([])

    // const takeBrandData = useLoaderData()
    // const currentBrand = useParams()
    // const takeName = takeBrandData?.map(data => data);
    // setBrandsData(takeName)
    // console.log(brandData)
    // // console.log(takeBrandData)
    // console.log(currentBrand)
    // // const brandCards = takeBrandData?.find(details => details.productName == currentID.id)
    // // console.log(eventDetails)


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
        <div>
            {
                checkLength ? <>
                    <div className="common-heading text-center py-[60px]">
                        <h1 className="text-[40px] font-bold text-[#2b87ff]">All Products of {currentBrand.brand}</h1>
                        <h3 className="text-[18px] italic text-black">Get authentic brand products</h3>
                    </div>
                </>
                    : <h1>No Products Available</h1>
            }
            <div className="card-container max-w-[1300px] grid grid-cols-4 justify-items-center gap-[10px] mx-auto">
                {
                    brandCards?.map(data => (
                        <div key={data._id} className="flex shadow-lg rounded-[10px] w-[300px] max-w-[300px] flex-col bg-white border mb-[20px]">
                            <div className=" ">
                                <img className="min-w-full max-h-[250px] rounded-t-[10px] " src="https://i.imgur.com/QpjAiHq.jpg" />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between flex-row align-items-center">
                                    <h4 className="text-[26px]">$13.99</h4>
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
                                <h5 className="text-[26px] font-bold">Quant olap shirts</h5>

                                <div className="max-w-[400px]">
                                    <p className="truncate text-[20px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </div>

                                <div className="text-gray-600 flex gap-3">
                                    <p className="rounded-lg bg-slate-300 px-[5px] inline-block">Type: kdfeih</p>
                                    <p>||</p>
                                    <p className="rounded-lg bg-slate-300 px-[5px] inline-block">Brand: kdfeih</p>
                                </div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left px-5 pb-5">
                                <div className="flex flex-col">
                                    <Link to={`#`} className="min-w-full mx-auto ">
                                        <button type="button" className="min-w-full mb-[15px] py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Details</button>
                                    </Link>
                                    <Link to={`/brand-products/:brand/update-product/${data._id}`} className="min-w-full mx-auto">
                                        <button type="button" className="min-w-full py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>

    );
};

export default BrandProducts;