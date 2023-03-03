import { HTMLProps } from "react";
import Name from "./name";
import styles from "./me.module.css";
import { AGE } from "./age";

export default function Me(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={`${props.className ?? ""} ${styles.me}`}>
      <Name />
      <div className={styles.subtitle}>
        full stack developer, {AGE} years old
      </div>
    </div>
  );
}
