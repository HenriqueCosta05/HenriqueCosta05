"use client";

import { Experience, Hero, Projects } from "@/components/layouts";
import Articles from "@/components/layouts/articles/articles";
import { Footer, Navbar } from "@/components/templates";

export default function Home() {
  return (
    <main>
      <Navbar logoText="Henrique" highlightedText="Costa" />
      <Hero />
      <Experience />
      <Projects />
      <Articles />
      <Footer />
    </main>
  );
}
