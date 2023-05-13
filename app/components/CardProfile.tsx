import { Mail, Instagram, Github, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type CardProps = React.ComponentProps<typeof Card>;
type MediaSocialProp = {
  link: string;
  icon: JSX.Element;
  name: string;
};

const MySocialMedia = [
  {
    name: "Github",
    icon: <Github className="h-6 w-6" />,
    link: "https://github.com/riza1999",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    link: "https://instagram.com/riza__11",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    link: "https://linkedin.com/rizakurniawanda",
  },
] satisfies MediaSocialProp[];

export function CardProfile({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl text">Riza Kurniawanda</CardTitle>
        <CardDescription>Web Developer</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative w-[330px] h-[330px]">
          <Image
            src={"/images/newProfile.jpg"}
            alt="Profile image"
            className="rounded-md object-cover"
            fill
          />
        </div>
        <div className="text-center grid gap-2">
          <span>rizakurniawanda@icloud.com</span>
          <span>Palangkaraya, Indonesia</span>
          <small className="text-muted-foreground">
            Copyright 2023 Riza. All Rights Reserved
          </small>
          <div className="flex justify-center gap-2">
            {MySocialMedia.map((item) => (
              <MediaSocial key={item.name} {...item} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      </CardFooter>
    </Card>
  );
}

function MediaSocial({ name, link, icon }: MediaSocialProp) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="border inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-12 w-12 px-0 rounded-full">
        {icon}
        <span className="sr-only">{name}</span>
      </div>
    </a>
  );
}
