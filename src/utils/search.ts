export function buildSearchUrl(query: string) {
  return `/search/${encodeURIComponent(query)}`;
}
