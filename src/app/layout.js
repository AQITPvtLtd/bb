import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

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
        {children}
        <Footer />
        </body>
    </html>
  );
}
