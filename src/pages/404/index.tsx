import Image from "next/image";
import styles from "@/styles/404.module.scss";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [background, setBackground] = useState('');
    const [imageSrc, setImageSrc] = useState('/assets/img/404.png');

    useEffect(() => {
        const randomHue = Math.floor(Math.random() * 360);
        setBackground(`url(/assets/img/grid.png), hsl(${randomHue}, 29%, 27%)`);

        const randomChance = Math.random();
        if (randomChance <= 0.05) {
            setImageSrc('/assets/img/404secret.png');
        }
    }, []);

    return (
        <div className={styles.background} style={{ background }}>
            <Image
                src={imageSrc}
                width={720.21}
                height={402.48}
                layout="intrinsic"
                unoptimized alt="" />
        </div>
    );
}