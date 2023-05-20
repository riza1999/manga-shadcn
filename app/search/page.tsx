import { Search } from "@/types/manga";
import { redirect } from "next/navigation";
import { MangaCard } from "../components/MangaCard";
import { Pagination } from "./components/pagination";

async function getData(page: string, tSearch: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/search?tSearch=${tSearch}&page=${page}`,
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
  const { page, tSearch } = searchParams;
  if (!page) redirect("search/?page=1");
  if (!tSearch) redirect("/?page=1");
  const data = (await getData(page, tSearch)) as Search;

  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start pb-8 pt-6 md:py-10">
        <h3 className="text-3xl text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          {data.total_search}
        </h3>
        <Pagination
          page={Number(page)}
          disabledJump
          next_page={data.next_page}
          prev_page={data.prev_page}
        />
        {data.searchs.map((manga) => {
          return <MangaCard key={manga.title} manga={manga} />;
        })}
        <Pagination
          page={Number(page)}
          disabledJump
          next_page={data.next_page}
          prev_page={data.prev_page}
        />
      </section>
    </>
  );
}
