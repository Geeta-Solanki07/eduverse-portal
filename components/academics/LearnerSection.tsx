"use client";

import Image from "next/image";

export default function LearnersSection() {
  return (
    <section className="w-full max-w-[1194px] mx-auto flex flex-wrap items-center justify-center gap-10 px-5 my-20">
      <div className="flex flex-col gap-5 max-w-[559px]">
        <h2 className="text-2xl font-light text-black">LEARNERS AND STUDENTS</h2>
        <h3 className="text-4xl font-semibold text-black leading-tight">You can learn anything.</h3>
        <p className="text-xl font-medium text-black leading-relaxed">
          Build a deep, solid understanding in math, science, grammar, history and more.
        </p>
        <a
          href="#"
          className="self-start px-6 py-3 rounded-full bg-black text-white font-medium text-base shadow-lg"
        >
          Get Started Now
        </a>
      </div>

      <div className="w-full max-w-[540px]">
        <Image
          src="/assets/ac/learner.png"
          alt="Students Learning"
          width={540}
          height={400}
          className="rounded-xl object-contain"
        />
      </div>
    </section>
  );
}
