"use client";

import { HTMLProps, useRef, useState } from "react";
import Image from "next/image";

import styles from "./index.module.css";
import { AGE } from "./age";
import Name from "./name";

import photo from "./P1020667-crop.jpg";

const photoAlt = "Picture of Artur Khusainov";

export default function Me(props: HTMLProps<HTMLDivElement>) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div
      {...props}
      className={`${props.className ?? ""} ${styles.me} ${styles.animated} ${
        expanded ? styles.expanded : ""
      }`}
    >
      <button
        className={`${styles.pfp_button} ${styles.animated}`}
        onClick={() => {
          setExpanded(!expanded);
          if (ref.current) {
            const classList = ref.current.classList;
            if (!expanded) {
              classList.remove(styles.collapsed);
            } else {
              classList.add(styles.collapsed);
            }
          }
        }}
      >
        <Image
          src={photo}
          className={`${styles.pfp} ${styles.animated}`}
          alt={photoAlt}
        />
      </button>
      <div className={`${styles.text}`} ref={ref}>
        <Name />
        <div className={styles.subtitle}>
          aka @turikhay (he/him), full stack developer, {AGE} years old
        </div>
      </div>
    </div>
  );
}
