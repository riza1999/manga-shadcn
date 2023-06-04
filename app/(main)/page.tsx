import { Manga } from "@/types/manga";
import { redirect } from "next/navigation";
import { Pagination } from "./components/Pagination";
import { MangaCard } from "./components/MangaCard";
import { getUser } from "@/lib/pocketbase";

async function getData(page: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/latest?page=${page}`,
    {
      next: { revalidate: 30 },
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


