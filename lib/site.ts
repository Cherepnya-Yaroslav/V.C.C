export const siteConfig = {
  name: "V.C.C",
  title: "V.C.C | Curated Underground Fashion Experience",
  description:
    "V.C.C is a cinematic digital fashion experience built around dark minimalism, editorial streetwear, and underground atmosphere.",
  url: "https://vcc.example",
  locale: "en_US",
  keywords: [
    "V.C.C",
    "fashion editorial",
    "underground fashion",
    "streetwear campaign",
    "cinematic fashion experience",
    "dark minimalism",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
