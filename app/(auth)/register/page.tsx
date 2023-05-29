import React from "react";
import RegisterForm from "./components/RegisterForm";

const page = () => {
  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start pb-8 pt-6 md:py-10">
        <h3 className="text-3xl text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          Register
        </h3>
        <div className="flex justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default page;
