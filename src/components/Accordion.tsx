"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={item.q} className={`acc__item${isOpen ? " is-open" : ""}`}>
            <h3 className="acc__title">
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-btn`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="acc__icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="acc__panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`}>
              <div className="acc__inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
