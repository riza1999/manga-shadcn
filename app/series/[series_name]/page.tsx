import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Chapter, Series } from "@/types/manga";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const page = async ({ params }: { params: { series_name: string } }) => {
  const { series_name } = params;
  const data = (await getData(series_name)) as Series;

  console.log(data.title)

  return (
    <>
      <section className="container max-w-screen-sm mx-auto grid gap-5 items-start pb-8 pt-6 md:py-10">
        <div className="px-24 sm:px-32">
          <AspectRatio ratio={2 / 3}>
            <Image
              src={data.image_link}
              alt={`${data.title} thumbnail`}
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
        </div>
        <h3 className="text-3xl text-center">{data.title}</h3>
        <div className="flex items-center justify-center gap-3">
          {data.genres.map((genre: string) => {
            return <Badge key={genre}>{genre}</Badge>;
          })}
        </div>
        <div className="bg-secondary px-5 py-4 rounded-md">
          <p>{data.synopsis}</p>
        </div>
        <ScrollArea className="w-full rounded-md bg-secondary py-4 h-96">
          {data.chapters.map((chapter: Chapter) => (
            <React.Fragment key={chapter.title}>
              <Link
                className="flex justify-between px-5 py-2 hover:bg-primary/5"
                href={"1"}
              >
                <span>{chapter.title}</span>
                <span className="text-xs text-muted-foreground">
                  {chapter.release_date}
                </span>
              </Link>
              <Separator className="" />
            </React.Fragment>
          ))}
        </ScrollArea>
      </section>
    </>
  );
};

export default page;

{
  /* <AspectRatio ratio={2 / 3}>
          <Image
            src={data.image_link}
            alt={`${data.title} thumbnail`}
            fill
            className="rounded-t-md object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio> */
}
