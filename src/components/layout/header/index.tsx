import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import Logo from "../../../../public/assets/miniLogo.svg";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

interface Cosmetic {
    backgroundHex?: string;
    linksColor?: string;
    linksColorActive?: string;
    linksHover?: string;
}

const Header: React.FC<Cosmetic> = ({
    backgroundHex = "#3468F2",
    linksColor = "#FFFFFF",
    linksColorActive = "#f5ffa4",
    linksHover = "#f0ffc3",
}) => {
    const router = useRouter();

    const getLinkClass = (path: string) => {
        return router.pathname === path ? `${styles.links} ${styles.active}` : styles.links;
    };

    return (
        <>
            <div
                className={styles.nav}
                style={{ background: backgroundHex }}
            >
                <div
                    className={styles.headerSizeble}
                    style={{
                        "--linksColor": linksColor,
                        "--linksColorActive": linksColorActive,
                        "--linksHover": linksHover,
                    } as React.CSSProperties}
                >
                    <div className={styles.leftSide}>
                        <Link href="/">
                            <Image src={Logo} quality={100} unoptimized alt="" />
                        </Link>
                        <div className={styles.nav_links}>
                            <Link href="/" className={getLinkClass("/")}>
                                главная
                            </Link>
                            <Link href="/subscription" className={getLinkClass("/subscription")}>
                                подписка
                            </Link>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <Link href="/" className={getLinkClass("/")}>
                            войти (only dev)
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
