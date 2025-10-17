"use client";

import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#ebfff2] text-center py-16 px-5 md:px-20">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Academic Study Resources
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Access comprehensive notes, sample papers, revision guides, and
        practice materials for all classes and subjects.
      </p>

      <div className="flex flex-col items-center gap-5">
        <div className="flex w-full md:w-1/2 bg-white rounded-full shadow p-2 items-center">
          <Search className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search by class, subject, or topic..."
            className="flex-1 p-2 outline-none bg-transparent"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
