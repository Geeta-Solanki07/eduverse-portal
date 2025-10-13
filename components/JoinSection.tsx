"use client";
import Image from "next/image";

export default function JoinSection() {
  return (
    <section className="bg-blue-50 relative py-24 px-6 overflow-hidden text-black">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-8">
          Join 50,000+ Students on the App Today!
        </h3>

        <ul className="text-gray-700 space-y-4 mb-8 text-left md:inline-block">
          <li className="flex items-center gap-2">
            <span className="text-orange-500 text-xl">✔</span> Live & Recorded classes available at ease
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500 text-xl">✔</span> Dashboards for Progress Tracking
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500 text-xl">✔</span> Thousands of Practice Questions
          </li>
        </ul>

        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
          <Image
            src="/ra4.svg"
            alt="Google Play"
            width={180}
            height={60}
          />
          <Image
            src="/ra5.png"
            alt="App Store"
            width={180}
            height={60}
          />
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="absolute right-6 top-10 hidden md:block">
        <Image
          src="/ra6.png"
          alt="Phone App"
          width={350}
          height={450}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
