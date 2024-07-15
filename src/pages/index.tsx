import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Welcome from "../../public/img/1.png";
import Addons from "../../public/img/addons.png";
import Build from "../../public/img/build.svg";
import { useState, useEffect } from "react";
import Stargazers from "../interfaces/stargazers.interface";
import { useTranslation } from 'next-i18next'
import { MdTimer } from 'react-icons/md';
import Header from "@/components/header";
import {Footer} from "@/components/footer";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
    const { t, ready } = useTranslation('common');
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
                <Header />
                <div className={styles.welcomeCase}>
                    <div className={styles.welcomeCaseSizeble}>
                        <Image src={t('pages.index.img_path')} width={500} height={300} unoptimized alt="" />
                        <div className={styles.inCaseContainer}>
                            <h1>{t('pages.index.welcome_title')}</h1>
                            <h2>{t('pages.index.welcome_description')}</h2>
                            <button className={styles.downloadButton} disabled><MdTimer size={22} />{t('pages.index.coming_soon')}</button>
                        </div>
                    </div>
                </div>
                <div className={styles.contentCase}>
                    <div className={styles.contentCaseSizeble}>
                        <div className={styles.contentCaseContainer}>
                            <h1>{t('pages.index.addons_title')}</h1>
                            <h2>{t('pages.index.addons_description')}</h2>
                        </div>
                        <Image src={Addons} quality={100} width={524} height={259} unoptimized alt="" />
                    </div>
                </div>
                <div className={`${styles.contentCase} ${styles.futuresBackground}`}>
                    <div className={styles.contentCaseSizeble}>
                        <Image src={Build} quality={100} width={165} height={165} unoptimized alt="" />
                        <div className={styles.contentCaseContainer}>
                            <h1>{t('pages.index.plans_title')}</h1>
                            <h2>
                                {t('pages.index.plans_description')}
                                <ul>
                                    <li>{t('pages.index.plans_list_1')}</li>
                                    <li>{t('pages.index.plans_list_2')}</li>
                                    <li>{t('pages.index.plans_list_3')}</li>
                                </ul>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={`${styles.contentCase} ${styles.stargazersBackground}`}>
                    <div className={styles.contentCaseSizeble}>
                        <div className={styles.stargazersContainer}>
                            {t('pages.index.stargazers_thankyou')}
                            <div className={styles.avatarContainer}>
                                {stargazers.map((user) => (
                                    <div key={user.id} className={styles.avatar}>
                                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                            <Image src={user.avatar_url} alt={user.login} width={55} height={55} />
                                            <span>{user.login}</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

// @ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
            // Will be passed to the page component as props
        },
    }
}
