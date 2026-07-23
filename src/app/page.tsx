import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Business } from "@/components/home/Business";
import { Steps } from "@/components/home/Steps";
import { Cycle } from "@/components/home/Cycle";
import { Projects } from "@/components/home/Projects";
import { Mission } from "@/components/home/Mission";
import { Vision } from "@/components/home/Vision";
import { MaruMeaningTeaser } from "@/components/home/MaruMeaningTeaser";
import { Partner } from "@/components/home/Partner";
import { CeoTeaser } from "@/components/home/CeoTeaser";
import { News } from "@/components/home/News";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Business />
      <Steps />
      <Cycle />
      <Projects />
      <Mission />
      <Vision />
      <MaruMeaningTeaser />
      <Partner />
      <CeoTeaser />
      <News />
      <ContactCta />
    </>
  );
}
