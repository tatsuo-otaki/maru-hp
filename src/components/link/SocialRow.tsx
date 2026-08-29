"use client";

import { LINKHUB } from "@/content/linkhub";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/link/SocialIcons";
import { trackCardClick } from "@/lib/analytics";

const ICONS = {
  instagram: InstagramIcon,
  x: XIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
} as const;

/** SNSアイコン行。指で押しやすいよう 1辺44px以上のタップ領域を確保する。 */
export function SocialRow() {
  return (
    <ul className="flex items-center justify-center gap-3">
      {LINKHUB.socials.map((social) => {
        const Icon = ICONS[social.key as keyof typeof ICONS];
        return (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCardClick(social.cardType)}
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-teal hover:text-teal"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
