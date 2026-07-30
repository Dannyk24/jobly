export function buildSearchUrl(query: string) {
  return `/search?query=${encodeURIComponent(query)}`;
}
