import { Link } from "react-router-dom";

const Details = () => {
    return (
        <div>
            <div className="common-heading text-center py-[60px]">
                <h1 className="text-[40px] font-bold text-[#2b87ff]">Product Details</h1>
                <h3 className="text-[18px] italic text-black">Get authentic brand products</h3>
            </div>
            <div className="card-container max-w-[900px] mx-auto rounded-lg">
                <div className="">
                    <img className="min-w-full max-h-[450px] rounded-t-lg" src="https://i.imgur.com/QpjAiHq.jpg" />
                </div>
                <div className="flex justify-between p-[20px] bg-white border rounded-lg mb-[20px]">

                    <div className="min-w-[500px]">
                        <div className="flex gap-6 items-center mb-3">

                            <h5 className="text-[26px] font-bold ">Quant olap shirts</h5>
                            <div className="flex">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700">
                            <p className="bg-slate-200 rounded-lg px-5 inline-block mb-3">Type: kdfeih</p>
                            {/* <br /> */}
                            <p className="bg-slate-200 rounded-lg px-5 inline-block ml-[10px]">Brand: kdfeih</p>
                        </div>

                        <div className="max-w-[600px]">
                            <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>

                    </div>
                    <div className=" mt-1">
                        <div className="d-flex flex-row align-items-center">
                            <h4 className="text-[26px]">$13.99</h4>
                        </div>
                        <h6 className="text-success mb-[40px]">Free shipping</h6>
                        <div className="d-flex flex-column mt-4">
                            <Link to={`#`} className="max-w-[250px] mx-auto">
                                <button type="button" className="min-w-[120px] py-[5px] font-semibold rounded-md bg-[#2b87ff] hover:bg-white hover:border-[#2b87ff] hover:border-x-2 hover:border-y-2 text-white hover:text-[#2b87ff]">Add to cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;