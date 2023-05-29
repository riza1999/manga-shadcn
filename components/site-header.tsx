"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "./ui/input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NavigationMenuDemo from "./header/NavMenu";
import NavDropdownMenu from "./header/NavMenu";

export function SiteHeader() {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const tSearchQ = searchParams.get("tSearch") ?? "";

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

  const [tSearch, setTSearch] = useState<string>(tSearchQ);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTSearch(e.target.value);

  const handleClick = () => {
    router.push("/search" + "?" + createQueryString("tSearch", tSearch));
  };

  useEffect(() => {
    setTSearch(tSearchQ);
  }, [tSearchQ]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex gap-0 md:gap-8 h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 w-[500] items-center justify-end space-x-4">
          <Input
            value={tSearch}
            onChange={handleChange}
            type="text"
            placeholder="Search . . ."
            onKeyDown={(e) => (e.key === "Enter" ? handleClick() : "")}
          />
          <Button onClick={handleClick}>Search</Button>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Link href={'/login'}>Login</Link>
          {/* <NavDropdownMenu /> */}
        </div>
      </div>
    </header>
  );
}
