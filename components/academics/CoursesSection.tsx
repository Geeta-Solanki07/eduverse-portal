"use client";

import Image from "next/image";

interface Course {
  id: number;
  title: string;
  classText: string;
  bg: string;
  bgInner: string;
  watchColor: string;
  exploreBg?: string;
  image: string;
}

interface CoursesProps {
  sectionTitle: string;
  courses: Course[];
}

export default function CoursesSection({ sectionTitle, courses }: CoursesProps) {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-green-50">
       <h2 className="text-2xl md:text-3xl font-semibold text-black text-center md:text-left flex items-center justify-center md:justify-start mb-8">
          {sectionTitle}
        </h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
       
        <a
          href="#"
          className="px-5 py-2 bg-black text-white rounded-full text-sm md:text-base font-medium whitespace-nowrap text-center"
        >
          View All Course
        </a>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[280px] bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between overflow-hidden"
          >
            {/* Background circles */}
            <div className={`absolute right-[-100px] top-0 w-[250px] h-full rounded-full ${course.bg}`} />
            <div className={`absolute right-[-100px] top-0 w-[200px] h-full rounded-full ${course.bgInner}`} />

            {/* Class badge */}
            <div className="max-w-[120px] h-9 bg-white border border-orange-400 rounded-full flex items-center justify-center mb-3">
              <span className="text-black font-medium text-base">{course.classText}</span>
            </div>

            {/* Watch Demo */}
            <div className={`flex items-center gap-2 w-[140px] py-1 px-3 rounded-full border ${course.watchColor} mb-4`}>
              <i className="fas fa-play" />
              <span className="font-medium text-sm">Watch Demo</span>
            </div>

            {/* Explore button */}
            <a
              href="#"
              className={`inline-flex items-center justify-center h-10 px-4 rounded-full text-white font-medium ${course.exploreBg ?? "bg-orange-500"}`}
            >
              Explore Category
            </a>

            {/* Course Image */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Image src={course.image} alt={course.title} width={100} height={100} className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
