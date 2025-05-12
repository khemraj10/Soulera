"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex items-center flex-1 justify-between px-8 relative">
      <div className="flex items-center justify-between flex-1 border-b border-gray-200 py-4 ">
        <div className="text-xl font-bold">nullBrains.</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            Features
          </Link>
          <Link href="#" className="hover:underline">
            Blog
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          <Link href="#" className="hover:underline flex items-center">
            <IoIosSearch className="text-xl" />
          </Link>
        </nav>
        <div className="hidden md:flex space-x-2">
          <Button variant="ghost" className="rounded-2xl text-sm font-normal">
            Sign In
          </Button>
          <Button className="bg-[#525ae7] text-white rounded-2xl text-sm font-normal">
            Sign Up
          </Button>
        </div>
        <Button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 mt-4 mr-4 bg-[#525ae7] p-4 w-42 space-y-4 rounded-lg shadow-lg z-50 flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)} // Handle close action here
            className="absolute top-2 right-2 text-white text-xl"
          >
            &times;
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 justify-center items-center">
            <Link href="#" className="hover:underline text-white">
              Home
            </Link>
            <Link href="#" className="hover:underline text-white">
              Features
            </Link>
            <Link href="#" className="hover:underline text-white">
              Blog
            </Link>
            <Link href="#" className="hover:underline text-white">
              Contact
            </Link>
            <Link
              href="#"
              className="hover:underline text-white flex items-center"
            >
              <IoIosSearch className="text-xl" />
            </Link>
          </nav>

          {/* Buttons */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full bg-white rounded-2xl text-sm font-normal"
            >
              Sign In
            </Button>
            <Button className="w-full bg-[#525ae7] text-white rounded-2xl text-sm font-normal">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
