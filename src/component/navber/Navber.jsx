import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => console.log('SUCCESSFULL'))
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/updateprofile'}>Update Profile</Link></li>
                        <li><Link to={'/userprofile'}>User profile</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Re<span className="text-green-700">A</span>l Es<span className="text-green-700">T</span>ate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/updateprofile'}>Update Profile</Link></li>
                    <li><Link to={'/userprofile'}>User profile</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <ul className="flex">
                <li><Link className="btn btn-success text-white m-1" to={'/login'}>Login</Link></li>
                  {
                    user ?<>
                    <span>{user.email}</span>

                    </>
                    :
                    <li className="btn btn-success text-white m-1"><a onClick={handleLogOut} href="">LogOut</a></li>
                  }
                </ul> */}

                <ul className="flex">
                    {
                        user ? 
                        <>
                            <li><img src={user.photoURL} alt="User" className="rounded-full h-8 w-8 mr-2" /></li>
                            <li><span>{user.displayName}</span></li>
                            <li className="btn btn-success text-white m-1"><a onClick={handleLogOut} href="#">LogOut</a></li>
                        </>
                        :
                        <li><Link className="btn btn-success text-white m-1" to={'/login'}>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navber;
