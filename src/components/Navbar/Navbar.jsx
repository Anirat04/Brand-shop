import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { ProviderContext } from "../../provider/provider";

const navLinks = <>
    <NavLink className="navHoverClass" to="/">Home</NavLink>
    <NavLink className="navHoverClass" to="/addProduct">Add Product</NavLink>
    <NavLink className="navHoverClass" to="/mycarts">My Cart</NavLink>
</>


const Navbar = () => {
    const { user, logOut, loading } = useContext(ProviderContext)
    console.log(user)
    // const location = useLocation()


    // const navbarStyle = {
    //     color: location.pathname !== '/' ? '#000000' : '#ffffff',
    // };

    // this event handler is to log out users from the server
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log('error logging out', error))
    }
    return (
        <div>
            <div className="navbar bg-base-100 max-w-[1320px] mx-auto py-[20px]">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}
                    <Link>
                        <img src="https://i.ibb.co/NNfWNY5/logo.webp" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="nav-active menu menu-horizontal px-1 text-[20px] font-bold gap-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="ml-8">
                        {
                            loading ? <>
                            </>
                                : <>
                                    {
                                        user ? <>
                                            <button
                                                className="btn text-white bg-[#2b87ff] rounded-lg hover:bg-transparent hover:border-[#2b87ff] hover:text-[#2b87ff]"
                                                onClick={handleLogOut}
                                            >
                                                Logout
                                            </button>
                                        </>
                                            : <Link to="/login">
                                                <button className="btn text-white bg-[#2b87ff] rounded-lg hover:bg-transparent hover:border-[#2b87ff] hover:text-[#2b87ff]">Login</button>
                                            </Link>
                                    }
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;