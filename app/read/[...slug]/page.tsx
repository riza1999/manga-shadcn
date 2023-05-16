import { ReadSeries, Series } from "@/types/manga";
import React from "react";
import DetailSeries from "./components/DetailSeries";
import ReadChapter from "./components/ReadChapter";
import { Metadata, ResolvingMetadata } from "next";

async function getData(series_name: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/series/${series_name}`,
    {
      // next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDataRead(series_name: string, chapter: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/series/${series_name}/${chapter}`,
    {
      // next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string | string[] };
}): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const manga_title = slug[0]
    .replace("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  if (slug.length === 1)
    return {
      title: manga_title,
    };

  const chapter_read = slug[1]
    .replace("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${manga_title} - ${chapter_read}`,
  };
}

const page = async ({ params }: { params: { slug: string | string[] } }) => {
  const { slug } = params;
  const isDetailPage = slug.length === 1;

  if (isDetailPage) {
    const data = (await getData(slug[0])) as Series;

    return <DetailSeries data={data} />;
  }

  const data = (await getDataRead(slug[0], slug[1])) as ReadSeries;

  return <ReadChapter data={data} />;
};

export default page;
