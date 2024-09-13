"use client";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import CustomBtn from "./components/Reusables/CustomBtn";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex h-[90vh] flex-col items-center justify-center px-5 pt-5 lg:px-20">
        <h2 className="mb-2 text-[80px] font-bold tracking-[0.5px] md:text-[160px]">
          404
        </h2>
        <h2 className="mb-8 text-[30px] font-bold italic md:text-[76px]">
          Página não encontrada
        </h2>
        <p className="mb-8 text-center text-xl leading-[140%] text-[#152c5b]">
          A página que você está procurando não existe ou foi movida.
        </p>
        <CustomBtn txt="Voltar para a página inicial" className="w-[250px]" href="/" />
      </div>
      <Footer />
    </>
  );
}
