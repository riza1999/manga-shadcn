import EmailSent from "@/components/storyset/emailSent";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="container max-w-md mx-auto justify-center items-center flex flex-col min-h-screen">
        <h3 className="text-3xl text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          Register Success
        </h3>
        <p className="text-xl mt-2">Please check your inbox</p>
        <EmailSent />
        <Link className="underline" href={'/login'}>Back to Login Page</Link>
      </section>
    </>
  );
};

export default page;
