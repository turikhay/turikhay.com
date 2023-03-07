"use client";

import { useEffect, useState } from "react";
import styles from "./name.module.css";

type Variant = {
  lang: string;
  name: string;
};

const VARIANTS: ReadonlyArray<Variant> = [
  { lang: "English", name: "Artur Khusainov" },
  { lang: "Tatar", name: "Артур Хөсәенов" },
  { lang: "Russian", name: "Артур Хусаинов" },
] as const;

export default function Name() {
  const [selectBlocked, setSelectBlocked] = useState(false);
  const [index, setIndex] = useState(0);
  const variant = VARIANTS[index % VARIANTS.length];

  useEffect(() => {
    const t = setTimeout(() => setSelectBlocked(false), 1000);
    return () => clearTimeout(t);
  });

  return (
    <>
      <h1
        className={`${styles.name} ${
          selectBlocked ? styles.selectBlocked : ""
        }`}
        tabIndex={0}
        role="button"
        onClick={() => {
          setIndex(index + 1);
          setSelectBlocked(true);
        }}
        title={`My name in ${variant["lang"]}`}
      >
        {variant.name}
      </h1>
    </>
  );
}
