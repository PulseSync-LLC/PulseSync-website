import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import Logo from "../../../../public/assets/fullLogo.svg";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.headerSizeble}>
                    <Link href="/"><Image src={Logo} quality={100} unoptimized alt="" /><div className={styles.beta}>Beta</div></Link>
                    <div className={styles.nav_links}>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/PulseSync-LLC/YMusic-DRPC/tree/patcher-ts">Github</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/PulseSync-LLC/YMusic-DRPC/wiki">Wiki</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
