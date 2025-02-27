import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLinks from '@/Components/NavLinks';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header({ user }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => {
            window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    
    return (
        <>
        <nav className="bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <ApplicationLogo />
                    </div>

                    <NavLinks />

                    <div className="hidden sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-100 hover:text-gray-400 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.name}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>الحساب</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">تسجيل خروج</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <motion.nav
            className={`bg-primary top-0 left-0 w-full z-50 ${ isScrolled ? "fixed shadow-md" : "absolute" }`}
            initial={{ y: -100, opacity: 0 }}
            animate={isScrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="shrink-0 flex items-center">
                            <ApplicationLogo />
                        </div>

                        <NavLinks />

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-100 hover:text-gray-400 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>الحساب</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">تسجيل خروج</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
        </motion.nav>
        </>
    );
}