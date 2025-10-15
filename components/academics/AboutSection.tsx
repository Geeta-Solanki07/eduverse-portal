"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 text-black">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/ac/abt-girl.png"
          alt="About Us"
          width={550}
          height={550}
          className="rounded-lg object-contain drop-shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-[#F37021] text-2xl font-semibold mb-2 tracking-wide">
          ABOUT US
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
          Empowering Students Through Quality Academic Education
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We are dedicated to providing high-quality academic courses that help
          students build strong foundations and achieve success in their
          educational journey.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Our team of experienced educators and industry experts ensures that
          every learner receives personalized guidance, practical skills, and
          the confidence to excel in both academics and real-world challenges.
        </p>

        {/* Features */}
        <div className="space-y-5 mb-8">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <i className="fas fa-check-circle text-[#F37021] text-3xl"></i>
            <p className="text-lg font-medium text-gray-800">
              Expert Faculty Team
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <i className="fas fa-check-circle text-[#F37021] text-3xl"></i>
            <p className="text-lg font-medium text-gray-800">
              Structured Learning Path
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <a
          href="#"
          className="inline-block bg-[#F37021] text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
