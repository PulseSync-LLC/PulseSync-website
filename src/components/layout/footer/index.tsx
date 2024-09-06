import Image from 'next/image'
import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'
import Logo from '../../../../public/assets/miniLogoFooter.svg'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
    const { t } = useTranslation('common')

    return (
        <div className={`${styles.footerCase}`}>
            <div className={`${styles.footerContent}`}>
                <div className={`${styles.footerLeft}`}>
                    <Image
                        src={Logo}
                        width={45}
                        height={45}
                        quality={100}
                        unoptimized
                        alt=""
                    />
                    <div className={`${styles.footerLeftContainer}`}>
                        <p className={`${styles.footerLeftText}`}>
                            {t('components.footer.copyright', {
                                year: new Date().getFullYear(),
                            })}{' '}
                            {t('components.footer.ip', {
                                name: 'Деднев Григорий Дмитриевич',
                            })}
                        </p>
                        <p className={`${styles.footerLeftText}`}>
                            {t('components.footer.email', {
                                email: 'contact@pulsesync.dev',
                            })}
                        </p>
                        <p className={`${styles.footerLeftText}`}>
                            {t('components.footer.inn', {
                                inn: '775110786608',
                            })}
                        </p>
                        <p className={`${styles.footerLeftText}`}>
                            {t('components.footer.address', {
                                city: 'Москва',
                                code: '108803',
                            })}
                        </p>
                    </div>
                </div>
                <div className={`${styles.footerRight}`}>
                    <div className={`${styles.footerRightItem}`}>
                        <p className={`${styles.footerRightTitle}`}>
                            {t('components.footer.resources')}
                        </p>
                        <Link
                            href={'https://discord.gg/qy42uGTzRy'}
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.discord')}
                        </Link>
                        <Link
                            href={
                                'https://github.com/PulseSync-LLC/YMusic-DRPC'
                            }
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.github')}
                        </Link>
                        <Link
                            href={'/wiki'}
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.wiki')}
                        </Link>
                        <Link
                            href={'/status'}
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.status')}
                        </Link>
                    </div>
                    <div className={`${styles.footerRightItem}`}>
                        <p className={`${styles.footerRightTitle}`}>
                            {t('components.footer.politics')}
                        </p>
                        <Link
                            href={'/terms'}
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.terms')}
                        </Link>
                        <Link
                            href={'/privacy'}
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.privacy')}
                        </Link>
                        <Link
                            href={'/cookies'}
                            className={`${styles.footerRightLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('components.footer.cookies')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
