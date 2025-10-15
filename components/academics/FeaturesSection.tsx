"use client";

import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="features-section py-20 bg-gray-50 px-6 md:px-10 text-gray-800">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-orange-500">FEATURES</h2>
        <h3 className="text-xl md:text-2xl font-semibold mt-2 text-gray-700">
          Emerging Technologies and Trends in <br className="hidden md:block" /> Software Development
        </h3>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="card-image mb-4 w-24 h-24 relative">
            <Image
              src="/assets/ac/interactive.svg"
              alt="Hands-On Projects"
              fill
              className="object-contain"
            />
          </div>
          <h4 className="card-title text-xl font-semibold mb-2">Hands-On Projects</h4>
          <p className="card-description text-gray-600">
            Focus on experiments, and real-life applications
          </p>
        </div>

        {/* Card 2 */}
        <div className="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="card-image mb-4 w-24 h-24 relative">
            <Image
              src="/assets/ac/interactive.svg"
              alt="Interactive Sessions"
              fill
              className="object-contain"
            />
          </div>
          <h4 className="card-title text-xl font-semibold mb-2">Interactive Sessions</h4>
          <p className="card-description text-gray-600">
            Play-based learning for deeper understanding of the concepts
          </p>
        </div>

        {/* Card 3 */}
        <div className="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="card-image mb-4 w-24 h-24 relative">
            <Image
              src="/assets/ac/interactive.svg"
              alt="Future Ready"
              fill
              className="object-contain"
            />
          </div>
          <h4 className="card-title text-xl font-semibold mb-2">Future Ready</h4>
          <p className="card-description text-gray-600">
            Developing communication, empathy, and leadership skills
          </p>
        </div>
      </div>
    </section>
  );
}
