"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useMouseParallax } from "@/lib/useMouseParallax";
import { HERO } from "@/content/home";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const parallax = useMouseParallax(12);

  // reduced-motion 時は初期状態を無効化して静止表示にする
  const fade = (delay: number) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section id="top" className="relative overflow-hidden">
      {/* 背景の大きな〇（ブランドモチーフ）。PC のみ視差＋ゆっくり浮遊。 */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-320px] top-1/2 -mt-[440px] hidden lg:block"
        style={reduced ? undefined : { x: parallax.x, y: parallax.y }}
      >
        <motion.div
          className="h-[880px] w-[880px] rounded-full border border-[rgba(15,31,61,0.06)]"
          animate={reduced ? undefined : { y: [0, -16, 0] }}
          transition={
            reduced
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <div className="absolute right-[280px] top-1/2 -mt-[290px] h-[580px] w-[580px] rounded-full border border-[rgba(45,139,125,0.08)]" />
      </motion.div>

      <Container className="relative flex flex-col gap-12 py-16 md:flex-row md:items-center md:gap-8 md:py-20 lg:min-h-[86vh] lg:gap-10 lg:py-24">
        {/* 左：コンテンツ */}
        <div className="relative z-10 md:flex-1 md:pr-4 lg:max-w-[560px] lg:pr-6">
          {/* Mission ラベル */}
          <motion.div className="mb-8 flex items-center gap-2.5" {...fade(0.1)}>
            <motion.span
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-teal"
              animate={reduced ? undefined : { rotate: 360 }}
              transition={
                reduced
                  ? undefined
                  : { duration: 22, repeat: Infinity, ease: "linear" }
              }
            >
              <span className="h-[7px] w-[7px] rounded-full bg-teal" />
            </motion.span>
            <span className="font-en text-label font-semibold uppercase tracking-[0.2em] text-teal">
              {HERO.missionLabel}
            </span>
          </motion.div>

          {/* Mission 本文（行単位リビール）
              lg 帯(1024–1279)は写真で列幅が狭く 56px だと折り返すため一段小さくし、
              xl(≥1280) で本来の text-hero(最大56px) に戻す。 */}
          <h1 className="font-ja text-hero font-medium text-navy md:text-[2.25rem] lg:text-[2.75rem] xl:text-hero">
            {HERO.missionLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "105%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          duration: 0.95,
                          delay: 0.3 + i * 0.18,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* 補助コピー */}
          <motion.p
            className="mt-6 font-ja text-body-lg font-light text-teal"
            {...fade(0.74)}
          >
            {HERO.subCopy}
          </motion.p>

          {/* 説明 */}
          <motion.p
            className="mt-4 max-w-md font-ja text-body text-muted"
            {...fade(0.9)}
          >
            {HERO.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            {...fade(1.06)}
          >
            <Button href={HERO.primaryCta.href} variant="primary" arrow>
              {HERO.primaryCta.label}
            </Button>
            <Button href={HERO.secondaryCta.href} variant="secondary">
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>

          {/* 3事業タグ */}
          <motion.ul
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
            {...fade(1.22)}
          >
            {HERO.serviceTags.map((tag) => (
              <li key={tag.num} className="flex items-center gap-1.5">
                <span className={`font-en text-label font-medium ${tag.color}`}>
                  {tag.num}
                </span>
                <span className="font-ja text-caption font-light text-muted">
                  {tag.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* 右：円形写真＋装飾 */}
        <div className="relative z-0 mx-auto md:mx-0 md:flex-shrink-0">
          <motion.div
            className="relative"
            animate={reduced ? undefined : { y: [0, -12, 0] }}
            transition={
              reduced
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* 写真円 */}
            <motion.div
              className="relative aspect-square w-[240px] overflow-hidden rounded-full bg-[#1A3050] shadow-[0_6px_48px_rgba(15,31,61,0.12)] sm:w-[340px] md:w-[280px] lg:w-[360px] xl:w-[440px]"
              initial={reduced ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={
                reduced
                  ? undefined
                  : { duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <Image
                src={HERO.photo.src}
                alt={HERO.photo.alt}
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 767px) 340px, (max-width: 1023px) 280px, (max-width: 1279px) 360px, 440px"
                className="object-cover"
              />
            </motion.div>

            {/* 外周リング */}
            <div className="pointer-events-none absolute -inset-4 rounded-full border border-[rgba(15,31,61,0.08)] sm:-inset-5 lg:-inset-6" />

            {/* Teal リング accent */}
            <span className="pointer-events-none absolute -right-1 -top-2 h-14 w-14 rounded-full border-2 border-teal sm:-top-3 sm:h-16 sm:w-16" />
            {/* Teal dot */}
            <span className="pointer-events-none absolute right-8 top-2 h-3.5 w-3.5 rounded-full bg-teal sm:right-10" />
            {/* Amber dot */}
            <span className="pointer-events-none absolute bottom-10 -left-1 h-3 w-3 rounded-full bg-amber" />
            {/* 〇 ブランドバッジ */}
            <span className="pointer-events-none absolute -bottom-3 right-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-warm font-ja text-sm text-teal">
              〇
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
