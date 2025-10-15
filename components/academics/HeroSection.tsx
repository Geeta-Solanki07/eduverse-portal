"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-blue-50 overflow-hidden text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 relative z-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Dousoft Eduverse Logo"
            width={160}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            menuOpen
              ? "absolute top-16 left-0 bg-white w-full shadow-md p-6 flex flex-col gap-4"
              : "hidden md:flex md:items-center md:gap-6"
          }`}
        >
          {/* Courses Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 font-medium">
              <Image
                src="/assets/it/emojione-monotone_books.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Courses</span>
              <Image
                src="/assets/it/Polygon 1.svg"
                alt=""
                width={10}
                height={10}
              />
            </button>

            {/* Mega Menu */}
            <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-3 gap-8 bg-white shadow-lg p-6 z-50 w-[600px]">
              <div>
                <h4 className="font-semibold mb-2">Elementary (1st-5th)</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/1st-class">1st Class</Link></li>
                  <li><Link href="/2nd-class">2nd Class</Link></li>
                  <li><Link href="/3rd-class">3rd Class</Link></li>
                  <li><Link href="/4th-class">4th Class</Link></li>
                  <li><Link href="/5th-class">5th Class</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Junior (6th-8th)</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/6th-class-english">6th Class - English</Link></li>
                  <li><Link href="/6th-class-hindi">6th Class - Hindi</Link></li>
                  <li><Link href="/7th-class-english">7th Class - English</Link></li>
                  <li><Link href="/7th-class-hindi">7th Class - Hindi</Link></li>
                  <li><Link href="/8th-class-english">8th Class - English</Link></li>
                  <li><Link href="/8th-class-hindi">8th Class - Hindi</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Senior (9th-12th)</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/9th-class">9th Class</Link></li>
                  <li><Link href="/10th-class">10th Class</Link></li>
                  <li><Link href="/11th-class">11th Class</Link></li>
                  <li><Link href="/12th-class">12th Class</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/offline-courses" className="font-medium">
            Offline Courses
          </Link>
          <Link href="/study-materials2" className="font-medium text-orange-500">
            Study Materials
          </Link>
          <Link href="/support" className="font-medium">
            Support
          </Link>

          {/* Search and Login for Mobile */}
          <div className="flex flex-col md:hidden gap-3">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="ml-2 outline-none bg-transparent text-sm"
              />
            </div>
            <Link
              href="/login"
              className="px-4 py-2 bg-orange-500 text-white rounded-full text-center font-medium hover:bg-orange-600 transition"
            >
              Login/Register
            </Link>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="ml-2 outline-none bg-transparent"
            />
          </div>
          <Link
            href="/login"
            className="px-5 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
          >
            Login/Register
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto text-center md:text-left px-4 md:px-0 mt-16 md:mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          A Brighter Future For Kids
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">
          Let your child start learning how to excel in School Curriculum, Maths & English!
        </p>

        <div className="flex justify-center md:justify-start gap-10 mt-6">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/ac/classes.svg"
              alt="Classes"
              width={60}
              height={60}
            />
            <span className="text-sm md:text-base mt-2 text-center">
              Classes <br /> 1st to 12th
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/ac/image/instructor.svg"
              alt="Instructors"
              width={60}
              height={60}
            />
            <span className="text-sm md:text-base mt-2 text-center">
              200+ Top <br /> Instructors
            </span>
          </div>
        </div>
      </div>

      {/* Hero Images */}
      <div className="relative w-full h-[500px] mt-10 md:mt-0">
        <Image
          src="/assets/ac/girl.png"
          alt="Girl"
          width={320}
          height={320}
          className="absolute left-0 bottom-0"
        />
        <Image
          src="/assets/ac/boy.png"
          alt="Boy"
          width={320}
          height={320}
          className="absolute right-0 bottom-0"
        />
        <Image
          src="/assets/ac/chemical.png"
          alt="Chemical"
          width={100}
          height={100}
          className="absolute left-1/3 top-10"
        />
        <Image
          src="/assets/ac/book.png"
          alt="Book"
          width={100}
          height={100}
          className="absolute right-1/4 top-20"
        />
        <Image
          src="/assets/ac/callendar.png"
          alt="Calendar"
          width={80}
          height={80}
          className="absolute left-1/4 bottom-1/4"
        />
        <Image
          src="/assets/ac/abt-shape.png"
          alt="Shape"
          width={150}
          height={150}
          className="absolute right-1/3 bottom-1/3"
        />
      </div>
    </header>
  );
}
