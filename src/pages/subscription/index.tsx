import styles from "@/styles/Home.module.scss";
import sub from "@/styles/Subscription.module.scss";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'

export default function Privacy() {
    return (
        <Layout headerColor="#1E2027" headerLinksColor="#FFFFFF" headerLinksColorActive="#A4BAFF" headerLinksHover="#c3d2ff" title="Пользовательское соглашение">
            <div className="mainContainer">
                <div className={styles.contentCase}>
                    <div className={styles.contentCaseSizeble}>
                        test
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
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        },
    }
}
