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
import { FaYoutube } from "react-icons/fa";
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
                {/* Facebook */}
                <div className="text-xl bg-white rounded-full p-1">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100066588493905"
                    target="__blank"
                  >
                    <FaFacebookF size={20} className="text-[#1877F2]" />
                  </Link>
                </div>

                {/* Instagram */}
                <div className="text-xl bg-white rounded-full p-1">
                  <Link
                    href="https://www.instagram.com/drbhupendrabharti/?hl=en"
                    target="__blank"
                  >
                    <FaInstagram size={20} className="text-[#E4405F]" />
                  </Link>
                </div>

                {/* LinkedIn */}
                <div className="text-xl bg-white rounded-full p-1">
                  <Link
                    href="https://www.linkedin.com/company/dr-bhupendra-bharti/"
                    target="__blank"
                  >
                    <FaLinkedinIn size={20} className="text-[#0077B5]" />
                  </Link>
                </div>

                {/* YouTube */}
                <div className="text-xl bg-white rounded-full p-1">
                  <Link
                    href="https://www.youtube.com/@shreshtha.spine_1"
                    target="__blank"
                  >
                    <FaYoutube size={20} className="text-[#FF0000]" />
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
        <div className="lg:flex grid grid-cols-3 items-center w-full lg:flex-grow">
          <div className="lg:hidden ml-10 px-2 py-1 col-span-2">
            <div className="w-[230px]">
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
                }`} style={{ boxShadow: '0px 25px 20px -20px rgba(0,0,0,0.45)' }}
            >
              <ul className="block lg:grid grid-cols-7 gap-2 relative bg-white text-black text-center">
                {menuData.map((menuItem, index) => (
                  <li
                    onMouseEnter={() => handleSubmenu(menuItem.id)}
                    onMouseLeave={() => {
                      handleSubmenu(-1);
                      handleSubSubmenu(-1);
                    }}
                    key={index}
                    className={`group relative ${usePathName === menuItem.path
                      ? "bg-primary m-1 text-white"
                      : "text-dark hover:bg-primary m-1 hover:text-white"
                      }`}
                  >
                    {menuItem.path ? (
                      <Link
                        onClick={handleCloseNavbar}
                        href={menuItem.path}
                        className={`flex py-2 px-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-3`}
                      >
                        <div className="text-sm">{menuItem.title}</div>
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => {
                            handleSubmenu(menuItem.id);
                          }}
                          className="px-2 text-sm flex cursor-pointer items-center justify-between py-2 text-dark group-hover:bg-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                        >
                          {menuItem.title}
                          <span>
                            <IoMdArrowDropdown size={20} />
                          </span>
                        </p>
                        <div
                          className={`submenu absolute left-0 top-full rounded-md transition-[top] duration-300 bg-white shadow-lg z-50 ${openIndex == menuItem.id ? "block" : "hidden"
                            }`}
                        >
                          <div
                            className={`px-2 py-1.5 grid gap-x-2 gap-y-0.5 text-sm ${menuItem.submenu.length > 9
                              ? "lg:w-[600px] grid-cols-2 md:grid-cols-3"
                              : "lg:w-[250px] grid-cols-1"
                              }`}
                          >
                            {menuItem.submenu.map((submenuItem, index) => (
                              <div key={index}>
                                {submenuItem.path ? (
                                  <Link
                                    onClick={handleCloseNavbar}
                                    href={submenuItem.path}
                                    className="block text-[12px] text-start font-medium text-black hover:bg-primary hover:text-white rounded px-2 py-1.5 transition"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ) : (
                                  <>
                                    <p
                                      onMouseEnter={() => handleSubSubmenu(submenuItem.id)}
                                      onClick={() => handleSubSubmenu(submenuItem.id)}
                                      className="flex justify-between items-center cursor-pointer text-dark hover:bg-primary hover:text-white rounded px-2 py-1"
                                    >
                                      <span className="text-[14px] font-medium">{submenuItem.title}</span>
                                      <span className="pl-1">
                                        <IoMdArrowDropdown />
                                      </span>
                                    </p>
                                    <div
                                      className={`absolute top-0 left-full ml-2 rounded-md bg-white px-3 py-2 w-[250px] shadow-lg ${openSubIndex === submenuItem.id ? "block" : "hidden"
                                        }`}
                                    >
                                      {submenuItem.submenu.map((subsubmenuItem, index) => (
                                        <Link
                                          onClick={handleCloseNavbar}
                                          href={subsubmenuItem.path}
                                          key={index}
                                          className="block text-[14px] text-dark rounded px-2 py-1 hover:bg-primary hover:text-white transition"
                                        >
                                          {subsubmenuItem.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
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
