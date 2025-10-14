import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Professional courses",
    desc: "Learn Artificial Intelligence, machine learning, Web Development, Python, Flutter, React Native, MERN ...",
    img: "/assets/it/proffesional.png",
    bg: "bg-[#D9FFE6]",
  },
  {
    id: 2,
    title: "Top Instructors",
    desc: "Experienced professionals delivering hands-on training in AI, ML, Web, and App Development.",
    img: "/assets/it/instructor.png",
    bg: "bg-[#FFE7D9]",
  },
  {
    id: 3,
    title: "Online Certificates",
    desc: "Get industry-recognized certificates on course completion to boost your resume and career opportunities.",
    img: "/assets/it/certificate.png",
    bg: "bg-[#B8D7FF]",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full px-5 md:px-20 py-16 text-center">
      <h2 className="text-[#F37021] text-3xl font-light mb-2">FEATURES</h2>
      <h3 className="text-black text-3xl md:text-4xl font-medium mb-12 leading-snug">
        Emerging Technologies and Trends in <br /> Software Development
      </h3>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col items-center justify-between w-full max-w-[384px] h-[380px] p-8 rounded-2xl shadow-md ${feature.bg}`}
          >
            <h4 className="text-black text-2xl font-medium mb-5">{feature.title}</h4>
            <p className="text-black/60 text-sm font-sans leading-6 mb-5">{feature.desc}</p>
            <div className="w-32 h-32 relative">
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
