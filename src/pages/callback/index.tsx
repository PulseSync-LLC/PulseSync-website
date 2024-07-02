import Image from "next/image";
import styles from "@/styles/Callback.module.scss";

import ErrorConnect from "../../../public/authAssest/ErrorConnect.svg";
import ImgConnect from "../../../public/authAssest/Connect.svg";
import Logo from "../../../public/fullLogo.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserInterface from "@/api/interface/user.interface";
import UserInitials from "@/api/interface/user.initials";
import config from "@/api/config";

export default function Callback() {
    const router = useRouter();
    const [user, setUser] = useState<UserInterface>(UserInitials);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isBeta, setBeta] = useState(false);

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
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        if (router.isReady) getUser();
    }, [router.isReady]);

    useEffect(() => {
        if (user.id !== "-1") {
            checkIsBeta(user.id);
            router.push(`pulsesync://callback?token=${router.query.token}`);
        }
    }, [router, user]);

    return (
        <>
            <div className="mainContainer">
                <div className={styles.container}>
                    <div className={styles.case}>
                        <div>
                            <div className={styles.logoPlace}>
                                <Image src={Logo} alt={""} />
                            </div>
                            <div className={styles.containerBG}>
                                <div className={styles.backgroundContainer}>
                                    <img className={styles.backgroundImg}
                                         src={user.avatar}
                                         alt="" />
                                    {!user.ban && isBeta && (
                                        !error ? <Image className={styles.imgStatus} src={ImgConnect} alt="" /> : <Image className={styles.imgStatus} src={ErrorConnect} alt="" />
                                    )}
                                    <div>
                                        <span>{user.ban ? "Походу вы в бане!" : !isBeta ? "Вы не бета тестер" : null}</span>
                                        <span>{error ? "Что-то пошло не так" : user.ban ? "Доступ ограничен, ой :)" : !isBeta ? "Доступ ограничен" : "Вы авторизированны вернитесь в приложение"}</span>
                                    </div>
                                    {!isBeta && !user.ban ? (
                                        <p className={styles.alert}>
                                            Чтоб получить доступ нужно иметь подписку на <a className={styles.boosty} target="_blank" rel="noopener noreferrer" href="https://boosty.to/evt">Boosty</a>, <a className={styles.discord} target="_blank" rel="noopener noreferrer" href="https://discord.gg/qy42uGTzRy">Discord</a> После будет выдан доступ к бете.
                                        </p>
                                    ) : null}
                                    {user.ban ? <p className={styles.alert}>Причина: {user.ban.reason}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
