"use client";

import BentoGrid from "./components/BentoGrid";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      {/* <Faq /> */}
      <BentoGrid />
    </>
  );
}
