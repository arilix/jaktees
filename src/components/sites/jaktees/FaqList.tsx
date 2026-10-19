"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "./data";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const Icon = isOpen ? Minus : Plus;
        return (
          <li
            key={faq.q}
            className="border-brutal-thick shadow-brutal bg-background"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span itemProp="name" className="text-display text-xl md:text-2xl leading-tight">
                {faq.q}
              </span>
              <Icon size={24} className="shrink-0" aria-hidden="true" />
            </button>
            {isOpen && (
              <div
                className="border-t-[3px] border-foreground px-5 py-4"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text" className="text-base md:text-lg leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
