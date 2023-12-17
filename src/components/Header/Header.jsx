import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-green-100 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex items-center justify-between flex-wrap mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/02/04/17/07/drink-4818863_1280.jpg"
                            alt="icon"
                            className="mr-3 h-12"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/Contact"
                            className="font-[600] bg-orange-600 px-4  py-2 rounded hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 lg:px-5 lg:py-2.5"
                        >
                            Donation
                        </Link>
                    </div>

                    <div className="flex items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0 ">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-3 pl-3 duration-200 ${
                                            isActive
                                                ? "text - orange - 300"
                                                : "text - grey - 400"
                                        } border-b border-gray-100 hover:text-orange-600 lg:hover:bg-transparent lg:border-0 lg:p-0 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/product"
                                    className={({ isActive }) =>
                                        `block py-2 pr-3 pl-3 duration-200 ${
                                            isActive
                                                ? "text - orange - 300"
                                                : "text - grey - 400"
                                        } border-b border-gray-100 hover:text-orange-600 lg:hover:bg-transparent lg:border-0 lg:p-0 `
                                    }
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-3 pl-3 duration-200 ${
                                            isActive
                                                ? "text - orange - 300"
                                                : "text - grey - 400"
                                        } border-b border-gray-100 hover:text-orange-600 lg:hover:bg-transparent lg:border-0 lg:p-0 `
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-3 pl-3 duration-200 ${
                                            isActive
                                                ? "text - orange - 300"
                                                : "text - grey - 400"
                                        } border-b border-gray-100 hover:text-orange-600 lg:hover:bg-transparent lg:border-0 lg:p-0 `
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
