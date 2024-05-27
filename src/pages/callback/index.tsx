import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Callback.module.scss";

import ImgConnect from "../../../public/authAssest/Connect.svg";
import ImgErrorConnect from "../../../public/authAssest/ErrorConnect.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="mainContainer">
                <span className="siteUrl">pulsesync.dev/<span className="siteRoute">callback</span></span>
                <div className={styles.container}>
                    <div className={styles.case}>
                        <div className={styles.backgroundContainer}>
                            <img className={styles.userAvatar} src="http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44835662%3Fv%3D4&w=64&q=75" alt="" />
                            <Image className={styles.imgStatus} src={ImgConnect} alt="" />
                            <span>Вы авторизированны вернитесь в приложение</span>
                            <img className={styles.backgroundImg} src="http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44835662%3Fv%3D4&w=64&q=75" alt="" />
                            <div className={styles.background}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
