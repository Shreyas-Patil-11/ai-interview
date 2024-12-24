"use client"

import Header from "./dashboard/_components/Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <div className=' mt-40'>
        <Hero />
      </div>
    </div>
  );
}
