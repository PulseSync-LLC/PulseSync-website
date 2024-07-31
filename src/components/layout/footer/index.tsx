import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export const Footer = () => {
    const { t } = useTranslation('common');

    return (
        <div className={`${styles.footerCase}`}>
            <div className={styles.footerInfo}>
                <div className={styles.footerLinks}>
                    <span className={styles.infoLinks}>{t('components.footer.social_media')}</span>
                    <div className={styles.links}>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/qy42uGTzRy">Discord</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://boosty.to/evt">Boosty</a>
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <span className={styles.infoLinks}>{t('components.footer.policy')}</span>
                    <div className={styles.links}>
                        <Link href="/terms">{t('components.footer.terms_of_use')}</Link>
                        <Link href="/privacy">{t('components.footer.privacy')}</Link>
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <span className={styles.infoLinks}>{t('components.footer.resources')}</span>
                    <div className={styles.links}>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/PulseSync-Official/YMusic-DRPC">Github</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/PulseSync-Official/YMusic-DRPC/wiki">Wiki</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
