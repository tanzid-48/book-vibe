import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-medium ${isActive ? 'text-success font-semibold border border-green-500' : 'hover:text-success'}`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/listedBooks"
                    className={({ isActive }) =>
                        `font-medium ${isActive ? 'text-success font-semibold border border-green-500' : 'hover:text-success'}`
                    }
                >
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/filterPage"
                    className={({ isActive }) =>
                        `font-medium ${isActive ? 'text-success font-semibold border border-green-500' : 'hover:text-success'}`
                    }
                >
                    Pages To Read
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/amni"
                    className={({ isActive }) =>
                        `font-medium ${isActive ? 'text-success font-semibold' : 'hover:text-success'}`
                    }
                >
                    Amni
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        aria-label="Open navigation menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>

                <a href="/" className="btn btn-ghost normal-case text-2xl font-bold">
                    Book ViBe
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-success btn-sm md:btn-md text-white">Sign In</button>
                <button className="btn btn-accent btn-sm md:btn-md text-white">Sing Up</button>
            </div>
        </div>
    );
};

export default Navbar;