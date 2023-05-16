import { ReadSeries, Series } from "@/types/manga";
import Link from "next/link";
import React from "react";
import SelectChapter from "./SelectChapter";
import Image from "next/image";

const ReadChapter = ({ data }: { data: ReadSeries }) => {
  const selected = data.chapters.find((chapter) => chapter.isSelected);
  const title_link = data.title
    .toLowerCase()
    .replace(" –", "")
    .split(" ")
    .join("-")
    .split("’")
    .join("");

  if (!selected) {
    throw new Error("No Selected Chapter");
  }

  return (
    <>
      <section className="container max-w-screen-sm mx-auto grid gap-5 items-start pb-8 pt-6 md:py-10">
        <div className="text-sm  flex flex-row gap-1">
          <Link href={"/"} className="hover:underline">
            <span>Home</span>
          </Link>
          <span>{">"}</span>
          <Link href={`/read/${title_link}`} className="hover:underline">
            <span>{data.title}</span>
          </Link>

          <span>{">"}</span>
          <span>{selected.title}</span>
        </div>
        <h3 className="text-3xl text-center">{data.title}</h3>
        <h5 className="text-xl text-center">{selected.title}</h5>
        <SelectChapter selected={selected} chapters={data.chapters} />
        <div>
          {data.image_content.map((link: string, index) => {
            return (
              <Image
                src={link}
                key={`image-${index}`}
                alt={`image-${index}`}
                width={1920}
                height={1080}
                unoptimized
              />
            );
          })}
        </div>
        <SelectChapter selected={selected} chapters={data.chapters} />
      </section>
    </>
  );
};

export default ReadChapter;
