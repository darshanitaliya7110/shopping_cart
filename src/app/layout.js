import Navbar from "@/component/Navbar";
import { Inter } from "next/font/google";
import StoreProvider from "./store/StoreProvider";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </html>
      </StoreProvider>
    </>
  );
}
