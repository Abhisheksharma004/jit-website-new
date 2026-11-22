import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import SolutionCalculator from "@/components/SolutionCalculator";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-[#f4f1ea] text-[#11100e]">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <Manifesto />
        <Services />
        <Portfolio />
        <SolutionCalculator />
        <Process />
        <Comparison />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
