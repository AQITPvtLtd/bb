"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setSubOpenIndex] = useState(-1);

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const handleSubSubmenu = (index) => {
    if (openSubIndex === index) {
      setSubOpenIndex(-1);
    } else {
      setSubOpenIndex(index);
    }
  };
  const usePathName = usePathname();
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };
  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center bg-gradient-to-r font-semibold`}
    >
      <div className="lg:grid grid-cols-2 bg-white">
        <div className="lg:flex hidden justify-center">
          <div className="">
            <Link
              href="/"
              className={`header-logo block lg:ml-0 ml-2 mt-3 lg:my-3`}
            >
              <Image
                src="/logo/newlogo2.png"
                alt="logo"
                width={1000}
                height={1000}
                className="lg:w-[400px] lg:h-full"
              />
            </Link>
          </div>
        </div>
        <div className="lg:block hidden lg:pt-4">
          <div className="max-w-lg lg:mx-auto pt-4 mx-2">
            <div className="flex items-center justify-center space-x-10">
              <div className="flex space-x-4">
                <div className="text-white text-xl bg-primary rounded-full p-1">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100066588493905"
                    target="__blank"
                    className=""
                  >
                    <FaFacebookF size={20} className="" />
                  </Link>
                </div>
                <div className="text-white text-xl bg-primary rounded-full p-1">
                  <Link
                    href="https://www.instagram.com/drbhupendrabharti/?hl=en"
                    target="__blank"
                  >
                    <FaInstagram className=" bg-primary" />
                  </Link>
                </div>
                <div className="text-white text-xl bg-primary rounded-full p-1">
                  <Link
                    href="https://www.linkedin.com/company/dr-bhupendra-bharti/"
                    target="__blank"
                  >
                    <FaLinkedinIn className=" bg-primary" />
                  </Link>
                </div>
                <div className="text-white text-xl bg-primary rounded-full p-1">
                  <Link
                    href="https://www.youtube.com/@shreshtha.spine_1"
                    target="__blank"
                  >
                    <FaYoutube className=" bg-primary" />
                  </Link>
                </div>
              </div>

              <div className="text-gray-400">|</div>
              <div className="flex items-center">
                <div className="text-md">
                  <h4 className="text-black font-semibold text-center">
                    Contact Us
                  </h4>
                  <Link href="tel:+91-92051 38507" className="bg-primary">
                    <p className="hover:text-primary font-semibold">
                      +91-92051 38507
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className=" text-white">
        <div className="w-full px-20">
          <div className="border w-full border-gray-200"></div>
        </div>
        <div className=" lg:flex grid grid-cols-3 items-center w-full  lg:flex-grow">
          <div className="lg:hidden ml-10 px-2 py-1 col-span-2">
            <div className=" w-[230px]">
              <Link
                href="/"
                className={`header-logo block lg:ml-0 mt-3 lg:my-3`}
              >
                <Image
                  src="/logo/newlogo2.png"
                  alt="logo"
                  width={400}
                  height={500}
                  className=" bg-white p-2"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="  rounded-full px-3 py-[6px] ring-primary lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${navbarOpen ? " top-[7px] rotate-45" : ""
                  }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${navbarOpen ? " top-[-8px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>

          <div className={`overflow-x-clip bg-white header left-0 z-40 top-0 w-full items-center font-semibold ${sticky
            ? "fixed bg-white shadow-sticky backdrop-blur-sm transition py-2"
            : ""
            }`}>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 rounded px-6 py-4 duration-300 dark:bg-dark lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                ? "visibility top-[8%] opacity-100"
                : "invisible top-[120%] opacity-0"
                }`}
            >
              <ul className="block lg:grid grid-cols-7 gap-4 relative bg-white text-black">
                {menuData.map((menuItem, index) => (
                  <li
                    onMouseEnter={() => handleSubmenu(menuItem.id)}
                    onMouseLeave={() => {
                      handleSubmenu(-1);
                      handleSubSubmenu(-1);
                    }}
                    key={index}
                    className={`group relative text-center ${usePathName === menuItem.path
                      ? "bg-primary m-1 text-white"
                      : "text-dark hover:bg-primary m-1 hover:text-white"
                      }`}
                  >
                    {menuItem.path ? (
                      <Link
                        onClick={handleCloseNavbar}
                        href={menuItem.path}
                        className={`flex py-2 px-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-3 `}
                      >
                        <div className="">{menuItem.title}</div>
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => {
                            handleSubmenu(menuItem.id);
                          }}
                          className=" px-2 flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:bg-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                        >
                          {menuItem.title}
                          <span>
                            <IoMdArrowDropdown size={20} />
                          </span>
                        </p>
                        <div
                          className={`submenu relative left-0 top-full lg:ml-0 pl-4 rounded-sm transition-[top] duration-300 lg:absolute lg:top-[102%] lg:w-[250px] lg:p-4 bg-white lg:shadow-lg ${openIndex == menuItem.id ? "block" : "hidden"
                            }`}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <div
                              key={index}
                              className="group text-left relative bg-white grid"
                            >
                              {submenuItem.path ? (
                                <Link
                                  onClick={handleCloseNavbar}
                                  href={submenuItem.path}
                                  key={index}
                                  className={`block rounded py-2 text-sm hover:bg-primary lg:px-3 hover:text-white text-black`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ) : (
                                <>
                                  <p
                                    onMouseEnter={() => {
                                      handleSubSubmenu(submenuItem.id);
                                    }}
                                    onClick={() => {
                                      handleSubSubmenu(submenuItem.id);
                                    }}
                                    className="rounded py-2 text-sm lg:px-3 flex cursor-pointer justify-between text-dark hover:bg-primary"
                                  >
                                    {submenuItem.title}
                                    <span className="pl-1">
                                      <IoMdArrowDropdown />
                                    </span>
                                  </p>
                                  <div
                                    className={`lg:ml-[225px] rounded-sm bg-white lg:px-3 lg:py-2 lg:-mt-6 ml-4 transition-[top] duration-300 lg:absolute lg:w-[250px] lg:shadow-lg ${openSubIndex === submenuItem.id
                                      ? "block"
                                      : "hidden"
                                      }`}
                                  >
                                    {submenuItem.submenu.map(
                                      (subsubmenuItem, index) => (
                                        <Link
                                          onClick={handleCloseNavbar}
                                          href={subsubmenuItem.path}
                                          key={index}
                                          className="bg-primary block rounded py-2.5 text-sm text-dark hover:bg-primary lg:px-3"
                                        >
                                          {subsubmenuItem.title}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
