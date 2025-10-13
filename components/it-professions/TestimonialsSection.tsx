import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Full Stack Developer",
      comment: "Dousoft Eduverse ke courses ne meri skills next level pe le jaayi. AI aur React Native seekhne ka experience amazing tha!",
      img: "/assets/it/girl.png",
    },
    {
      name: "Rahul Verma",
      role: "Software Engineer",
      comment: "Highly practical aur project-based approach. Instructor guidance bhi bahut helpful thi.",
      img: "/assets/it/boy2.png",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Image src={t.img} alt={t.name} width={100} height={100} className="rounded-full mb-4" />
            <p className="text-gray-700 mb-4">"{t.comment}"</p>
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <span className="text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
