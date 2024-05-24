import type { Metadata } from "next";
import React from "react";
import classNames from "classnames";
import SideNav from "@/app/ui/sidenav";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Energy Trading Tool",
  description: "A tool for energy trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames("p-10")}>
        <Header />
        <div className="flex flex-row">
          <div className="h-screen w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:pl-12">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
