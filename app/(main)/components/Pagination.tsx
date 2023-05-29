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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Pagination = ({
  page,
  disabledJump = false,
}: {
  page: number;
  disabledJump?: boolean;
}) => {
  const [pageNumber, setPageNumber] = useState(page);
  const router = useRouter();

  const isFirstPage = pageNumber === 1 ? true : false;

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  const handleActionJump = () => {
    router.push(`/?page=${pageNumber}`);
  };

  const handleInputPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(Number(e.target.value));
  };

  return (
    <div className="pagination flex gap-3 justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
      <Button
        asChild={!isFirstPage}
        disabled={isFirstPage}
        variant={"secondary"}
      >
        <Link prefetch={false} href={`?page=${pageNumber - 1}`}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      <AlertDialog>
        <AlertDialogTrigger disabled={disabledJump} className="bg-primary text-primary-foreground h-10 py-2 px-4 rounded-md">
          {pageNumber}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Jump to page?</AlertDialogTitle>
            <Input
              type="number"
              placeholder="Page"
              value={pageNumber}
              onChange={handleInputPageChange}
            />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleActionJump}>
              Jump
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant={"secondary"} asChild>
        <Link prefetch={false} href={`?page=${pageNumber + 1}`}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
