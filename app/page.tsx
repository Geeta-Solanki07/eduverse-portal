import Navbar from "../components/Navbar";
import ChooseSection from "../components/ChooseSection";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ChooseSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
