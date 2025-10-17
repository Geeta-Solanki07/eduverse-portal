"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-blue-100 text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-10  relative z-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          {/* Courses Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 font-medium text-black">
              <Image
                src="/assets/it/emojione-monotone_books.svg"
                alt="Books"
                width={20}
                height={20}
              />
              Courses
              <Image
                src="/assets/it/Polygon 1.svg"
                alt="Arrow"
                width={10}
                height={10}
              />
            </button>

            {/* Dropdown */}
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 grid grid-cols-3 gap-6 bg-white shadow-lg rounded-xl p-6 w-[900px] z-50">
              {/* Beginner */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">
                  Beginner
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/html-course" className="hover:text-orange-500">
                      HTML & CSS Fundamentals
                    </Link>
                  </li>
                  <li>
                    <Link href="/js-basic" className="hover:text-orange-500">
                      JavaScript Basics
                    </Link>
                  </li>
                  <li>
                    <Link href="/python-for-beginners" className="hover:text-orange-500">
                      Python for Beginners
                    </Link>
                  </li>
                  <li>
                    <Link href="/version-control" className="hover:text-orange-500">
                      Git & GitHub
                    </Link>
                  </li>
                  <li>
                    <Link href="/introduction-to-databases" className="hover:text-orange-500">
                      Intro to Databases
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Intermediate */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">
                  Intermediate
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/react-development" className="hover:text-orange-500">
                      React.js Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/node-development" className="hover:text-orange-500">
                      Node.js & Express.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/rest-api-development" className="hover:text-orange-500">
                      REST API
                    </Link>
                  </li>
                  <li>
                    <Link href="/mongodb" className="hover:text-orange-500">
                      MongoDB & SQL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-ux-principles" className="hover:text-orange-500">
                      UI/UX Principles
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Advanced */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">
                  Advanced
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/full-stack-web-development" className="hover:text-orange-500">
                      Full-Stack Web Dev
                    </Link>
                  </li>
                  <li>
                    <Link href="/react-native-mobile-apps" className="hover:text-orange-500">
                      React Native Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloud-computing" className="hover:text-orange-500">
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link href="/devops" className="hover:text-orange-500">
                      DevOps & Deployment
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-machine-learning" className="hover:text-orange-500">
                      AI & ML
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Links */}
          <Link href="/it/study-materials" className="text-black">
            Study Materials
          </Link>
          <Link href="/it/support" className="text-black">
            Support
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <i className="fas fa-search text-gray-500"></i>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>
          <Link href="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Login/Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md py-4 px-6 flex flex-col gap-3 text-gray-800 font-medium text-lg z-50">
          <Link href="/it/study-materials" className="py-2 border-b" onClick={() => setMenuOpen(false)}>
            Study Materials
          </Link>
          <Link href="/it/support" className="py-2 border-b" onClick={() => setMenuOpen(false)}>
            Support
          </Link>
          <Link
            href="/login"
            className="py-2 border-b bg-orange-500 text-white rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Login/Register
          </Link>
        </nav>
      )}
    </header>
  );
}
