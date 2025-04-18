"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GradientTxt from "./UI/GradientTxt";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { Button } from "./UI/Button";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isNavClicked, setIsNavClicked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="relative dark:bg-black dark:text-white">
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <nav>
          <div className="flex items-center justify-between pb-3">
            <Link
              href="/"
              className="text-[15px] font-medium italic sm:text-base md:text-[24px] lg:font-bold"
            >
              {"<Chi"}
              <GradientTxt tagName="span" txt="Josh />" />
            </Link>
            <svg
              onClick={() => setIsNavClicked(!isNavClicked)}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list size-6 cursor-pointer md:size-8 lg:hidden"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            {/* nav menu desktop */}
            <div className="hidden gap-6 font-medium lg:flex xl:gap-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="my-3 rounded-full transition-opacity duration-75"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Link
                href="/#about"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
              >
                About
              </Link>
              <Link
                href="/#services"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`my-5 transition-opacity duration-75 ${pathname.includes("/projects") ? "opacity-50" : "hover:opacity-50"}`}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`my-5 flex items-center gap-3 transition-opacity duration-75 ${pathname === "/contact" ? "opacity-50" : "hover:opacity-50"}`}
              >
                <span>Book a call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* nav menu */}

          <motion.div
            initial={{
              height: 0,
              zIndex: "-5",
              padding: 0,
            }}
            animate={{
              height: isNavClicked ? "auto" : 0,
              zIndex: isNavClicked ? "500" : "-5",
              padding: isNavClicked ? "20px" : 0,
            }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-14 w-full overflow-hidden bg-white p-5 shadow-lg lg:hidden dark:bg-black dark:text-white"
          >
            <div className="container mx-auto flex flex-col px-5 font-medium">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="my-3 rounded-full transition-opacity duration-75"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Link
                href="/#about"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
                onClick={() => setIsNavClicked(false)}
              >
                About
              </Link>
              <Link
                href="/#services"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
                onClick={() => setIsNavClicked(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`my-5 transition-opacity duration-75 ${pathname.includes("projects") ? "opacity-50" : "hover:opacity-50"}`}
                onClick={() => setIsNavClicked(false)}
              >
                Projects
              </Link>
              <Link
                href="/articles"
                className={`my-5 transition-opacity duration-75 ${pathname.includes("/articles") ? "opacity-50" : "hover:opacity-50"}`}
                onClick={() => setIsNavClicked(false)}
              >
                Articles
              </Link>
              <Link
                href="/contact"
                className={`my-5 flex items-center gap-2 transition-opacity duration-75 ${pathname === "/contact" ? "opacity-50" : "hover:opacity-50"}`}
                onClick={() => setIsNavClicked(false)}
              >
                <span>Book a call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}
