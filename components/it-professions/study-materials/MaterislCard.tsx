"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Star,
  FileText,
  ShoppingCart,
  Download,
  Clock,
} from "lucide-react";

interface Material {
  id: number;
  title: string;
  type: string;
  pages: string;
  rating: string;
  reviews: number;
  description: string;
  price: string;
  badge: string;
  image: string;
  isFree: boolean;
  category: string;
}

const materials: Material[] = [
  {
    id: 1,
    title: "Python Programming Complete Guide",
    type: "PDF",
    pages: "120 pages",
    rating: "4.8",
    reviews: 256,
    description:
      "Comprehensive guide covering Python basics to advanced concepts including OOP, data structures, and popular libraries like NumPy and Pandas.",
    price: "Free",
    badge: "PDF",
    image: "/assets/it/proffesional.png",
    isFree: true,
    category: "Programming",
  },
  {
    id: 2,
    title: "Modern Web Development Handbook",
    type: "PDF",
    pages: "85 pages",
    rating: "4.7",
    reviews: 189,
    description:
      "Complete reference for HTML5, CSS3, JavaScript, and modern frameworks like React and Vue.js with practical examples.",
    price: "₹199",
    badge: "PDF",
    image: "/assets/it/web.png",
    isFree: false,
    category: "Web Development",
  },
  {
    id: 3,
    title: "Machine Learning Algorithms Cheat Sheet",
    type: "Cheat Sheet",
    pages: "12 pages",
    rating: "4.9",
    reviews: 312,
    description:
      "Quick reference guide for all major ML algorithms with their use cases, pros/cons, and implementation tips.",
    price: "Free",
    badge: "Cheat Sheet",
    image: "/assets/it/ai.png",
    isFree: true,
    category: "Data Science",
  },
  {
    id: 4,
    title: "React Native Crash Course Videos",
    type: "Video",
    pages: "4.5 hours",
    rating: "4.6",
    reviews: 178,
    description:
      "Video series covering React Native fundamentals and building complete mobile applications with practical examples.",
    price: "₹499",
    badge: "Video",
    image: "/assets/it/react.png",
    isFree: false,
    category: "Mobile Apps",
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    type: "PDF",
    pages: "68 pages",
    rating: "4.5",
    reviews: 142,
    description:
      "Comprehensive guide to user interface and experience design principles, patterns, and best practices for modern applications.",
    price: "Free",
    badge: "PDF",
    image: "/assets/it/certificate.png",
    isFree: true,
    category: "UI/UX",
  },
  {
    id: 6,
    title: "Data Structures & Algorithms Workbook",
    type: "Practice",
    pages: "95 problems",
    rating: "4.8",
    reviews: 231,
    description:
      "Collection of carefully curated problems with solutions to master DSA concepts for coding interviews and competitive programming.",
    price: "₹299",
    badge: "Practice",
    image: "/assets/it/instructor.png",
    isFree: false,
    category: "Programming",
  },
];

const StudyMaterialsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Popular");
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    "All",
    "Programming",
    "Web Development",
    "Data Science",
    "Mobile Apps",
    "UI/UX",
  ];

  const filteredMaterials = materials
    .filter((item) =>
      activeCategory === "All" ? true : item.category === activeCategory
    )
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-[#c5d1ff] text-black overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Study Resources
          </h1>
          <p className="text-lg text-black mb-8">
            Access high-quality notes, ebooks, cheat sheets, and practice materials to boost your learning experience.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search for materials, topics, or courses..."
              className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-3xl">
              Search
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "text-white bg-orange-600"
                    : "bg-pink-100 text-orange-600 hover:text-white hover:bg-orange-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Images */}
        <Image
          src="/assets/it/python.png"
          alt="Python"
          width={120}
          height={120}
          className="absolute top-12 left-8 animate-bounce hidden md:block"
        />
        <Image
          src="/assets/it/html.png"
          alt="HTML"
          width={120}
          height={120}
          className="absolute bottom-8 right-8 animate-pulse hidden md:block"
        />
      </section>

      {/* Materials Section */}
      <section className="px-6 md:px-12 mt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Popular Study Materials
          </h2>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <span>Sort by: {sortOption}</span>
              <ChevronDown size={18} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-44 z-10">
                {["Popular", "Newest", "Highest Rated", "Free Only"].map(
                  (option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSortOption(option);
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 text-sm hover:bg-orange-100 cursor-pointer transition"
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {item.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    {item.type === "Video" ? <Clock size={14} /> : <FileText size={14} />}
                    {item.pages}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" /> {item.rating} ({item.reviews})
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className={`font-semibold ${
                      item.isFree ? "text-green-600" : "text-gray-800"
                    }`}
                  >
                    {item.price}
                  </span>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm shadow-md transition transform hover:-translate-y-0.5 ${
                      item.isFree
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-orange-600 hover:bg-orange-500"
                    }`}
                  >
                    {item.isFree ? <Download size={16} /> : <ShoppingCart size={16} />}
                    {item.isFree ? "Download" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                page === 1
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-orange-600 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-orange-600 hover:text-white transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterialsPage;
