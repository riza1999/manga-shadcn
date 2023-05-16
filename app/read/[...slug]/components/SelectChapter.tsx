'use client'
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

const SelectChapter = ({
  selected,
  chapters,
}: {
  selected: ChapterOption;
  chapters: ChapterOption[];
}) => {
  return (
    <div className="flex flex-row gap-4">
      <Button variant={"secondary"} asChild>
        <Link href={``}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      <Select defaultValue={selected.title}>
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
      <Button variant={"secondary"} asChild>
        <Link href={``}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default SelectChapter;
