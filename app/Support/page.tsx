import Navbar from "@/components/it-professions/study-materials/Navbar";
import SpportPage from "@/components/Support/support";
import Footer from "@/components/it-professions/Footer";
import React from "react";

export const metadata = {
  title: "Support - Dousoft Eduverse",
};

export default function SupportPage() {
  return (
    <div className="font-poppins bg-gray-50">
          <Navbar />
          <SpportPage />
          <Footer />
        </div>
  )
}
