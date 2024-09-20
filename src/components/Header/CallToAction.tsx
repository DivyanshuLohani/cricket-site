import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <Link to="/register">
      <motion.a
        type="button"
        className="inline-flex h-12 items-center justify-center rounded-md border bg-[linear-gradient(110deg,#0055aa,45%,#0077ff,55%,#0055aa)] bg-[length:200%_100%] px-6 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 hover:bg-right"
      >
        Register Now
      </motion.a>
    </Link>
  );
}
