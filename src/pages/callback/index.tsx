import Image from 'next/image'
import styles from '@/styles/Callback.module.scss'
import { Trans, useTranslation } from 'next-i18next'
import ErrorConnect from '../../../public/assets/authAssest/ErrorConnect.svg'
import ImgConnect from '../../../public/assets/authAssest/Connect.svg'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import UserInterface from '@/api/interface/user.interface'
import UserInitials from '@/api/interface/user.initials'
import config from '@/api/config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout'
import UserContext from '@/api/context/user.context'

export default function Callback() {
    const router = useRouter()
    const [user, setUser] = useState<UserInterface>(UserInitials)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isBeta, setBeta] = useState(false)
    const { t } = useTranslation('common')
    const { setUser: setContextUser } = useContext(UserContext)

    const getUser = async () => {
        if (router.query.token && router.query.id) {
            try {
                const res = await fetch(`${config.SERVER_URL}/user/${router.query.id}`, {
                    headers: {
                        'Authorization': `Bearer ${router.query.token}`,
                    },
                });
                if (!res.ok) {
                    setError(true);
                    return;
                }
                const j = await res.json();
                setUser(j.user);
                localStorage.setItem('token', router.query.token as string);
                localStorage.setItem('user', JSON.stringify(j.user));
                setContextUser(j.user);
    
                const redirectPath = localStorage.getItem('redirectAfterLogin') || '/';
    
                if (j.user && j.user.id !== '-1') {
                    router.push(redirectPath);
                    localStorage.removeItem('redirectAfterLogin');
                }
            } catch (err) {
                setError(true);
            }
        } else {
            setError(true);
        }
    };
    

    const checkIsBeta = async (id: string) => {
        const res = await fetch(`${config.SERVER_URL}/api/v1/user/${id}/access`, {
            headers: {
                'Authorization': `Bearer ${router.query.token}`,
            },
        });
        if (res.ok) {
            const data = await res.json();
            if (data.access) {
                setBeta(true);
                await router.push(`pulsesync://callback?token=${router.query.token}&id=${router.query.id}`);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        if (router.isReady) {
            getUser()
        }
    }, [router.isReady])

    useEffect(() => {
        if (user.id !== '-1') {
            checkIsBeta(user.id)
        }
    }, [router, user])

    useEffect(() => {
        if (user.id !== '-1' && user.ban) {
            router.push(`pulsesync://ban`)
        }
    }, [router, user])

    return (
        <Layout title="Callback" disableNavbar disableFooter>
            <div className="mainContainer">
                <div className={styles.container}>
                    <div className={styles.case}>
                        {!loading ? (
                            <div>
                                <div className={styles.logoPlace}>
                                    {!user.ban &&
                                        isBeta &&
                                        (!error ? (
                                            <Image
                                                className={styles.imgStatus}
                                                src={ImgConnect}
                                                alt=""
                                            />
                                        ) : (
                                            <Image
                                                className={styles.imgStatus}
                                                src={ErrorConnect}
                                                alt=""
                                            />
                                        ))}
                                </div>
                                <div className={styles.containerBG}>
                                    <div className={styles.backgroundContainer}>
                                        <img
                                            className={styles.backgroundImg}
                                            src={user.avatar}
                                            alt=""
                                        />
                                        {!isBeta && !user.ban ? (
                                            <p className={styles.alert}>
                                                <Trans
                                                    i18nKey="pages.callback.auth.no_beta"
                                                    components={{
                                                        1: (
                                                            <a
                                                                className={
                                                                    styles.boosty
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                href="https://boosty.to/evt"
                                                            ></a>
                                                        ),
                                                        3: (
                                                            <a
                                                                className={
                                                                    styles.discord
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                href="https://discord.gg/qy42uGTzRy"
                                                            ></a>
                                                        ),
                                                    }}
                                                />
                                            </p>
                                        ) : null}
                                        {user.ban ? (
                                            <p className={styles.alert}>
                                                {t(
                                                    'components.errors.banReason',
                                                )}{' '}
                                                {user.ban.reason}
                                            </p>
                                        ) : null}
                                        <div>
                                            <span>
                                                {user.ban
                                                    ? t('components.errors.ban')
                                                    : !isBeta
                                                        ? t(
                                                            'components.errors.noBeta',
                                                        )
                                                        : null}
                                            </span>
                                            <span>
                                                {error
                                                    ? t(
                                                        'components.errors.error',
                                                    )
                                                    : user.ban
                                                        ? t(
                                                            'components.errors.forbiddenBan',
                                                        )
                                                        : !isBeta
                                                            ? t(
                                                                'components.errors.forbidden',
                                                            )
                                                            : t(
                                                                'pages.callback.auth.success',
                                                            )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className={styles.logoPlace}>
                                    <Skeleton
                                        className={styles.backgroundImg}
                                        width={101}
                                        height={45}
                                    />
                                </div>
                                <div className={styles.containerBG}>
                                    <div className={styles.backgroundContainer}>
                                        <Skeleton
                                            className={styles.backgroundImg}
                                            borderRadius={500}
                                            width={88}
                                            height={88}
                                        />
                                        <div>
                                            <Skeleton
                                                className={styles.backgroundImg}
                                                width={121}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// @ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
