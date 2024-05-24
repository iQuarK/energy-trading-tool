"use client";
import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <nav id="sidebar-nav" aria-label="Sidebar Navigation">
      <ul>
        <li
          className={classnames("mb-5  bg-gray-50", {
            "bg-slate-400 rounded-md": pathname === "/",
          })}
        >
          <Link
            key="Seller"
            href="/"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            Seller
          </Link>
        </li>

        <li
          className={classnames("mb-5 bg-gray-50", {
            "bg-slate-400 rounded-md": pathname === "/buyer",
          })}
        >
          <Link
            key="Buyer"
            href="/buyer"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            Buyer
          </Link>
        </li>

        <li
          className={classnames("mb-5 bg-gray-50", {
            "bg-slate-400 rounded-md": pathname === "/both",
          })}
        >
          <Link
            key="Both"
            href="/both"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            Both
          </Link>
        </li>
      </ul>
    </nav>
  );
}
