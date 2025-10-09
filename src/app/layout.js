import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import Script from "next/script";
import SocialLinks from "@/components/common/SocialLinks";

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
        {children}
        <SocialLinks />
        <Footer />
      </body>
    </html>
  );
}
