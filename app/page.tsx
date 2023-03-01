import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Loading from "./loading";
import Name from "./name";
import styles from "./page.module.css";

const Canvas = dynamic(() => import("./canvas"), {
  ssr: false,
  loading: () => <Loading />,
});

const font = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Artur Khusainov (@turikhay)",
  description: "full stack developer, 25 years old",
};

export default function Home() {
  return (
    <main className={`${font.className} ${styles.main}`}>
      <div className={styles.me}>
        <Name />
        <div>full stack developer, 25 years old</div>
      </div>
      <div className={styles.canvasWrapper}>
        <div className={styles.canvasContent}>
          <Canvas />
        </div>
      </div>
      <div className={`${styles.section} ${styles.contact}`}>
        <h2>Contact details</h2>
        <ul>
          <li className={styles.sectionElem}>
            <a href="https://t.me/turikhay">Telegram</a>
          </li>
          <li className={styles.sectionElem}>
            <a
              href="https://discordapp.com/users/132131558067798016"
              target="_blank"
            >
              Discord
            </a>
          </li>
          <li className={styles.sectionElem}>
            <a href="mailto:me@turikhay.com">Email</a>
          </li>
          <li className={styles.sectionElem}>
            <a href="https://github.com/turikhay">GitHub</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.section} ${styles.links}`}>
        <h2>Notable links</h2>
        <ul>
          <li className={styles.sectionElem}>
            <a href="https://t.me/s/ya_smotryu_tiktok">Я смотрю TikTok</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.section} ${styles.socialmedia}`}>
        <h2>Social media</h2>
        <ul>
          <li className={styles.sectionElem}>
            <a href="https://twitch.tv/turikhay">Twitch</a>
          </li>
          <li className={styles.sectionElem}>
            <a href="https://twitter.com/turikhay">Twitter</a>
          </li>
          <li className={styles.sectionElem}>
            <a rel="me" href="https://social.vivaldi.net/@turikhay">
              Mastodon
            </a>
          </li>
          <li className={styles.sectionElem}>
            <a href="https://instagram.com/turikhay">Instagram</a>
          </li>
          <li className={styles.sectionElem}>
            <a href="https://www.tiktok.com/@turikhay">TikTok</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.section} ${styles.attributions}`}>
        <noindex>
          <h2>Attributions</h2>
          <div className={styles.sectionElem}>
            Do you recognize the cat? His name is Maxwell (actually, Jess).{" "}
            <a
              href="https://sketchfab.com/3d-models/dingus-the-cat-2ca7f3c1957847d6a145fc35de9046b0"
              target="_blank"
            >
              The model
            </a>{" "}
            is made by{" "}
            <a href="https://sketchfab.com/alwayshasbean" target="_blank">
              bean (alwayshasbean)
            </a>{" "}
            and is licensed under{" "}
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
            >
              Creative Commons Attribution
            </a>
            . The website in turn is licensed under GPLv3 and the source code is
            available at{" "}
            <a href="https://github.com/turikhay/turikhay.com" target="_blank">
              my GitHub
            </a>
            .
          </div>
        </noindex>
      </div>
    </main>
  );
}
