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
  nameText: string;
  flag?: SVGIconFactory | undefined;
};

const VARIANTS: ReadonlyArray<Variant> = [
  {
    lang: {
      name: "English",
      code: "en",
    },
    name: <>Ar&shy;tur Khu&shy;sa&shy;inov</>,
    nameText: "Artur Khusainov",
  },
  {
    lang: {
      name: "Tatar",
      code: "tt",
    },
    name: <>Ар&shy;тур Хө&shy;сә&shy;енов</>,
    nameText: "Артур Хөсәенов",
    flag: TatarstanFlag,
  },
  {
    lang: {
      name: "Russian",
      code: "ru",
    },
    name: <>Ар&shy;тур Ху&shy;са&shy;инов</>,
    nameText: "Артур Хусаинов",
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
    <button
      className={`${styles.button} ${styles.name} ${
        selectBlocked ? styles.selectBlocked : ""
      }`}
      aria-live="assertive"
      aria-label={`My name in ${variant.lang.name}: ${variant.nameText}. Click to toggle language.`}
      title={`My name in ${variant.lang.name}: ${variant.nameText}`}
      onClick={() => {
        setIndex(index + 1);
        setSelectBlocked(true);
      }}
    >
      <span lang={variant.lang.code}>{variant.name}</span>
      {variant.flag ? (
        <div className={styles.flag} aria-hidden={true}>
          {variant.flag({})}
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
