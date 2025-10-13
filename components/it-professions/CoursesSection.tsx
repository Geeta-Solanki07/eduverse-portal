import Image from "next/image";

export default function CoursesSection() {
  const courses = [
    { name: "AI - Artificial Intelligence", img: "/assets/it/ai.png", price: "₹2,999/-", link: "/it-professions/ai-course" },
    { name: "React Native", img: "/assets/it/react.png", price: "₹2,999/-", link: "/it-professions/react-native" },
    { name: "Web Development", img: "/assets/it/web.png", price: "₹2,999/-", link: "/it-professions/web-development" },
  ];

  return (
    <section className="bg-orange-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Pick A Course To Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="relative w-full h-52">
              <Image src={course.img} alt={course.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">Learn {course.name} from scratch and advance your skills.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-orange-600">{course.price}</span>
                <a href={course.link} className="text-orange-600 font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
