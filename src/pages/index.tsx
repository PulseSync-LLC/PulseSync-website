import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Logo from "../../public/fullLogo.svg";
import { useState, useEffect } from "react";
import Stargazers from "../interfaces/stargazers.interface";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [stargazers, setStargazers] = useState<Stargazers[]>([]);

  useEffect(() => {
    async function fetchStargazers() {
      const response = await fetch("https://api.github.com/repos/PulseSync-Official/YMusic-DRPC/stargazers");
      const data = await response.json();
      setStargazers(data);
    }

    fetchStargazers();
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <span className="siteUrl">pulsesync.dev/<span className="siteRoute">HOME</span></span>
        <div className={styles.container}>
          <div className={styles.welcomeCase}>
            <div className={styles.case}>
              <Image src={Logo} alt="" />
              <div className={styles.inCaseContainer}>
                <span>PulseSync - это проект с открытым исходным кодом, который интегрируется с Яндекс Музыкой. Он поддерживает Discord RPC, пользовательские темы и скрипты, а также вскоре добавит возможность совместного прослушивания музыки.</span>
                <div className={styles.downloadCase}>
                  <div>Download</div>
                  <button>.exe</button>
                  <button>.dmg</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerCase}>
            <div className={styles.case}>
              <div className={styles.stargazersContainer}>
                Stargazers
                <div className={styles.avatarContainer}>
                  {stargazers.map((user) => (
                    <div key={user.id} className={styles.avatar}>
                      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        <Image src={user.avatar_url} alt={user.login} width={50} height={50} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.footerInfo}>
                <div className={styles.footerLinks}>
                  <span className={styles.infoLinks}>SOCIAL</span>
                  <div className={styles.links}>
                    <a href="https://discord.gg/qy42uGTzRy">Discord</a>
                    <a href="https://boosty.to/evt">Boosty</a>
                  </div>
                </div>
                <div className={styles.footerLinks}>
                  <span className={styles.infoLinks}>Policies</span>
                  <div className={styles.links}>
                    <a href="">Соглашение об использовании программы</a>
                  </div>
                </div>
                <div className={styles.footerLinks}>
                  <span className={styles.infoLinks}>Resources</span>
                  <div className={styles.links}>
                    <a href="https://github.com/PulseSync-Official/YMusic-DRPC">Github</a>
                    <a href="https://github.com/PulseSync-Official/YMusic-DRPC/wiki">Wiki</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
