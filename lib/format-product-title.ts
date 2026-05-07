export function formatProductTitle(title: string) {
  return title.replace(/["«»]/g, "").trim();
}
