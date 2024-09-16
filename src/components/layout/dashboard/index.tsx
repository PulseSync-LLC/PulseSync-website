import styles from '@/styles/Dashboard.module.scss'
import { useTranslation } from 'next-i18next'
import { ReactNode, useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import UserContext from '@/api/context/user.context'
import UserInitials from '@/api/interface/user.initials'
import { MdExitToApp } from 'react-icons/md'
import { LeftDashboard } from '../left-dashboard'

interface Props {
    title?: string
    description?: string
    image?: string
    children: ReactNode
}

const Dashboard: React.FC<Props> = ({
    title,
    description,
    image,
    children,
}) => {
    const { user, setUser } = useContext(UserContext);
    const { t } = useTranslation('common')

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(UserInitials);
    };

    return (
        <>
            <Head>
                <title>{title + ' / PulseSync'}</title>
                <meta httpEquiv="content-language" content="ru" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="HandheldFriendly" content="true" />
                <meta name="MobileOptimized" content="320" />
                <meta name="apple-mobile-web-app-capable" content="yes" />

                <link
                    rel="preconnect"
                    href="https://avatars.githubusercontent.com/"
                />
                <link rel="preconnect" href="https://cdn.discordapp.com" />
                <link rel="preconnect" href="https://media.discordapp.net" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="canonical" href="https://pulsesync.dev/" />

                <meta name="keywords" content="" />
                <meta name="description" content={description} />

                <meta name="msapplication-tooltip" content={`${title}`} />
                <meta name="msapplication-starturl" content="/" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="application-name" content={`${title}`} />

                <meta property="og:site_name" content="PulseSync" />
                <meta property="og:title" content={`${title}`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pulsesync.dev/" />

                <style>{`
                html, body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                }

                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                `}</style>

                <link
                    rel="shortcut icon"
                    href="/assets/favicon.svg"
                    type="image/svg+xml"
                />
                <link
                    rel="shortcut icon"
                    href="/assets/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <div className={styles.background}>
                <div className={styles.position}>
                    <div className={styles.flex}>
                        <div className={styles.leftSide}>
                            <LeftDashboard />
                            {user.id !== '-1' ? (
                                <div className={styles.userProfile}>
                                    <div className={styles.containerUserLeft}>
                                        <img src={user.avatar} alt={user.username} className={styles.avatar} />
                                        <div className={styles.containerUserInfo}>
                                            <span className={styles.username}>{user.username}</span>
                                            <span className={styles.userperms}>{user.perms}</span>
                                        </div>
                                    </div>
                                    <button onClick={handleLogout} className={styles.logoutButton}>
                                        <MdExitToApp size={22} />
                                    </button>
                                </div>
                            ) : null}
                        </div>
                        <div className={styles.rightSide}>
                            {user.id !== '-1' ? children : (
                                <div className={styles.authPanel}>
                                    <div className={styles.container}>
                                        <h2 className={styles.title}>Недостаточно прав</h2>
                                        <div className={styles.authLinks}>
                                            <Link href="/" className={`${styles.authLink}`}>Вернуться на главную</Link>
                                            <Link href="/login" className={`${styles.authLink}`}>Авторизироваться</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
