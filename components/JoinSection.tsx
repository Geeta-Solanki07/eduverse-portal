import Image from "next/image";

export default function JoinSection() {
  return (
    <section className="bg-blue-50 relative py-16 px-6 overflow-hidden text-black">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Join 50 Thousands Students on the App today!
        </h3>

        <ul className="text-gray-700 space-y-2 mb-6">
          <li>✔ Live & Recorded classes available at ease</li>
          <li>✔ Dashboards for Progress Tracking</li>
          <li>✔ Thousands of Practice Questions</li>
        </ul>

        <div className="flex gap-4 flex-wrap">
          <Image
            src="/ra4.svg"
            alt="Google Play"
            width={150}
            height={50}
          />
          <Image
            src="/ra5.png"
            alt="App Store"
            width={150}
            height={50}
          />
        </div>
      </div>

      <div className="absolute right-6 top-10 hidden md:block">
        <Image
          src="/ra6.png"
          alt="Phone App"
          width={300}
          height={400}
        //   className="drop-shadow-xl"
        />
      </div>
    </section>
  );
}
