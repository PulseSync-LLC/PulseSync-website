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
    const router = useRouter()
    const [user, setUser] = useState<UserInterface>(UserInitials)
    const [error, setError] = useState(false);
    const getUser = async () => {
        if (router.query.token) {
            const res = await fetch(`${config.SERVER_URL}/user/${router.query.id}`)
            if (!res.ok) setError(true)
            const j = await res.json()
            setUser(j)
        }
        else {
            setError(true)
        }
    }
    useEffect(() => {
        if (router.isReady) getUser()
    }, [router.isReady])
    useEffect(() => {
        if (user.id !== "") {
            console.log(user)
            router.push(`pulsesync://callback?token=${router.query.token}`)
        }
    }, [user]);
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
                                    {!error ? <Image className={styles.imgStatus} src={!error ? ImgConnect : ErrorConnect} alt="" /> : null}
                                    <div>
                                        <span>{error ? "Вы не бета тестер" : error ? "Походу вы в бане!" : null}</span>
                                        <span>{!error ? "Вы авторизированны вернитесь в приложение" : error ? "Доступ ограничен" : !error ? "Доступ ограничен, ой :)" : "Что-то пошло не так"}</span>
                                    </div>
                                    {/* если нет бетки      {error ? <p className={styles.alert}>Чтоб получить доступ нужно иметь подписку на <a className={styles.boosty} target="_blank" rel="noopener noreferrer" href="https://boosty.to/evt">Boosty</a> и в самом бусти привязать свой аккаунт дискорд и после зайти на наш сервер <a className={styles.discord} target="_blank" rel="noopener noreferrer" href="https://discord.gg/qy42uGTzRy">Disocrd</a>. После будет выдан доступ к бете.</p> : null} */}
                                    {/* если бан      {error ? <p className={styles.alert}>Причина: </p> : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
