import Image from "next/image";

export default function EbookSection() {
  return (
    <section className="bg-orange-50 py-16 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto rounded-xl">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Download Our Free IT Career Guide</h2>
        <p className="text-gray-700 mb-6">
          Aapke liye curated IT courses, career tips aur project ideas ka full guide. Free download karein aur apni learning journey start karein!
        </p>
        <a
          href="/assets/it/ebook.pdf"
          className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition"
        >
          Download Now
        </a>
      </div>
      <div className="md:w-1/2 relative h-64 md:h-80">
        <Image src="/assets/it/ebook.png" alt="Ebook" fill className="object-contain" />
      </div>
    </section>
  );
}
