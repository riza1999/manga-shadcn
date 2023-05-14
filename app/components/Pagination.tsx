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
import { useState } from "react";

export const Pagination = ({ page }: { page: number }) => {
  const [pageNumber, setPageNumber] = useState(Number.isNaN(page) ? 1 : page);
  const router = useRouter();

  const handleActionJump = () => {
    router.push(`/?page=${pageNumber}`);
  };

  const handleInputPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(Number(e.target.value));
  };

  return (
    <div className="pagination flex gap-3 justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
      <Button disabled={pageNumber === 1 ? true : false} variant={"secondary"}>
        <Link href={`?page=${pageNumber - 1}`}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      <AlertDialog>
        <AlertDialogTrigger className="bg-primary text-primary-foreground h-10 py-2 px-4 rounded-md">
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
      <Button variant={"secondary"}>
        <Link href={`?page=${pageNumber + 1}`}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
