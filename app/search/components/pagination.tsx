"use client";

import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const Pagination = ({
  page,
  disabledJump = false,
  next_page,
  prev_page,
}: {
  page: number;
  disabledJump?: boolean;
  next_page: boolean;
  prev_page: boolean;
}) => {
  const [pageNumber, setPageNumber] = useState(page);
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  return (
    <div className="pagination flex gap-3 justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
      <Button asChild={prev_page} disabled={!prev_page} variant={"secondary"}>
        <Link
          prefetch={false}
          href={`${pathname}?${createQueryString(
            "page",
            String(pageNumber - 1)
          )}`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      <AlertDialog>
        <AlertDialogTrigger
          disabled={disabledJump}
          className="bg-primary text-primary-foreground h-10 py-2 px-4 rounded-md"
        >
          {pageNumber}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Jump to page?</AlertDialogTitle>
            <Input
              type="number"
              placeholder="Page"
              value={pageNumber}
            />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              Jump
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant={"secondary"} asChild={next_page} disabled={!next_page}>
        <Link
          prefetch={false}
          href={`${pathname}?${createQueryString(
            "page",
            String(pageNumber + 1)
          )}`}
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
