"use client";
import Image from "next/image";
import Link from "next/link";

export default function ChooseSection() {
  return (
    <section className="text-center py-16 px-4 bg-white text-black">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">Choose Your Path</h1>
      <h2 className="text-xl md:text-2xl font-light">
        Explore{" "}
        <span className="text-blue-600 font-semibold">IT Profession</span> Career Path or{" "}
        <span className="text-orange-500 font-semibold">Academic Programs</span>.
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {/* IT Card */}
        <Link
          href="/it"
          className="bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-2xl p-10 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <Image src="/ra2.png" alt="IT Icon" width={50} height={50} />
          <h5 className="text-xl font-bold mt-3">IT PROFESSION COURSES</h5>
          <p className="text-sm mt-1">IT Focused career programs</p>
          <button className="mt-3 bg-black px-5 py-2 rounded-full text-sm">Get Started →</button>
        </Link>

        {/* Academic Card */}
        <Link
          href=""
          className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-2xl p-10 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <Image src="/ra3.png" alt="Academic Icon" width={50} height={50} />
          <h5 className="text-xl font-bold mt-3">ACADEMIC COURSES</h5>
          <p className="text-sm mt-1">Academic Focused Level Courses</p>
          <button className="mt-3 bg-black px-5 py-2 rounded-full text-sm">Get Started →</button>
        </Link>
      </div>
    </section>
  );
}