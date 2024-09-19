import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
// import { FaYoutube } from "react-icons/fa"; // Import the YouTube icon from react-icons

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Bhupendra Pratap Bharti",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <Footer />
      </body>
    </html>
  );
}
