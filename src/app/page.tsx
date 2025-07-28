'use client';

import { Hero } from "@/components/layouts";
import { Navbar } from "@/components/templates";

export default function Home() {
  return (
    <main>
      <Navbar logoText="Henrique" highlightedText="Costa" />
      <Hero />
    </main>
  );
}
