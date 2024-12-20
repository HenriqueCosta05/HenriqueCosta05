"use client";

import Image from "next/image";
import profImage from "../../../../../../public/img1.jpg";
import profImage2 from "../../../../../../public/img2.jpeg";
import profImage02 from "../../../../../../public/img2.jpg";
import profImage3 from "../../../../../../public/img3.jpg";
import profImage4 from "../../../../../../public/img4.jpg";
import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { motion } from "framer-motion";

export default function ProfileInfo() {
  return (
    <section id="about">
      <FadeUp
        tag="div"
        className="mb-20 flex flex-col items-start justify-between gap-4 lg:flex-row"
      >
        <div>
          <GradientTxt
            txt="DESENVOVEDOR FRONT-END"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            Sobre mim
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#666] md:text-[22px] lg:max-w-[50%]">
          Olá! Meu nome é Henrique, sou um desenvolvedor front-end de São Paulo, Brasil.
          Eu crio aplicações web de alta qualidade para empresas e startups. Eu sou apaixonado
          por tecnologia e estou sempre procurando aprender algo novo.
        </p>
      </FadeUp>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-4"
      >
        <Image
          src={profImage02}
          alt="image"
          className="col-span-2 w-full xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-3 xl:h-full xl:w-auto"
        />
        <Image
          src={profImage2}
          alt="image"
          className="col-span-1 w-full xl:col-span-1 xl:col-start-4 xl:row-start-1 xl:row-end-2 xl:h-full xl:w-auto"
        />
        <Image
          src={profImage3}
          alt="image"
          className="col-span-1 w-full xl:col-span-1 xl:col-start-4 xl:row-start-2 xl:row-end-3 xl:h-full xl:w-auto xl:object-cover"
        />
        <Image
          src={profImage4}
          alt="image"
          className="col-span-2 w-full xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:row-end-3 xl:aspect-9/16 xl:h-full xl:w-auto xl:object-cover"
        />
      </motion.div>
    </section>
  );
}
