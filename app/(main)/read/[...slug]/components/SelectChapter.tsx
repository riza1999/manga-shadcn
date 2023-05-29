"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChapterOption } from "@/types/manga";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SelectChapter = ({
  selected,
  chapters,
  nextChapter,
  prevChapter,
}: {
  selected: ChapterOption;
  chapters: ChapterOption[];
  nextChapter: ChapterOption;
  prevChapter: ChapterOption;
}) => {
  const pathname = usePathname().split("/");
  pathname.pop();
  const cleanPath = pathname.join("/");

  const router = useRouter();

  const handleChange = (title: string) => {
    const chapter_link = title
      .toLowerCase()
      .replace(" –", "")
      .split(" ")
      .join("-")
      .split("’")
      .join("");

    router.push(`${cleanPath}/${chapter_link}`);
  };

  const prevLink = `${cleanPath}/${prevChapter?.title
    .toLowerCase()
    .replace(" –", "")
    .split(" ")
    .join("-")
    .split("’")
    .join("")}`;

  const nextLink = `${cleanPath}/${nextChapter?.title
    .toLowerCase()
    .replace(" –", "")
    .split(" ")
    .join("-")
    .split("’")
    .join("")}`;

  return (
    <div className="flex flex-row gap-4 px-8">
      <Button
        variant={"secondary"}
        asChild={!!prevChapter}
        disabled={!prevChapter}
      >
        <Link prefetch={false} href={prevLink}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      <Select defaultValue={selected.title} onValueChange={handleChange}>
        <SelectTrigger className="flex flex-1">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="h-96">
            <SelectGroup>
              <SelectLabel>Select chapter you want to read</SelectLabel>
              {chapters.map((chapter: ChapterOption) => {
                return (
                  <SelectItem key={chapter.title} value={chapter.title}>
                    {chapter.title}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </ScrollArea>
        </SelectContent>
      </Select>
      <Button
        variant={"secondary"}
        asChild={!!nextChapter}
        disabled={!nextChapter}
      >
        <Link prefetch={false} href={nextLink}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default SelectChapter;
