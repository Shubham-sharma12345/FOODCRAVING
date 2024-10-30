
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section: Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Restroo. All rights reserved.
        </p>

        {/* Middle Section: Social or Branding */}
        <div className="flex items-center gap-2 text-orange-400 text-lg">
          <AiFillHeart />
          <span>Made with love by Shubham</span>
        </div>

        {/* Right Section: Links */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="#"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
