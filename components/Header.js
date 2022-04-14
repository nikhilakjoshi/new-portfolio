import React from "react";
import Link from "next/link";
import Git from "./../svgs/git.svg";
import Twitter from "./../svgs/twitter.svg";
import LinkedIn from "./../svgs/linkedin.svg";

const Header = () => {
  return (
    <nav className="headerRoot text-sm border-b">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <button className="font-bold text-slate-600 tracking-wide py-1 px-2 hover:bg-slate-100 border border-transparent hover:border-slate-300 rounded-sm transition-all outline-none">
            <Link href="/">BLUEBUCKDESIGNS</Link>
          </button>
          <div className="flex items-center gap-6">
            <Git />
            <Twitter />
            <LinkedIn />
            <button className="font-bold text-slate-50 tracking-wide py-1 px-2 bg-teal-500 border border-slate-300 rounded transition-all outline-none">
              <Link href="/">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
