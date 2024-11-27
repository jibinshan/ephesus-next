import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import About from "./(section)/About";
import Featured from "./(section)/Featured";
import PrivateAndGroup from "./(section)/PrivateAndGroup";
import Reviews from "./(section)/Reviews";
import Contact from "./(section)/Contact";
import Experience from "./(section)/Experience";
import Special from "./(section)/(special)/Special";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
        <Navbar position="fixed" />
        <Hero />
        <Welcome />
        <About />
        <Featured />
        <Special />
        <Experience />
        <PrivateAndGroup />
        <Reviews />
        <Contact />
        {/* <Hero />
        <Menu />
        <Experience />
        <Special />
        <PrivateAndGroupDining />
        <Reviews />
        <Glimpse /> */}
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
