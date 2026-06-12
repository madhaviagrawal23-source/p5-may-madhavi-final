"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>Rotis/Puris</h1>
      <ul>
          <li>Wheat Roti</li>
          <li>Wheat Paratha</li>
          <li>Alu (potato) paratha</li>
          <li>Beets Roti/Paratha</li>
      </ul>
    </div>
  );
}
