"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Home/Services";
import OtherComponents from "./components/Home/Other_Comp/OtherComponents";
import Footer from "./components/Footer/Footer";
import GradientTxt from "./components/UI/GradientTxt";
import Projects from "./components/Home/Projects/Projects";
import AnimatedSlide from "./components/Home/Projects/Swiper";
import TechStacks from "./components/TechStacks";

const Preloader = function () {
  return (
    <section className="fixed left-0 top-0 inline-flex h-full w-full items-center justify-center bg-[#f3f3f3]">
      <motion.div
        initial={{ y: 100, opacity: 0, rotate: 10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.5,
        }}
      >
        <GradientTxt
          tagName="h2"
          txt="<ChiJosh />"
          className="text-[22px] font-bold md:text-[36px] xl:text-[54px]"
        />
      </motion.div>
    </section>
  );
};

export default function ClientHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // run preloader once
    const hasPreloaderBeenShown = localStorage.getItem("preloaderShown");
    if (!hasPreloaderBeenShown) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("preloaderShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }

    // Clear preloader flag on page unload
    const handleBeforeUnload = () => {
      localStorage.removeItem("preloaderShown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <>
          <Header key="header" />
          <main key="main">
            <div className="container mx-auto px-5 pt-5 lg:px-20 dark:bg-gray-800 dark:text-white">
              <Hero />
            </div>
            <div className="container mx-auto px-5 pt-5 lg:px-20 dark:text-white">
              <Services />
              <Projects />
            </div>
            <div className="relative h-[400px]">
              <AnimatedSlide />
            </div>
            <TechStacks />
            <OtherComponents />
          </main>
          <Footer key="footer" />
        </>
      )}
    </AnimatePresence>
  );
}
