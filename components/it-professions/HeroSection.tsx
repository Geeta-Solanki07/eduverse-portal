"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-blue-100 overflow-hidden text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 border-b border-gray-200 relative z-10">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/it/logo.png" alt="Dousoft Eduverse Logo" width={120} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/60 px-6 py-2 rounded-2xl">
          <div className="relative group">
            <button className="flex items-center gap-2 font-medium text-black">
              <Image src="/assets/it/emojione-monotone_books.svg" alt="Books" width={20} height={20} />
              Courses
            </button>
            {/* Mega Menu */}
            <div className="absolute left-0 top-full mt-2 hidden group-hover:grid grid-cols-3 gap-6 bg-white shadow-lg rounded-xl p-6 w-[900px]">
              {/* Beginner */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">Beginner</h4>
                <ul className="space-y-2">
                  <li><Link href="/html-course" className="hover:text-orange-500">HTML & CSS Fundamentals</Link></li>
                  <li><Link href="/js-basic" className="hover:text-orange-500">JavaScript Basics</Link></li>
                  <li><Link href="/python-for-beginners" className="hover:text-orange-500">Python for Beginners</Link></li>
                  <li><Link href="/version-control" className="hover:text-orange-500">Version Control (Git & GitHub)</Link></li>
                  <li><Link href="/introduction-to-databases" className="hover:text-orange-500">Introduction to Databases</Link></li>
                </ul>
              </div>

              {/* Intermediate */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">Intermediate</h4>
                <ul className="space-y-2">
                  <li><Link href="/react-development" className="hover:text-orange-500">React.js Development</Link></li>
                  <li><Link href="/node-development" className="hover:text-orange-500">Node.js & Express.js</Link></li>
                  <li><Link href="/rest-api-development" className="hover:text-orange-500">REST API Development</Link></li>
                  <li><Link href="/mongodb" className="hover:text-orange-500">MongoDB & SQL Databases</Link></li>
                  <li><Link href="/ui-ux-principles" className="hover:text-orange-500">UI/UX Principles</Link></li>
                </ul>
              </div>

              {/* Advanced */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">Advanced</h4>
                <ul className="space-y-2">
                  <li><Link href="/full-stack-web-development" className="hover:text-orange-500">Full-Stack Web Development</Link></li>
                  <li><Link href="/react-native-mobile-apps" className="hover:text-orange-500">React Native Mobile Apps</Link></li>
                  <li><Link href="/cloud-computing" className="hover:text-orange-500">Cloud Computing (AWS, Azure)</Link></li>
                  <li><Link href="/devops" className="hover:text-orange-500">DevOps & Deployment</Link></li>
                  <li><Link href="/ai-machine-learning" className="hover:text-orange-500">AI & Machine Learning</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/offline-course" className="text-black">Offline Courses</Link>
          <Link href="/study-materials" className="text-black">Study Materials</Link>
          <Link href="/support" className="text-black">Support</Link>

          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          <Link href="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg">Login/Register</Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          <FaBars />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative text-center px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Build Your Programming Skill with <br /> Dousoft Eduverse
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Project-based learning, real mentorship, and interview prep — all in one trusted platform.
        </p>

        <div className="flex justify-center items-center gap-3 bg-white shadow-md rounded-full px-6 py-3 w-fit mx-auto">
          <span className="text-sm text-gray-500">Search By Course Name...</span>
          <FaSearch className="text-gray-600" />
        </div>

        <div className="flex justify-center gap-10 mt-10">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <Image src="/assets/it/Vector.svg" alt="Courses" width={40} height={40} />
            </div>
            <div>
              <p className="text-lg font-light leading-tight">3020<br />Online Courses</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <Image src="/assets/it/Vector (1).svg" alt="Instructors" width={40} height={40} />
            </div>
            <div>
              <p className="text-lg font-light leading-tight">Top<br />Instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/assets/it/boy2.png" alt="Boy" width={250} height={250} className="absolute left-10 top-40" />
        <Image src="/assets/it/girl.png" alt="Girl" width={200} height={250} className="absolute right-10 top-40" />
        <Image src="/assets/it/html.png" alt="HTML" width={80} height={80} className="absolute right-10 top-20" />
        <Image src="/assets/it/python.png" alt="Python" width={90} height={90} className="absolute right-1/4 bottom-10" />
        <Image src="/assets/it/Vector 4.png" alt="Shape" width={1200} height={200} className="absolute bottom-0 left-0 w-full" />
      </div>
    </header>
  );
};

export default HeroSection;
