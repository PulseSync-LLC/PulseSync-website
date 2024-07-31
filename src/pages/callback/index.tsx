import Image from "next/image";
import styles from "@/styles/Callback.module.scss";
import {Trans, useTranslation} from 'next-i18next';
import ErrorConnect from "../../../public/assets/authAssest/ErrorConnect.svg";
import ImgConnect from "../../../public/assets/authAssest/Connect.svg";
import Logo from "../../../public/assets/fullLogo.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import UserInterface from "@/api/interface/user.interface";
import UserInitials from "@/api/interface/user.initials";
import config from "@/api/config";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout'

export default function Callback() {
    const router = useRouter();
    const [user, setUser] = useState<UserInterface>(UserInitials);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isBeta, setBeta] = useState(false);
    const { t } = useTranslation('common');

    const getUser = async () => {
        if (router.query.token && router.query.id) {
            const res = await fetch(`${config.SERVER_URL}/user/${router.query.id}`);
            if (!res.ok) return setError(true);
            const j = await res.json();
            setUser(j.user);
        } else {
            return setError(true);
        }
    };

    const checkIsBeta = async (id: string) => {
        const res = await fetch(`${config.SERVER_URL}/api/v1/user/${id}/access`);
        if (res.ok) {
            const data = await res.json();
            if (data.access) {
                setBeta(true);
                await router.push(`pulsesync://callback?token=${router.query.token}&id=${router.query.id}`);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        if (router.isReady) getUser();
    }, [router.isReady]);

    useEffect(() => {
        if (user.id !== "-1") {
            checkIsBeta(user.id);
        }
    }, [router, user]);

    useEffect(() => {
        if (user.id !== "-1" && user.ban) {
            router.push(`pulsesync://ban`);
        }
    }, [router, user]);

    return (
        <Layout title="Callback" disableNavbar disableFooter>
            <div className="mainContainer">
                <div className={styles.container}>
                    <div className={styles.case}>
                        <div>
                            <div className={styles.logoPlace}>
                                <Image src={Logo} alt={""} />
                            </div>
                            <div className={styles.containerBG}>
                                {!loading ? (
                                    <div className={styles.backgroundContainer}>
                                        <img className={styles.backgroundImg}
                                            src={user.avatar}
                                            alt="" />
                                        {!user.ban && isBeta && (
                                            !error ? <Image className={styles.imgStatus} src={ImgConnect} alt="" /> : <Image className={styles.imgStatus} src={ErrorConnect} alt="" />
                                        )}
                                        <div>
                                            <span>{user.ban ? t("components.errors.ban") : !isBeta ? t("components.errors.noBeta") : null}</span>
                                            <span>{error ? t("components.errors.error") : user.ban ? t("components.errors.forbiddenBan") : !isBeta ? t("components.errors.forbidden") : t("pages.callback.auth.success")}</span>
                                        </div>
                                        {!isBeta && !user.ban ? (
                                            <p className={styles.alert}>
                                                <Trans i18nKey="pages.callback.auth.no_beta" components={{ 1: <a className={styles.boosty} target="_blank" rel="noopener noreferrer" href="https://boosty.to/evt"></a>, 3: <a className={styles.discord} target="_blank" rel="noopener noreferrer" href="https://discord.gg/qy42uGTzRy"></a> }} />
                                            </p>
                                        ) : null}
                                        {user.ban ? <p className={styles.alert}>{t("components.errors.banReason")} {user.ban.reason}</p> : null}
                                    </div>
                                ) : (
                                    <div className={styles.backgroundContainer}>
                                        <Skeleton
                                            className={styles.backgroundImg}
                                            borderRadius={500}
                                            width={88}
                                            height={88}
                                        />
                                        <div>
                                            <Skeleton
                                                className={styles.backgroundImg}
                                                width={182}
                                                height={27}
                                            />
                                            <Skeleton
                                                className={styles.backgroundImg}
                                                width={121}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
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
