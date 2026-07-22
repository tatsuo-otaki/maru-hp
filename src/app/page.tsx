import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Business } from "@/components/home/Business";
import { Steps } from "@/components/home/Steps";
import { Cycle } from "@/components/home/Cycle";
import { Projects } from "@/components/home/Projects";
import { Mission } from "@/components/home/Mission";
import { Vision } from "@/components/home/Vision";
import { MaruMeaning } from "@/components/home/MaruMeaning";
import { Partner } from "@/components/home/Partner";
import { Ceo } from "@/components/home/Ceo";
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
      <MaruMeaning />
      <Partner />
      <Ceo />
      <News />
      <ContactCta />
    </>
  );
}
