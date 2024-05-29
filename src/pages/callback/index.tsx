import Image from "next/image";
import styles from "@/styles/Callback.module.scss";

import ImgConnect from "../../../public/authAssest/Connect.svg";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import UserInterface from "@/api/interface/user.interface";
import UserInitials from "@/api/interface/user.initials";


export default function Callback() {
    const router = useRouter()
    const [user, setUser] = useState<UserInterface>(UserInitials)
    const getUser = async () => {
        if (router.query.token) {
            const res = await fetch(`http://localhost:4000/user/${router.query.id}`)
            const j = await res.json()
            setUser(j)
        }
        else {
           await router.push("/");
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
                            <Image className={styles.imgStatus} src={ImgConnect} alt=""/>
                            <span>Вы авторизированны вернитесь в приложение</span>
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
