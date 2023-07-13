import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <div>
          Make insights
          <br />
          for the Next
        </div>
      </Link>
      <nav>
        <Link href="/portfolio">
          <div>portfolio</div>
        </Link>
        <Link href="/contact">
          <div>contact</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
