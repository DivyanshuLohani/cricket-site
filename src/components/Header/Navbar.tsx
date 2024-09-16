import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileNavLinks } from "./MobileLinks";
import ThemeToggleButton from "./ThemeToggleButton";
import { links } from "./Navlinks";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-card/90 sticky top-0 z-20 backdrop-blur-lg">
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
                className={`hover:text-foreground  flex items-center gap-2 transition-colors duration-300 ${
                  location.pathname.startsWith(link.href)
                    ? "text-foreground"
                    : ""
                }`}
              >
                <link.icon />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggleButton className="hidden md:block" />
        <button className="md:inline-flex h-12 items-center justify-center rounded-md border bg-[linear-gradient(110deg,#0055aa,45%,#0077ff,55%,#0055aa)] bg-[length:200%_100%] px-6 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 hover:bg-right hidden">
          Register Now
        </button>

        <MobileNavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
