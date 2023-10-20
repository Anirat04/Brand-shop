/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const allCartsInfo = useLoaderData()
    // const { _id, productImg, productName, brand, ratings, price, productType, description } = allCartsInfo;
    // console.log(allCartsInfo)
    const productsPrice = allCartsInfo;

    // Calculate the total price
    const totalPrice = productsPrice.reduce((sum, product) => sum + (parseFloat(product.price) || 0), 0);

    console.log("Total Price:", totalPrice);

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://a-10-sell-shop-server.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="bg-slate-50">
            <div className="pb-[100px]">
                <div className="common-heading text-center py-[60px]">
                    <h1 className="text-[40px] font-bold text-[#2b87ff]">Your Cart</h1>
                    <h3 className="text-[18px] italic text-black">Let's by Happiness</h3>
                </div>
                <div className=" flex justify-center mx-auto">
                    <div className="flex shadow-2xl flex-col justify-items-center max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 bg-white">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold">Your cart</h2>
                            <h2 className="text-xl font-semibold">Items: {allCartsInfo.length}</h2>
                        </div>
                        <ul className="flex flex-col divide-y divide-gray-700">
                            {
                                allCartsInfo?.map(cart => (
                                    <li key={cart._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                        <div className="flex w-full space-x-2 sm:space-x-4">
                                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={cart.productImg} alt="Polaroid camera" />
                                            <div className="flex flex-col justify-between w-full pb-4">
                                                <div className="flex justify-between w-full pb-2 space-x-2">
                                                    <div className="space-y-1">
                                                        <h3 className="text-lg font-semibold leadi sm:pr-8">{cart.productName}</h3>
                                                        <p className="text-sm dark:text-gray-400">Type: <span className=" capitalize">{cart.productType}</span></p>
                                                        <p className="text-sm dark:text-gray-400">Brand: <span className=" capitalize">{cart.brand}</span></p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-semibold">${cart.price}</p>
                                                        <p className="text-sm text-success dark:text-gray-600">Free Shiping</p>
                                                    </div>
                                                </div>
                                                <div className="flex text-sm divide-x">
                                                    <button onClick={() => handleDelete(cart._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                            <rect width="32" height="200" x="168" y="216"></rect>
                                                            <rect width="32" height="200" x="240" y="216"></rect>
                                                            <rect width="32" height="200" x="312" y="216"></rect>
                                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                        </svg>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                                        </svg>
                                                        <span>Add to favorites</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="space-y-1 text-right">
                            <p>Total amount:
                                <span className="font-semibold"> ${totalPrice} </span>
                            </p>
                            <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <Link to='/'>
                                <button type="button" className="px-6 py-2 border rounded-md bg-[#2b87ff] text-white hover:border-[#2b87ff] hover:bg-transparent hover:text-[#2b87ff] dark:border-violet-400">Back
                                    <span className="sr-only sm:not-sr-only"> to shop</span>
                                </button>
                            </Link>
                            <button type="button" className="px-6 py-2 border rounded-md bg-[#2b87ff] text-white hover:border-[#2b87ff] hover:bg-transparent hover:text-[#2b87ff] dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                                <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;