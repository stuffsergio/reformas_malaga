"use client";

import { useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  label,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
}) {
  const [value, setValue] = useState(56);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
      <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <img src={before} alt={beforeAlt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">
        Antes
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
        Después
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label={label}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-x-6 bottom-4 h-2 w-[calc(100%-3rem)] cursor-pointer"
      />
    </div>
  );
}
