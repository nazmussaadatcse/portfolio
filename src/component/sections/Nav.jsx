import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-base-100">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
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
                        {isOpen && (
                            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Skills</a></li>
                                <li><a>Projects</a></li>
                                <li><a>Education</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        )}
                    </div>
                    <a className="btn btn-ghost text-xl">Dev. Saadat</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Education</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
