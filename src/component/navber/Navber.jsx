import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => console.log('Successfully logged out'))
        .catch(error => console.error('Logout error:', error));
    };

    return (
        <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pro">Property</Link></li>
                        <li><Link to="/userprofile">User Profile</Link></li>
                        <li><Link to="/updateprofile">Update Profile</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
                <Link to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Re<span className="text-green-600">A</span>l E<span className="text-green-600">s</span>ta<span className="text-green-600">T</span>e
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pro">Property</Link></li>
                    <li><Link to="/userprofile">User Profile</Link></li>
                    <li><Link to="/updateprofile">Update Profile</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end" data-aos="flip-left">
                <div className="flex items-center">
                    {user ? (
                        <>
                            <img src={user.photoURL} alt="User" title={user.displayName} className="rounded-full h-8 w-8 mt-2 mr-2" />
                            <button onClick={handleLogOut} className="btn btn-success text-white">Logout</button>
                        </>
                    ) : (
                        <Link className="btn btn-success text-white" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

