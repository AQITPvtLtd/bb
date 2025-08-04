import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
// import { FaYoutube } from "react-icons/fa"; // Import the YouTube icon from react-icons
import Script from "next/script";
import SocialLinks from "@/components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-32BHE7GKMM"></Script>
        <Script>
          {`  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-32BHE7GKMM');`}

        </Script>
      </head>
      <body className={inter.className}>
        <Header />

        {/* YouTube Icon */}
        {/* <a
          href="https://www.youtube.com/@shreshtha.spine_1"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-50"
        >
          <FaYoutube size={32} />
        </a> */}

        {children}
        <SocialLinks />
        <Footer />
      </body>
    </html>
  );
}
