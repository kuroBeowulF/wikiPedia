import React from "react";
import cntl from "cntl";
import Link from "next/link";

const className = {
  noneThumbnailArticle: cntl`mt-4`,
  ThumbnailArticle: cntl`mt-4 flex flex-row gap-4`,
  link: cntl`text-xl font-bold underline hover:text-orange-600`,
  img: cntl`rounded-md`,
  imgBox: cntl`flex flex-col justify-center`,
  para: cntl`font-serif`,
};

type Props = {
  result: Result;
};

export default function ResultItem({ result }: Props) {
  const itemText = (
    <div>
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className={className.link}
        >
          {result.title}
        </Link>
      </h2>
      <p className={className.para}>{result.extract}</p>
    </div>
  );

  const content = !result?.thumbnail?.source ? (
    <article className={className.noneThumbnailArticle}>{itemText}</article>
  ) : (
    <article className={className.ThumbnailArticle}>
      {itemText}
      <div className={className.imgBox}>
        <img
          src={result.thumbnail.source}
          alt={result.title}
          width={result.thumbnail.width}
          height={result.thumbnail.height}
          loading="lazy"
          className={className.img}
        />
      </div>
    </article>
  );

  return content;
}
