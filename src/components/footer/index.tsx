import styles from "@/styles/Home.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={`${styles.footerCase}`}>
                <div className={styles.footerInfo}>
                    <div className={styles.footerLinks}>
                        <span className={styles.infoLinks}>СОЦИАЛЬНЫЕ СЕТИ</span>
                        <div className={styles.links}>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/qy42uGTzRy">Discord</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://boosty.to/evt">Boosty</a>
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <span className={styles.infoLinks}>Политика</span>
                        <div className={styles.links}>
                            <Link href="/terms">Условия использования</Link>
                            <Link href="/privacy">Конфиденциальность</Link>
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <span className={styles.infoLinks}>Ресурсы</span>
                        <div className={styles.links}>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/PulseSync-Official/YMusic-DRPC">Github</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/PulseSync-Official/YMusic-DRPC/wiki">Wiki</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
