"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTechStacks } from "../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import GradientTxt from "./UI/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { TechStackEnum } from "../../../types/Technologies";
import Image from "next/image";

const marqueeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function TechStacks() {
  const [techStacks, setTechStacks] = useState<string[]>([]);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const getStacks = async function () {
      try {
        const stacks = await getTechStacks();
        setTechStacks(stacks);
      } catch (error) {
        toast.error("Failed to fetch techstacks. Please try again later.");
      }
    };
    getStacks();
  }, []);

  return (
    <section className="mb-[80px] mt-[100px] bg-black">
      <div className="container mx-auto flex flex-col items-start justify-between gap-10 px-5 pb-[100px] pt-[300px] md:flex-row md:gap-2 lg:px-20">
        <div
          id="left-content"
          className={`md:sticky ${isBottom ? "md:bottom-0" : "md:top-20"}`}
        >
          <GradientTxt
            tagName="h5"
            txt="TechStack"
            className="text-[22px] font-bold tracking-[4px]"
          />
          <h2 className="my-6 text-[40px] font-bold leading-[120%] tracking-[0.5px] text-white xl:text-[54px]">
            Here are some of the technologies I work with:
          </h2>
        </div>
        <div
          id="right-content"
          className="max-w-full overflow-hidden md:max-w-[50%]"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStacks.map((tech, index) => (
              <FadeUp
                key={index}
                tag="p"
                className="group mb-[50px] cursor-pointer border-b border-gray-400 pb-5"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={TechStackEnum.getTechStackName(tech as TechStackEnum)}
                    alt={`${tech} icon`}
                    className="w-48 h-12"
                    width={48}
                    height={12}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
