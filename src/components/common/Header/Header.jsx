"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Submenu handling
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Close the navbar when a submenu item is clicked
  const handleSubmenuItemClick = () => {
    setNavbarOpen(false);
    setOpenIndex(-1); // Close the open submenu if needed
  };

  const pathname = usePathname();

  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center bg-gradient-to-r font-semibold from-white to-secondary ${
        sticky
          ? "fixed z-[9999] bg-white shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <header className="flex justify-between items-center px-6 ">
        <div className="relative flex items-center">
          {/* Logo */}
          <div className="lg:w-[400px] w-[200px] lg:px-4">
            {" "}
            {/* Increased width for large devices */}
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : ""
              }`}
            >
              <Image
                src="/logo/newlogo.png"
                alt="logo"
                width={500}
                height={500}
                className="w-[200px] lg:w-[300px]" // Adjust the width for large screens
              />
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center px-4 lg:hidden">
          {/* Hamburger */}
          <button
            onClick={toggleNavbar}
            aria-label="Mobile Menu"
            className="absolute right-4 top-1/2 block transform -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#321f05] focus:ring-2 lg:hidden"
          >
            <span
              className={`block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? "rotate-45 top-[7px]" : "mt-1"
              }`}
            />
            <span
              className={`block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? "opacity-0" : "mt-1"
              }`}
            />
            <span
              className={`block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? "-rotate-45 top-[-8px]" : "mt-1"
              }`}
            />
          </button>

          {/* Call Button on Small Screens */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 lg:hidden">
            <Link
              href="tel:+91-9205138507"
              className="block text-sm font-medium text-white bg-[#07a496] px-4 py-2 rounded-full"
            >
              Call Now
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
            navbarOpen
              ? "top-full opacity-100"
              : "invisible top-[120%] opacity-0"
          }`}
        >
          <ul className="block lg:flex lg:space-x-4">
            {menuData.map((menuItem, index) => (
              <li key={menuItem.id} className="group relative">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                      pathname === menuItem.path
                        ? "text-primary"
                        : "text-dark hover:text-primary"
                    }`}
                    onClick={handleSubmenuItemClick} // Close the navbar when a submenu item is clicked
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="flex w-full cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                    >
                      {menuItem.title}
                      <span className="pl-3">
                        <svg width="25" height="24" viewBox="0 0 25 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`submenu -left-16 lg:ml-0 ml-4 rounded-sm bg-white transition-[top] duration-300 lg:absolute lg:top-[110%] lg:w-[450px] lg:shadow-lg ${
                        openIndex === index
                          ? "lg:grid lg:grid-cols-2 p-4 gap-5 h-[300px] overflow-y-auto" // Set height and enable scrollbar
                          : "hidden"
                      }`}
                    >
                      {menuItem.submenu?.map((submenuItem) => (
                        <div key={submenuItem.id} className="group relative">
                          <Link
                            href={submenuItem.path || "#"}
                            className="block rounded text-sm text-dark hover:text-primary hover:text-[#07a496]"
                            onClick={handleSubmenuItemClick} // Close the navbar when a submenu item is clicked
                          >
                            {submenuItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Call Button on Large Screens */}
        <div className="hidden lg:flex justify-end w-[150px] lg:w-[200px] lg:px-4 rounded-full">
          <Link
            href="tel:+91-9205138507"
            className={`block w-full text-center text-white bg-[#07a496] rounded-full ${
              sticky ? "py-5 lg:py-2" : "py-3"
            }`}
          >
            Call Now
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
