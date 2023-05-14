import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";


const page = () => {
  

  return (
    <section className="container grid grid-cols-3 lg:grid-rows-1 grid-rows-2 items-center pb-8 pt-6 md:py-10">
      <div className="lg:col-span-2 col-span-3">
        <h1 className="text-3xl text-center lg:text-start font-extrabold leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
          Hello, my name is <br /> Riza Kurniawanda
        </h1>
        <p className="lg:max-w-[700px] max-w-full pt-4 text-center lg:text-start text-lg text-muted-foreground sm:text-xl">
          I am a Web Developer who is currently lived in Palangkaraya,
          Indonesia.
        </p>
        <p className="lg:max-w-[700px] max-w-full text-center lg:text-start text-lg text-muted-foreground sm:text-xl">
          Working remotely for Xeratic.
        </p>
      </div>
      <div className="col-span-1 col-start-2 lg:col-start-3">
        <AspectRatio ratio={1} className="bg-muted">
          <Image
            src="/images/newProfile.jpg"
            alt="Photo Profile"
            fill
            className="rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default page;
