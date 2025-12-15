"use client";

import { Articles, Education, Experience, Hero, Projects } from "@/components/layouts";
import { Footer, Navbar } from "@/components/templates";

export default function Home() {
  return (
    <main>
      <Navbar logoText="Henrique" highlightedText="Costa" />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Articles />
      <Footer />
    </main>
  );
}
