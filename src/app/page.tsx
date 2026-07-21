import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Business } from "@/components/home/Business";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Business />
      {/* 以降のセクションは次フェーズ以降で実装する */}
    </>
  );
}
