import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatestChapter, Manga } from "@/types/manga";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Pagination } from "./components/Pagination";
import { redirect } from "next/navigation";

async function getData(page: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/latest?page=${page}`,
    {
      next: { revalidate: 180 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function IndexPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page } = searchParams;
  if (!page) redirect("/?page=1");
  const data = await getData(page);

  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start pb-8 pt-6 md:py-10">
        <h3 className="text-3xl text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          Komik Terbaru
        </h3>
        <Pagination page={Number(page)} />
        {data.map((manga: Manga) => {
          return <MangaCard key={manga.title} manga={manga} />;
        })}
        <Pagination page={Number(page)} />
      </section>
    </>
  );
}

const MangaCard = ({ manga }: { manga: Manga }) => {
  const manga_link = manga.title
    .toLowerCase()
    .split(" ")
    .join("-")
    .split("’")
    .join("");

  return (
    <Card>
      <CardHeader className="p-0 relative space-y-0">
        <Link href={`/series/${manga_link}`}>
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
            return (
              <div
                key={`${manga.title}-${latest.chapter_title}`}
                className="flex flex-row justify-between items-center"
              >
                <span className="text-sm">{latest.chapter_title}</span>
                <span className="text-xs text-muted-foreground">
                  {latest.chapter_post_on}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const MangaType = ({ contentType }: { contentType: string }) => {
  return (
    <div className="absolute top-2 right-2">
      <Badge className="uppercase">{contentType}</Badge>
    </div>
  );
};
