import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import Logo from '../../../../public/assets/miniLogo.svg'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface Cosmetic {
    backgroundHex?: string
    linksColor?: string
    linksColorActive?: string
    linksHover?: string
}

const Header: React.FC<Cosmetic> = ({
    backgroundHex = '#1E2027',
    linksColor = '#FFFFFF',
    linksColorActive = '#A4BAFF',
    linksHover = '#c3d2ff',
}) => {
    const router = useRouter()

    const { t } = useTranslation('common')

    const getLinkClass = (path: string) => {
        return router.pathname === path
            ? `${styles.links} ${styles.active}`
            : styles.links
    }

    return (
        <>
            <div className={styles.nav} style={{ background: backgroundHex }}>
                <div
                    className={styles.headerSizeble}
                    style={
                        {
                            '--linksColor': linksColor,
                            '--linksColorActive': linksColorActive,
                            '--linksHover': linksHover,
                        } as React.CSSProperties
                    }
                >
                    <div className={styles.leftSide}>
                        <Link href="/">
                            <Image
                                src={Logo}
                                quality={100}
                                unoptimized
                                alt=""
                            />
                        </Link>
                        <div className={styles.nav_links}>
                            <Link href="/" className={getLinkClass('/')}>
                                {t('components.header.home')}
                            </Link>
                            <Link
                                href="/subscription"
                                className={getLinkClass('/subscription')}
                            >
                                {t('components.header.subscription')}
                            </Link>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <Link href="/" className={getLinkClass('/login')}>
                            {t('components.header.login')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
