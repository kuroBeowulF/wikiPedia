export default async function getWikiResults(searchResult: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchResult,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });

  const result = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams}`
  );

  return result.json();
}
