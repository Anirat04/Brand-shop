/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const updateProduct = useLoaderData();
    const { _id, productImg, productName, brand, ratings, price, productType, description } = updateProduct;
    console.log(_id, productImg, productName, brand, ratings, price, productType, description);
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const productImg = form.photoURL.value; //ok
        const productName = form.productName.value; //ok
        const brand = form.brand.value; //ok
        const ratings = form.ratings.value;
        const price = form.price.value;
        const productType = form.productType.value;
        const description = form.description.value;
        const updatedProduct = { productImg, productName, brand, ratings, price, productType, description }
        console.log(updatedProduct)

        // send data to the server
        fetch(`http://localhost:5000/brand-products/${_id}`, {
            method: 'PUT',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className="common-heading text-center py-[60px]">
                <h1 className="text-[40px] font-bold text-[#2b87ff]">Update your Product</h1>
                <h3 className="text-[18px] italic text-black">Get authentic brand products</h3>
            </div>
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                        <form onSubmit={handleUpdateProduct}>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                {/* image url input */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                                    <input type="text" defaultValue={productImg} name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product image URL" required />
                                </div>
                                {/* Product name input field here */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                    <input type="text" defaultValue={productName} name="productName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Name" required />
                                </div>
                                {/* brand name input field here */}
                                <div className="w-full">
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                    <select name="brand" defaultValue={brand} id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value='No Type Selected'>Select Brand Name</option>
                                        <option value="nike">Nike</option>
                                        <option value="adidas">Adidas</option>
                                        <option value="gucci">Gucci</option>
                                        <option value="zara">Zara</option>
                                        <option value="h&m">H&M</option>
                                        <option value="levi's">Levi's</option>
                                    </select>
                                </div>

                                {/* product Type of Product input field here */}
                                <div>
                                    <label htmlFor="productType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Product</label>
                                    <select name="productType" defaultValue={productType} id="productType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value='No Type Selected'>Select Product Type</option>
                                        <option value="shoe">Shoe</option>
                                        <option value="jeans">Jeans</option>
                                        <option value="shirt">Shirt</option>
                                        <option value="jacket">Jacket</option>
                                    </select>
                                </div>
                                {/* rattings input field here */}
                                <div className="w-full">
                                    <label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ratings</label>
                                    {/* <input type="text" name="ratings" id="retings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ratings" required="" /> */}
                                    <select name="ratings" defaultValue={ratings} id="ratings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value='No Type Selected'>Select Product Ratings</option>
                                        <option value="1">1 star ratings</option>
                                        <option value="2">2 star ratings</option>
                                        <option value="3">3 star ratings</option>
                                        <option value="4">4 star ratings</option>
                                        <option value="5">5 star ratings</option>
                                    </select>
                                </div>
                                {/* product price input field here */}
                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="number" defaultValue={price} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$000" required="" />
                                </div>
                                {/* product short description here */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea name="description" defaultValue={description} id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#2b87ff] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Add product
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateProduct;