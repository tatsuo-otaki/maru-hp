import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Business } from "@/components/home/Business";
import { Steps } from "@/components/home/Steps";
import { Cycle } from "@/components/home/Cycle";
import { Projects } from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Business />
      <Steps />
      <Cycle />
      <Projects />
      {/* 以降のセクションは次フェーズ以降で実装する */}
    </>
  );
}
