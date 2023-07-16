import Link from "next/link";
import React from "react";
import MaxWidth from "./MaxWidth";

const Header = () => {
  return (
    <header className="w-full h-30 fix top-0 absolute z-10">
      <MaxWidth>
        <div className="w-full flex justify-between items-start p-5">
          <Link href="/">
            <div className="text-mainColor font-bold text-lg">
              Make insights
              <br />
              for the Next
            </div>
          </Link>
          <nav className="flex gap-5">
            <Link href="/">
              <div className="text-mainColor font-bold">portfolio</div>
            </Link>
            <Link href="/">
              <div className="text-mainColor font-bold">career</div>
            </Link>
            <Link href="/contact">
              <div className="text-mainColor font-bold">contact</div>
            </Link>
          </nav>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
