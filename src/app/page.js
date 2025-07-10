import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import AchievementsSection from "./component/AchievementsSection";
import ProjectsSection from "./component/ProjectsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <EmailSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}

