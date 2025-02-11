"use client";

import BentoGrid from "./components/BentoGrid";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <BentoGrid />
    </>
  );
}
