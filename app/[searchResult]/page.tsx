import React from "react";
import cntl from "cntl";
import getWikiResults from "@/lib/getWikiResults";
import ResultItem from "../components/ResultItem";

const className = {
  main: cntl`max-w-xl mx-auto p-2 mt-2 bg-slate-200 min-h-screen`,
  notFound: cntl``,
};
type Props = {
  params: {
    searchResult: string;
  };
};

export async function generateMetadata({ params: { searchResult } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchResult);
  const data = await wikiData;
  const displayResult = searchResult.replaceAll("%20", " ");

  if (!data?.query?.pages)
    return {
      title: `${searchResult} Not Found`,
    };

  return {
    title: displayResult,
    description: `Search Result For ${searchResult}`,
  };
}

export default async function SearchResult({
  params: { searchResult },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchResult);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  console.log({ results });

  const content = (
    <main className={className.main}>
      {results ? (
        Object.values(results).map((result) => {
          return <ResultItem key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className={className.notFound}>{`${searchResult} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
