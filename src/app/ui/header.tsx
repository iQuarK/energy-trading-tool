import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(): ReactElement<any, any> {
  return (
    <header className="w-full mb-4">
      <Link key="Home" href="/">
        <Image
          src="/axgrid-logo.png"
          alt="Vercel Logo"
          width={300}
          height={110}
          priority
        />
      </Link>
    </header>
  );
}
