import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const allCartsInfo = useLoaderData()
    const { _id, productImg, productName, brand, ratings, price, productType, description } = allCartsInfo;
    return (
        <div>
            <div className="common-heading text-center py-[60px]">
                <h1 className="text-[40px] font-bold text-[#2b87ff]">Product Details of: {allCartsInfo.length}</h1>
                <h3 className="text-[18px] italic text-black">Get authentic brand products</h3>
            </div>
        </div>
    );
};

export default MyCart;