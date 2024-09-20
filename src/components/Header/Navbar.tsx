import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileNavLinks } from "./MobileLinks";
import ThemeToggleButton from "./ThemeToggleButton";
import { links } from "./Navlinks";
import CallToAction from "./CallToAction";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-card/90 sticky top-0 z-[11] backdrop-blur-lg">
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
        <CallToAction />

        <MobileNavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
