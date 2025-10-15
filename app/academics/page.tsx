import HeroSection from "@/components/academics/HeroSection";
import AboutSection from "@/components/academics/AboutSection";
import FeaturesSection from "@/components/academics/FeaturesSection";
// import ProgramsSection from "@/components/academics/ProgramsSection";
// import FacultySection from "@/components/academics/FacultySection";
// import TestimonialsSection from "@/components/academics/TestimonialsSection";
// import StatsSection from "@/components/academics/StatsSection";
// import CTASection from "@/components/academics/CTASection";
// import Footer from "@/components/academics/Footer";

export const metadata = {
  title: "Academics - Dousoft Eduverse",
  description:
    "Explore Dousoft Eduverse Academics – your path to excellence with top programs, experienced faculty, and learning opportunities.",
};

export default function AcademicsPage() {
  return (
    <div className="bg-[#ebfff2] font-poppins text-gray-800">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      {/* <ProgramsSection />
      <FacultySection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer /> */}
    </div>
  );
}
