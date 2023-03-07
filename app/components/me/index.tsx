import { HTMLProps } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./me.module.css";
import { AGE } from "./age";
import Name from "./name";

import yuki from "./yuki.png";
import yukiCircle from "./yuki_circle.png";

const yukiDescription = "Yuki (my profile picture)";

export default function Me(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={`${props.className ?? ""} ${styles.me}`}>
      <Link href={yuki.src} target="_blank" title={yukiDescription}>
        <Image
          src={yukiCircle}
          width={64}
          height={64}
          className={`${styles.pfp}`}
          alt={yukiDescription}
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
