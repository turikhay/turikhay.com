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
  const [requestedExpandedImage, setRequestedExpandedImage] = useState(false);
  const [expandedImageLoaded, setExpandedImageLoaded] = useState(false);
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
        title="My profile picture"
        type="button"
        aria-expanded={expanded}
        onClick={() => {
          const nextExpanded = !expanded;
          if (nextExpanded && !requestedExpandedImage) {
            setRequestedExpandedImage(true);
          }
          setExpanded(nextExpanded);
          if (ref.current) {
            const classList = ref.current.classList;
            if (nextExpanded) {
              classList.remove(styles.collapsed);
            } else {
              classList.add(styles.collapsed);
            }
          }
        }}
      >
        <div
          className={`${styles.pfp_frame} ${styles.animated}`}
          style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
        >
          <Image
            src={photo}
            fill
            aria-hidden={true}
            className={styles.pfp}
            alt={photoAlt}
            sizes="(max-width: 400px) 50vw, 128px"
          />
          {requestedExpandedImage ? (
            <Image
              src={photo}
              fill
              aria-hidden={true}
              className={`${styles.pfp} ${styles.pfp_overlay} ${
                expanded && expandedImageLoaded ? styles.visible : ""
              }`}
              alt={photoAlt}
              loading="eager"
              onLoad={() => setExpandedImageLoaded(true)}
              sizes="(max-width: 400px) calc(100vw - 2rem), (max-width: 700px) calc(100vw - 4rem), 34rem"
            />
          ) : null}
        </div>
      </button>
      <div className={`${styles.text}`} ref={ref}>
        <Name />
        <div className={styles.subtitle}>
          <span aria-hidden={true}>aka</span> @turikhay (he/him), full stack
          developer, {AGE} years old
        </div>
      </div>
    </div>
  );
}
