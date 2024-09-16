import Image from 'next/image';
import styles from '@/styles/Dashboard.module.scss';
import Link from 'next/link';
import Logo from 'public/assets/dashboardLogo copy.svg';
import { useTranslation } from 'next-i18next';
import { MdApi, MdBugReport, MdFavoriteBorder } from 'react-icons/md';
import { useRouter } from 'next/router';

export const LeftDashboard = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    return (
        <>
            <div className={styles.logo}>
                <Image
                    src={Logo}
                    width={132}
                    height={24}
                    quality={100}
                    unoptimized
                    alt=""
                />
            </div>
            <div className={styles.routers}>
                <Link
                    href="/dashboard"
                    className={`${styles.routerLink} ${router.pathname === '/dashboard' ? styles.active : ''}`}
                    passHref
                >
                    <MdFavoriteBorder size={24} /> Подписка
                </Link>
                <Link
                    href="/dashboard/api"
                    className={`${styles.routerLink} ${router.pathname === '/dashboard/api' ? styles.active : ''}`}
                    passHref
                >
                    <MdApi size={24} /> Api
                </Link>
                <Link
                    href="/dashboard/bug-report"
                    className={`${styles.routerLink} ${router.pathname === '/dashboard/bug-report' ? styles.active : ''}`}
                    passHref
                >
                    <MdBugReport size={24} /> Bug Report
                </Link>
            </div>
        </>
    );
};
