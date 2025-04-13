"use client";

import CustomBtn from "./UI/CustomBtn";
import GradientTxt from "./UI/GradientTxt";
import profImg from "../../../public/josh image 5.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Gooery from "./GooeryAnimation";

export default function Hero() {
  const MotionImage = motion.create(Image);

  return (
    <>
      <Gooery />

      <section className="my-[80px] items-center gap-16 xl:flex">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-[40px] font-bold leading-[110%] md:text-[68px] lg:text-[70px]">
            <GradientTxt tagName="span" txt="I build scalable" /> fullstack
            solutions.
          </h1>

          <p className="mb-16 text-[19px] text-[#666] lg:text-[22px]">
            Hi! I'm Joshua, a Fullstack Software Engineer based in Germany. I
            craft applications that delight and inspire users..
          </p>

          <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
            <CustomBtn
              txt="Book a call"
              className="w-[150px]"
              href="/contact"
            />
            <Link
              href="/Joshua_Onyenwere_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Joshua_Onyenwere_CV.pdf"
              className="group flex cursor-pointer items-center gap-2 text-lg font-bold z-10"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-3"
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

        <MotionImage
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profImg}
          alt="profile image"
          className="mx-auto w-full rounded-full lg:w-[500px]"
          priority
        />
      </section>
    </>
  );
}
