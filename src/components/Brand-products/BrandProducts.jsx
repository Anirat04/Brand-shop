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
    // console.log(takeBrandData)
    // console.log(brandData);
    console.log(brandCards)
    // if(brandCards.length == 0){
    //     console.log('No products available')
    // }
    const checkLength = brandCards.length;
    // console.log(currentBrand.brand);

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
            <div className="card-container max-w-[900px] mx-auto">
                {
                    brandCards?.map(data => (
                        <div key={data._id} className="flex p-[20px] bg-white border rounded mb-[20px]">
                            <div className=" ">
                                <img className="max-w-[200px] rounded-lg" src="https://i.imgur.com/QpjAiHq.jpg" />
                            </div>
                            <div className="min-w-[500px] ml-5">
                                <h5 className="text-[26px] font-bold mb-3">Quant olap shirts</h5>
                                <div className="text-gray-700 ">
                                    <p className="bg-slate-200 rounded-lg px-5 inline-block mb-3">Type: kdfeih</p>
                                    <br />
                                    <p className="bg-slate-200 rounded-lg px-5 inline-block">Brand: kdfeih</p>
                                </div>
                                <div className="flex items-center space-x-2 text-yellow-500 mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-[16px] font-bold">4.5</span>
                                </div>
                                <div className="max-w-[400px]">
                                    <p className="truncate">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </div>

                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="text-[26px]">$13.99</h4>
                                </div>
                                <h6 className="text-success mb-[40px]">Free shipping</h6>
                                <div className="d-flex flex-column mt-4">
                                    <Link to={`#`} className="max-w-[250px] mx-auto ">
                                        <button type="button" className="min-w-[120px] mb-[15px] py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Details</button>
                                    </Link>
                                    <Link to={`#`} className="max-w-[250px] mx-auto">
                                        <button type="button" className="min-w-[120px] py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Update</button>
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