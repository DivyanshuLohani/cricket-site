import { Twitter, Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-8 text-foreground">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="XYZ Organization Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">XYZ Organization</span>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start space-y-3 md:space-y-0">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-foreground">
            Navigation
          </h2>
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/tournaments" className="hover:underline">
            Tournaments
          </a>
          <a href="/register" className="hover:underline">
            Register
          </a>
          <a href="/teams" className="hover:underline">
            Teams
          </a>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-foreground">
            Social Links
          </h2>
          <div className="flex gap-5">
            <a
              href="https://twitter.com" // Replace with actual social link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6 text-white hover:text-blue-500 transition-colors duration-200" />
            </a>
            <a
              href="https://instagram.com" // Replace with actual social link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6 text-white hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a
              href="https://facebook.com" // Replace with actual social link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6 text-white hover:text-blue-700 transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex items-start flex-col space-y-3 md:text-right">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-foreground">
            Contact
          </h2>
          <a
            href="mailto:contact@xyzorganization.com"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
            referrerPolicy="no-referrer"
          >
            <Mail />
            contact@xyzorganization.com
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
            referrerPolicy="no-referrer"
          >
            <Phone />
            +123-456-7890
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
