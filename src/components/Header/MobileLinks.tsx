import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import { links } from "./Navlinks";

export function MobileNavLinks() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex flex-col gap-1 bg-background md:hidden">
          <div className="w-6 h-4 bg-foreground"></div>
          <div className="w-6 h-4 bg-foreground"></div>
          <div className="w-6 h-4 bg-foreground"></div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-center gap-4">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className={`hover:text-foreground  flex items-center gap-2 transition-colors duration-300 ${
                location.pathname.startsWith(link.href) ? "text-foreground" : ""
              }`}
            >
              <link.icon />
              <span>{link.name}</span>
            </Link>
          ))}

          <ThemeToggleButton />
        </div>
      </SheetContent>
    </Sheet>
  );
}
