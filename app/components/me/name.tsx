"use client";

import { useEffect, useState, ReactElement } from "react";
import { SVGIconFactory } from "../icons/common";
import { RussianFlag, TatarstanFlag } from "../icons/flags";
import styles from "./name.module.css";

type Variant = {
  lang: {
    name: string;
    code: string;
  };
  name: ReactElement;
  flag?: SVGIconFactory | undefined;
};

const VARIANTS: ReadonlyArray<Variant> = [
  {
    lang: {
      name: "English",
      code: "en",
    },
    name: <>Ar&shy;tur Khu&shy;sa&shy;inov</>,
  },
  {
    lang: {
      name: "Tatar",
      code: "tt",
    },
    name: <>Ар&shy;тур Хө&shy;сә&shy;енов</>,
    flag: TatarstanFlag,
  },
  {
    lang: {
      name: "Russian",
      code: "ru",
    },
    name: <>Ар&shy;тур Ху&shy;са&shy;инов</>,
    flag: RussianFlag,
  },
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
        title={`My name in ${variant.lang.name}`}
      >
        <span lang={variant.lang.code}>{variant.name}</span>
        {variant.flag ? (
          <div className={styles.flag}>{variant.flag({})}</div>
        ) : (
          <></>
        )}
      </h1>
    </>
  );
}
