import { HTMLProps } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import { AGE } from "./age";
import Name from "./name";

import yuki from "./yuki.png";

const yukiDescription = "Yuki (my profile picture)";
const imageSize = 64;

export default function Me(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={`${props.className ?? ""} ${styles.me}`}>
      <Link href={yuki.src} target="_blank" title={yukiDescription}>
        <Image
          src={yuki}
          width={imageSize}
          height={imageSize}
          className={`${styles.pfp}`}
          alt={yukiDescription}
          style={{ borderRadius: `${Math.round(imageSize / 2)}px` }}
        />
      </Link>
      <div className={`${styles.text}`}>
        <Name />
        <div className={styles.subtitle}>
          aka @turikhay, full stack developer, {AGE} years old
        </div>
      </div>
    </div>
  );
}
