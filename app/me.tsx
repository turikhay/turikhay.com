import { HTMLProps } from "react";
import Name from "./name";
import styles from "./me.module.css";

export default function Me(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={`${props.className ?? ""} ${styles.me}`}>
      <Name />
      <div className={styles.subtitle}>full stack developer, 25 years old</div>
    </div>
  );
}
