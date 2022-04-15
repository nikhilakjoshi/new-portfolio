import React from "react";
import Link from "next/link";
import Git from "./../svgs/git.svg";
import Twitter from "./../svgs/twitter.svg";
import LinkedIn from "./../svgs/linkedin.svg";

const Header = () => {
  return (
    <nav className="headerRoot text-sm border-b border-slate-100">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <button className="font-bold text-slate-600 tracking-wide py-1 px-2 hover:bg-slate-100 border border-slate-100 hover:border-slate-300 rounded-sm transition-all outline-none">
              <span className="text-teal-500">B</span>lue<span className="text-teal-500">B</span>uck
              <span className="text-teal-500">D</span>esigns
            </button>
          </Link>
          <div className="flex items-center gap-6">
            <Git />
            <Twitter />
            <LinkedIn />
            <Link href="/contact">
              <button className="font-bold text-slate-50 tracking-wide py-1 px-2 bg-teal-500 hover:bg-teal-600 border rounded transition-all outline-none">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
