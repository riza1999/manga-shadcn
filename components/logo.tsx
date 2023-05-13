"use client";
import Typewriter from "typewriter-effect";

const logo = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Riza Kurniawanda").start();
      }}
    />
  );
};

export default logo;
