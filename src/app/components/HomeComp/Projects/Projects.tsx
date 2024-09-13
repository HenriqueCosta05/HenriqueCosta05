import FadeUp from "@/animations/FadeUp";
import CustomBtn from "../../Reusables/CustomBtn";
import GradientTxt from "../../Reusables/GradientTxt";

export default function Projects() {
  return (
    <section className="mb-5">
      <FadeUp
        tag="div"
        className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0"
      >
        <div>
          <GradientTxt
            tagName="h6"
            txt="Projetos"
            className="mb-4 text-center text-[22px] font-bold"
          />
          <h2 className="mx-auto mb-10 max-w-[600px] text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
            Projetos que já participei ativamente
          </h2>
        </div>

        <CustomBtn
          txt="Visualizar todos os projetos"
          className="w-[245px]"
          href="/projects"
        />
      </FadeUp>
    </section>
  );
}
