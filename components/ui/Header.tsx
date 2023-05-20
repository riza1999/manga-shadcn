import { MoonIcon, SunIcon } from "lucide-react";
import { MainNav } from "./MainNav";
import { Input } from "./input";
import { Button } from "./button";

type HeaderProps = {
  darkMode: Boolean;
  toggleDarkMode: any;
};

export function Header({ toggleDarkMode, darkMode }: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <MainNav />
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button>Search</Button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="focus:outline-none hover:bg-accent p-2 rounded-md"
          >
            {darkMode ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
