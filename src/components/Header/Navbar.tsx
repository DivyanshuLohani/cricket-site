import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileNavLinks } from "./MobileLinks";
import ThemeToggleButton from "./ThemeToggleButton";
import { links } from "./Navlinks";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-card sticky top-0 z-10 backdrop-blur-lg">
      <div className="flex gap-10 items-center">
        <Link className="font-bold text-lg flex items-center" to="/">
          <img src="/logo.png" alt="" className="w-20" />
          <span className="hidden md:block">XYZ Organization</span>
        </Link>
        <ul className="hidden md:flex space-x-6 text-muted-foreground font-semibold">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.href}
                className={`hover:text-foreground transition-colors duration-300 ${
                  location.pathname.startsWith(link.href)
                    ? "text-foreground"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggleButton className="hidden md:block" />
        <button className="md:inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-right hidden ">
          Register Now
        </button>
        <MobileNavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
