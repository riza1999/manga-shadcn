import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start pb-8 pt-6 md:py-10">
        <h3 className="text-3xl text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          Komik Terbaru
        </h3>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

        <div className="pagination flex gap-3 justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </section>
    </>
  );
}

const SkeletonCard = () => {
  return (
    <Card>
      <CardHeader className="p-0 relative space-y-0">
        <AspectRatio ratio={2 / 3}>
          {/* <Image
              src={manga.thumbnail}
              alt={`${manga.title} thumbnail`}
              fill
              className="rounded-t-md object-cover"
            /> */}
          <Skeleton className="h-full w-full" />
        </AspectRatio>

        <CardTitle className="pt-4 px-3 text-center text-x truncate">
          <Skeleton className="h-6 w-100" />
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-3">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  );
};
