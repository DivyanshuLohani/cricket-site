import { useTheme } from "../theme-provider";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton({
  className,
}: {
  className?: string;
}) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence>
        {theme === "dark" ? (
          <motion.i>
            <Moon />
          </motion.i>
        ) : (
          <motion.i>
            <Sun />
          </motion.i>
        )}
      </AnimatePresence>
    </button>
  );
}
