"use client";

import { Experience, Hero, Projects, Articles, Education, Languages } from "@/components/layouts";
import { Footer, Navbar } from "@/components/templates";

export default function Home() {
  return (
    <main>
      <Navbar logoText="Henrique" highlightedText="Costa" />
      <Hero />
      <Languages />
      <Experience />
      <Education />
      <Projects />
      <Articles />
      <Footer />
    </main>
  );
}
