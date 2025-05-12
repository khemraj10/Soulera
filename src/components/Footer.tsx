import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm mt-30 flex flex-col">
      <div className="mb-2 flex gap-5 justify-center items-center">
        <a href="#" className="px-2 text-xs">
          About
        </a>
        <a href="#" className="px-2 text-xs">
          Blog
        </a>
        <a href="#" className="px-2 text-xs">
          Team
        </a>
        <a href="#" className="px-2 text-xs">
          Pricing
        </a>
        <a href="#" className="px-2 text-xs">
          Contact
        </a>
        <a href="#" className="px-2 text-xs">
          Terms
        </a>
      </div>
      <div className="gap-5 p-3  inline-flex items-center justify-center">
        <FaFacebook className="text-gray-500" size={16} />
        <FaInstagram className="text-gray-500" size={16} />
        <FaTwitter className="text-gray-500" size={16} />
        <FaGithub className="text-gray-500" size={16} />
        <FaDribbble className="text-gray-500" size={16} />
      </div>
      <p className="px-2 text-xs mb-5">
        © 2025 SomeCompany, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
