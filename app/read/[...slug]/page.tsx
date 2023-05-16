import { ReadSeries, Series } from "@/types/manga";
import Link from "next/link";
import React from "react";
import SelectChapter from "./components/SelectChapter";
import DetailSeries from "./components/DetailSeries";
import ReadChapter from "./components/ReadChapter";

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
