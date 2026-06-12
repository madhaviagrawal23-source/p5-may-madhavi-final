"use client";

import { useState } from "react";

import { title } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <div>
      <h1 className={title()}>Home</h1>
      <h1>
        This is the Ultimate (Indian) Home Cookbook from which you find the best
        recipies on what to make on the random friday night. All the recipes are
        eggless and vegetarian. From baked goods, to dishes that you&apos;ll
        love from all over the world, as well as classic staples, this is the
        best cookbook for you (especially as an Indian). Although this
        doesn&apos;t have all the recipies yet, they will be added over time.
        Save this page for the next time you decide to cook something!
      </h1>
    </div>
  );
}
