import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Hilink",
  description: "Travel App for Camping",
  icons: {
    icon:'/favicon.ico?v=4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
