"use client";
import Typewriter from "typewriter-effect";

const logo = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("bacakomik").start();
      }}
    />
  );
};

export default logo;
