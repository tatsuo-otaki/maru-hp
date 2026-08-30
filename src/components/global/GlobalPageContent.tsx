import { SetHtmlLang } from "@/components/global/SetHtmlLang";
import { LangPreference } from "@/components/global/LangPreference";
import { GlobalHero } from "@/components/global/GlobalHero";
import { GlobalWhy } from "@/components/global/GlobalWhy";
import { GlobalBusinesses } from "@/components/global/GlobalBusinesses";
import { GlobalCycle } from "@/components/global/GlobalCycle";
import { GlobalAfrica } from "@/components/global/GlobalAfrica";
import { GlobalValueFlow } from "@/components/global/GlobalValueFlow";
import { GlobalWhoWeWork } from "@/components/global/GlobalWhoWeWork";
import { GlobalPartnerships } from "@/components/global/GlobalPartnerships";
import { GlobalRoadmap } from "@/components/global/GlobalRoadmap";
import { GlobalCta } from "@/components/global/GlobalCta";
import type { GLang } from "@/content/global";

/**
 * Maru Global 本編。/global（ja）・/global/en・/global/fr の3ルートから
 * lang だけを渡して共通利用する。Header/Footer は (site) レイアウトが提供するため含めない。
 */
export function GlobalPageContent({ lang }: { lang: GLang }) {
  return (
    <>
      <SetHtmlLang lang={lang} />
      <LangPreference lang={lang} />
      <GlobalHero lang={lang} />
      <GlobalWhy lang={lang} />
      <GlobalBusinesses lang={lang} />
      <GlobalCycle lang={lang} />
      <GlobalAfrica lang={lang} />
      <GlobalValueFlow lang={lang} />
      <GlobalWhoWeWork lang={lang} />
      <GlobalPartnerships lang={lang} />
      <GlobalRoadmap lang={lang} />
      <GlobalCta lang={lang} />
    </>
  );
}
