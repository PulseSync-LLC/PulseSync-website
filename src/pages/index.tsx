import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Addons from "../../public/assets/img/addons.png";
import plannedRU from "../../public/assets/img/plannedRU.svg";
import Monitor from "../../public/assets/img/monitor.png";
import { useState, useEffect } from "react";
import Stargazers from "../interfaces/stargazers.interface";
import { useTranslation } from 'next-i18next'
import { MdTimer } from 'react-icons/md';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout'


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
        <Layout title="Главная">
            <div className={styles.mainContainer}>
                <section className={styles.welcomeSection}>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.textContainer}>
                            <h1>{t('pages.index.welcome_title')}</h1>
                            <h2>{t('pages.index.welcome_description')}</h2>
                            <button className={styles.downloadButton} disabled>
                                <MdTimer size={22} />
                                {t('pages.index.coming_soon')}
                            </button>
                        </div>
                        <Image className={styles.mediaVideo} src={Monitor} style={{ pointerEvents: 'none' }} alt={"Monitor"} />
                    </div>
                </section>
                <section className={styles.contentSection}>
                    <div className={styles.sectionWrapper}>
                        <Image src={Addons} quality={100} width={524} height={259} unoptimized alt="" />
                        <div className={styles.textContainer}>
                            <h1>{t('pages.index.addons_title')}</h1>
                            <h2>{t('pages.index.addons_description')}</h2>
                        </div>
                    </div>
                </section>
                <section className={`${styles.contentSection} ${styles.futuresBackground}`}>
                    <div className={styles.sectionWrapper}>
                        <Image src={plannedRU} quality={100} unoptimized alt="" />
                    </div>
                </section>
                <section className={`${styles.contentSection} ${styles.stargazersBackground}`}>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.stargazersContainer}>
                            {t('pages.index.stargazers_thankyou')}
                            <div className={styles.avatarContainer}>
                                {stargazers.map((user) => (
                                    <div key={user.id} className={styles.avatar}>
                                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                            <Image src={user.avatar_url} alt={user.login} width={1024} height={1024} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
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
