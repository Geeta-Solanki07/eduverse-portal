import Navbar from "@/components/it-professions/study-materials/Navbar";
import MaterialCard from "@/components/it-professions/study-materials/MaterislCard";
import Footer from "@/components/it-professions/Footer";

export const metadata = {
  title: "Study Materials - Dousoft Eduverse",
};

export default function StudyMaterialsPage() {
  return (
    <div className="font-poppins bg-gray-50">
      <Navbar />
      <MaterialCard />
      <Footer />
    </div>
  );
}
