"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={handleClick} className="fixed bottom-3 right-4 p-3">
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};
