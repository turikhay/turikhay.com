import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { AGE } from "./components/me/age";
import {
  DiscordIcon,
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  MastodonIcon,
  TelegramIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "./components/icons/fontawesome";
import Loading from "./components/loading";
import Me from "./components/me";
import styles from "./page.module.css";
import { SVGElementProps } from "./components/icons/common";
import { Metadata } from "next";

const Canvas = dynamic(() => import("./components/canvas"), {
  ssr: false,
  loading: () => <Loading />,
});

const font = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Artur Khusainov (@turikhay)",
  description: `Full stack developer, ${AGE} years old. Personal home page of Artur Khusainov (@turikhay)`,
  openGraph: {
    type: "profile",
    firstName: "Artur",
    lastName: "Khusainov",
    username: "turikhay",
    images: "/yuki.jpg",
  },
};

export default function Home() {
  return (
    <main className={`${font.className} ${styles.main}`}>
      <div className={`${styles.column} ${styles.me}`}>
        <Me />
      </div>
      <div className={`${styles.column} ${styles.content}`}>
        <Me className={`${styles.me}`} />
        <div className={`${styles.section}`}>
          <h2>Contact details</h2>
          <ul>
            <Li
              text="Telegram"
              url="https://t.me/turikhay"
              icon={TelegramIcon}
            />
            <Li
              text="Discord"
              url="https://discord.com/users/132131558067798016"
              icon={DiscordIcon}
            />
            <Li text="Email" url="mailto:me@turikhay.com" icon={EmailIcon} />
            <Li
              text="WhatsApp"
              url="https://wa.me/+79656415489"
              icon={WhatsAppIcon}
            />
            <Li
              text="GitHub"
              url="https://github.com/turikhay"
              icon={GitHubIcon}
            />
          </ul>
        </div>
        <div className={`${styles.section}`}>
          <h2>Notable links</h2>
          <ul>
            <Li lang="ru" text="Я смотрю TikTok" url="https://t.me/s/ya_smotryu_tiktok" />
          </ul>
        </div>
        <div className={`${styles.section}`}>
          <h2>Social media</h2>
          <ul>
            <Li
              text="Twitch"
              url="https://twitch.tv/turikhay"
              icon={TwitchIcon}
            />
            <Li
              text="Twitter"
              url="https://twitter.com/turikhay"
              icon={TwitterIcon}
            />
            <Li
              me
              text="Mastodon"
              url="https://mas.to/@turikhay"
              icon={MastodonIcon}
            />
            <Li
              text="Instagram"
              url="https://instagram.com/turikhay"
              icon={InstagramIcon}
            />
            <Li
              text="TikTok"
              url="https://www.tiktok.com/@turikhay"
              icon={TikTokIcon}
            />
            <Li
              text="YouTube"
              url="https://youtube.com/@turikhay"
              icon={YouTubeIcon}
            />
          </ul>
        </div>
        <div className={`${styles.section} ${styles.attributions}`}>
          <noindex>
            <h2>Attributions</h2>
            <div className={styles.element}>
              Do you recognize the cat? Her name was Jess. Unfortunately, she{" "}
              <a href="https://kotaku.com/maxwell-spinning-cat-explain-real-name-jess-garys-mod-1850142446#:~:text=%20jess%20aka%20maxwell%E2%80%99s%20owner%2C%20voidhawk%2C%20has%20sadly%20shared%20the%20news%20with%20kotaku%20that%20the%20famous%20cat%20passed%20away%20in%20early%202020.">
                passed away in early 2020
              </a>
              .{" "}
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
              . The website in turn is licensed under GPLv3 and the source code
              is available at{" "}
              <a
                href="https://github.com/turikhay/turikhay.com"
                target="_blank"
              >
                my GitHub
              </a>
              .
            </div>
          </noindex>
        </div>
      </div>
      <div className={`${styles.column} ${styles.canvas}`}>
        <div className={`${styles.canvasWrapper}`}>
          <Canvas />
        </div>
      </div>
    </main>
  );
}

type IconFactory = (props: SVGElementProps) => JSX.Element;

function Li({
  text,
  url,
  icon,
  me,
  lang,
}: {
  text: string;
  url: string;
  icon?: IconFactory;
  me?: true;
  lang?: string;
}) {
  return (
    <li
      className={`${styles.element} ${styles.flex} ${icon ? styles.logo : ""}`}
    >
      <a href={url} rel={me ? "me" : undefined} target="_blank">
        <>
          {icon ? (
            <>
              {icon({
                width: "1.5rem",
                height: "1.5rem",
                className: styles.logo,
              })}{" "}
            </>
          ) : (
            <></>
          )}
          <span className={styles.text} lang={lang}>
            {text}
          </span>
        </>
      </a>
    </li>
  );
}
