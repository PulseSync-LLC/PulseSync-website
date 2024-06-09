import Image from "next/image";
import styles from "@/styles/Callback.module.scss";

import ErrorConnect from "../../../public/authAssest/ErrorConnect.svg";
import ImgConnect from "../../../public/authAssest/Connect.svg";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
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
            if(!res.ok) setError(true)
            const j = await res.json()
            setUser(j)
        }
        else {
            setError(true)
        }
    }
    useEffect(() => {
        if(router.isReady) getUser()
    }, [router.isReady])
    useEffect(() => {
        if(user.id !== "") {
            console.log(user)
            router.push(`pulsesync://callback?token=${router.query.token}`)
        }
    }, [user]);
    return (
        <>
            <div className="mainContainer">
                <span className="siteUrl">pulsesync.dev/<span className="siteRoute">callback</span></span>
                <div className={styles.container}>
                    <div className={styles.case}>
                        <div className={styles.backgroundContainer}>
                            <img className={styles.userAvatar}
                                 src={user.avatar}
                                 alt=""/>
                            <Image className={styles.imgStatus} src={!error ? ImgConnect : ErrorConnect} alt=""/>
                            <span>{!error ? "Вы авторизированны вернитесь в приложение" : "Что-то пошло не так"}</span>
                            <img className={styles.backgroundImg}
                                 src={user.avatar}
                                 alt=""/>
                            <div className={styles.background}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
