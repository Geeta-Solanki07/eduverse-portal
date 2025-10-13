import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
      <Image src="/assets/it/about.png" alt="About Us" width={400} height={400} className="rounded-xl" />
      <div>
        <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
        <h3 className="text-xl font-semibold mb-4">Leading the Way in Software Development</h3>
        <p className="text-gray-700 mb-4">
          We specialize in delivering innovative, high-quality software solutions that empower businesses to thrive in the digital era.
        </p>
        <p className="text-gray-700 mb-4">
          With a team of skilled developers, designers, and strategists, we ensure every project is built with precision and long-term success in mind.
        </p>
      </div>
    </section>
  );
}
