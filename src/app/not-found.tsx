import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      {/* 〇モチーフ：404 を囲むリング */}
      <div className="relative mb-10 flex h-44 w-44 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-line"
        />
        <span
          aria-hidden="true"
          className="absolute inset-4 rounded-full border-2 border-teal/40"
        />
        <span className="font-en text-[2.75rem] font-light tracking-widest text-navy">
          404
        </span>
      </div>

      <h1 className="font-ja text-[1.375rem] font-medium text-navy md:text-[1.75rem]">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 max-w-md font-ja text-[0.875rem] leading-loose text-muted">
        お探しのページは移動または削除された可能性があります。
        URL をご確認いただくか、以下からお進みください。
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary" arrow>
          トップへ戻る
        </Button>
        <Button href="/contact" variant="secondary">
          お問い合わせ
        </Button>
      </div>
    </Container>
  );
}
