import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  return (
    <nav id="sidebar-nav" aria-label="Sidebar Navigation">
      <ul>
        <li className="mb-5">
          <Link
            key="Seller"
            href="/seller"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            Seller
          </Link>
        </li>

        <li>
          <Link
            key="Buyer"
            href="/buyer"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            Buyer
          </Link>
        </li>
      </ul>
    </nav>
  );
}
