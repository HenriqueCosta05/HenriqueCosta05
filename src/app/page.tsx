'use client';

import { Navbar } from "@/components/templates";

export default function Home() {
  return (
    <main>
      <Navbar logoText="Henrique" highlightedText="Costa" onMenuToggle={() => console.log("Menu toggled")} />
    </main>
  );
}
