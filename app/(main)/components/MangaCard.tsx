"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatestChapter, Manga } from "@/types/manga";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MangaType } from "./MangaType";
import { getRelativeTime, isValidDateTime } from "@/lib/utils";

export const MangaCard = ({ manga }: { manga: Manga }) => {
  const manga_link = manga.title
    .toLowerCase()
    .replace(" –", "")
    .split(" ")
    .join("-")
    .split("’")
    .join("");

  return (
    <Card>
      <CardHeader className="p-0 relative space-y-0">
        <Link href={`/read/${manga_link}`} prefetch={false}>
          <AspectRatio ratio={2 / 3}>
            <Image
              src={manga.thumbnail}
              alt={`${manga.title} thumbnail`}
              fill
              unoptimized
              className="rounded-t-md object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <MangaType contentType={manga.content_type} />
          </AspectRatio>

          <CardTitle className="pt-4 px-3 text-center text-x truncate">
            {manga.title}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="mt-3">
        <div className="grid w-full items-center gap-2">
          {manga.latest_chapter.map((latest: LatestChapter) => {
            const chapter_link = latest.title
              ?.toLowerCase()
              ?.replace(" –", "")
              ?.split(" ")
              ?.join("-")
              ?.split("’")
              ?.join("");

            const isValid = isValidDateTime(latest.post_on);
            const post_on = isValid ?  getRelativeTime(new Date(latest.post_on)) : latest.post_on

            return (
              <Link
                prefetch={false}
                href={`/read/${manga_link}/${chapter_link}`}
                key={`${manga.title}-${latest.title}`}
                className="flex flex-row justify-between items-center"
              >
                <span className="text-sm">{latest.title}</span>
                <span className="text-xs text-muted-foreground">
                  {post_on}
                </span>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
