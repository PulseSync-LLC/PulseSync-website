import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Logo from "../../public/fullLogo.svg";
import Welcome from "../../public/img/1.png";
import Addons from "../../public/img/addons.png";
import Build from "../../public/img/build.svg";
import { useState, useEffect } from "react";
import Stargazers from "../interfaces/stargazers.interface";

import { MdDownload } from 'react-icons/md'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [stargazers, setStargazers] = useState<Stargazers[]>([]);

  useEffect(() => {
    async function fetchStargazers() {
      let currentPage = 1;
      let allStargazers: any[] | ((prevState: Stargazers[]) => Stargazers[]) = [];
      while (true) {
        const response = await fetch(`https://api.github.com/repos/PulseSync-Official/YMusic-DRPC/stargazers?page=${currentPage}`);
        if (!response.ok) {
          break;
        }
        const data = await response.json();
        if (data.length === 0) {
          break;
        }
        allStargazers = [...allStargazers, ...data];
        currentPage++;
      }
      setStargazers(allStargazers);
    }

    fetchStargazers();
  }, []);

  return (
    <>
      <div className="mainContainer">
        <div className={styles.nav}>
          <div className={styles.headerSizeble}>
            <a href="/"><Image src={Logo} quality={100} unoptimized alt="" /><div className={styles.beta}>Beta</div></a>
            <div className={styles.nav_links}>
              <a href="https://github.com/PulseSync-Official/YMusic-DRPC">Github</a>
              <a href="https://github.com/PulseSync-Official/YMusic-DRPC/wiki">Wiki</a>
            </div>
          </div>
        </div>
        <div className={styles.welcomeCase}>
          <div className={styles.welcomeCaseSizeble}>
            <Image src={Welcome} width={435} height={274} unoptimized alt="" />
            <div className={styles.inCaseContainer}>
              <h1>Музыка по-новому!</h1>
              <h2>PulseSync - это проект с открытым клиентским исходным кодом, который интегрируется с Яндекс Музыкой. Он поддерживает Discord RPC, пользовательские темы и скрипты.</h2>
              <button className={styles.downloadButton}><MdDownload size={22} />Скачать для Windows</button>
            </div>
          </div>
        </div>
        <div className={styles.contentCase}>
          <div className={styles.contentCaseSizeble}>
            <div className={styles.contentCaseContainer}>
              <h1>Как насчёт аддонов! (Скоро)</h1>
              <h2>У вас есть возможность настроить внешний вид и функциональность так, как вам удобно. Создавайте собственные аддоны, добавляя уникальные визуальные и функциональные элементы. Если вы не хотите создавать собственные, вы можете загрузить готовые решения от других пользователей и разработчиков на сервере Discord.</h2>
            </div>
            <Image src={Addons} quality={100} width={524} height={259} unoptimized alt="" />
          </div>
        </div>
        <div className={`${styles.contentCase} ${styles.futuresBackground}`}>
          <div className={styles.contentCaseSizeble}>
            <Image src={Build} quality={100} width={165} height={165} unoptimized alt="" />
            <div className={styles.contentCaseContainer}>
              <h1>Что в планах!</h1>
              <h2>
                Как только приложение обретет большое сообщество, мы добавим новый
                функционал. Например:
                <ul>
                  <li>
                    Профили: Возможность делиться статистикой прослушанных часов, своими
                    плейлистами и, если вы разработчик, своими аддонами.
                  </li>
                  <li>
                    Магазин с аддонами: Легко находите и устанавливайте дополнительные
                    функции и темы.
                  </li>
                  <li>
                    Совместное прослушивание музыки: Приглашайте друзей и слушайте музыку
                    вместе в реальном времени.
                  </li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
        <div className={`${styles.contentCase} ${styles.stargazersBackground}`}>
          <div className={styles.contentCaseSizeble}>
            <div className={styles.stargazersContainer}>
              Спасибо звездочётам с GitHub
              <div className={styles.avatarContainer}>
                {stargazers.map((user) => (
                  <div key={user.id} className={styles.avatar}>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                      <Image src={user.avatar_url} alt={user.login} width={55} height={55}/>
                      <span>{user.login}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.footerCase}`}>
          <div className={styles.footerInfo}>
            <div className={styles.footerLinks}>
              <span className={styles.infoLinks}>СОЦИАЛЬНЫЕ СЕТИ</span>
              <div className={styles.links}>
                <a href="https://discord.gg/qy42uGTzRy">Discord</a>
                <a href="https://boosty.to/evt">Boosty</a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <span className={styles.infoLinks}>Политика</span>
              <div className={styles.links}>
                <a href="">Соглашение об использовании программы</a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <span className={styles.infoLinks}>Ресурсы</span>
              <div className={styles.links}>
                <a href="https://github.com/PulseSync-Official/YMusic-DRPC">Github</a>
                <a href="https://github.com/PulseSync-Official/YMusic-DRPC/wiki">Wiki</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
