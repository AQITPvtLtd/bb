import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
const SocialLinks = () => {
    return (
        <div>
            <div className="hidden sm:flex gap-4 fixed top-0 mt-[200px] right-0 flex-col justify-center items-center p-4 bg-gray-200 z-40 rounded-l-xl">
                {/* facebook */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08a494] hover:bg-[#06695F] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.facebook.com/profile.php?id=100066588493905"
                        role="button"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </Link>
                </div>
                {/* Instagram */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08a494] hover:bg-[#06695F] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.instagram.com/drbhupendrabharti/?hl=en"
                        role="button"
                        target="_blank"
                    >
                        <FaInstagram />
                    </Link>
                </div>
                {/* LinkedIn */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08a494] hover:bg-[#06695F] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.linkedin.com/company/dr-bhupendra-bharti/"
                        role="button"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </Link>
                </div>

                {/* <!-- Youtube --> */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08a494] hover:bg-[#06695F] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.youtube.com/@shreshtha.spine_1"
                        role="button"
                        target="_blank"
                    >
                        <FaYoutube />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SocialLinks