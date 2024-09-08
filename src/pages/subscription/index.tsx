import styles from '@/styles/Home.module.scss'
import sub from '@/styles/Subscription.module.scss'
import QuoteStart from '../../../public/assets/img/quoteStart.svg'
import QuoteEnd from '../../../public/assets/img/quoteEnd.svg'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout'
import PriceContainer from '@/components/pricecontainer'
import { useTranslation } from 'next-i18next'

export default function Subscription() {
    const { t } = useTranslation('common')
    return (
        <Layout title="Подписка">
            <div className="mainContainer">
                <div className={styles.contentCase}>
                    <div
                        className={`${sub.contentCaseSizeble} ${sub.gradient}`}
                    >
                        <div className={sub.quoteBlock}>
                            <Image
                                className={sub.quoteStart}
                                src={QuoteStart}
                                quality={100}
                                unoptimized
                                alt=""
                            />
                            <div className={sub.quoteContent}>
                                <div className={sub.thankYouTitle}>
                                    {t('components.subscription.tYT')}
                                </div>
                                <div className={sub.quoteText}>
                                    {t('components.subscription.qT1')}
                                </div>
                                <div className={sub.quoteText}>
                                    {t('components.subscription.qT2')}
                                </div>
                                <div className={sub.signature}>
                                    {t('components.subscription.signature')}
                                </div>
                            </div>
                            <div className={sub.quoteEnd}>
                                <Image
                                    src={QuoteEnd}
                                    quality={100}
                                    unoptimized
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={sub.contentCaseSizeble}>
                        <div className={sub.priceBlock}>
                            <PriceContainer />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
// @ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}
