import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import Logo from '../../../../public/assets/miniLogo.svg'
import Image from 'next/image'
import React from 'react'
import { useContext } from 'react';
import UserContext from '@/api/context/user.context';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import UserInitials from '@/api/interface/user.initials'
import { MdExitToApp, MdInput } from 'react-icons/md'

interface Cosmetic {
    backgroundHex?: string
    linksColor?: string
    linksColorActive?: string
    linksHover?: string
}

const Header: React.FC<Cosmetic> = ({
    backgroundHex = '#171821',
    linksColor = '#FFFFFF',
    linksColorActive = '#A4BAFF',
    linksHover = '#c3d2ff',
}) => {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext);
    const { t } = useTranslation('common')

    const getLinkClass = (path: string) => {
        return router.pathname === path
            ? `${styles.links} ${styles.active}`
            : styles.links
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(UserInitials);
        window.location.href = '/';
    };

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
                        {user.id !== '-1' ? (
                            <div className={styles.userProfile}>
                                <Link href="/dashboard" className={`${getLinkClass('/dashboard')} ${styles.username}`}>
                                    <img src={user.avatar} alt={user.username} className={styles.avatar} />
                                    {user.username}
                                </Link>
                                <button onClick={handleLogout} className={styles.logoutButton}>
                                    <MdExitToApp size={22} />
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className={`${getLinkClass('/login')} ${styles.login}`}>
                                {t('components.header.login')} <MdInput size={22} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
