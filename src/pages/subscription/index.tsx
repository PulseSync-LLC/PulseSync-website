import styles from "@/styles/Home.module.scss";
import sub from "@/styles/Subscription.module.scss";
import QuoteStart from "../../../public/assets/img/quoteStart.svg";
import QuoteEnd from "../../../public/assets/img/quoteEnd.svg";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import PriceContainer from '@/components/pricecontainer'

export default function Privacy() {
    return (
        <Layout backgroundBody="#14151C" headerColor="#1E2027" headerLinksColor="#FFFFFF" headerLinksColorActive="#A4BAFF" headerLinksHover="#c3d2ff" title="Пользовательское соглашение">
            <div className="mainContainer">
                <div className={styles.contentCase}>
                    <div className={`${sub.contentCaseSizeble} ${sub.gradient}`}>
                        <div className={sub.quoteBlock}>
                            <Image src={QuoteStart} quality={100} unoptimized alt="" />
                            <div className={sub.quoteContent}>
                                <div className={sub.thankYouTitle}>Спасибо за поддержку PulseSync!</div>
                                <div className={sub.quoteText}>
                                    Мы создавали PulseSync, опираясь на наше собственное видение и желание сделать что-то, чем мы бы сами хотели пользоваться каждый день. Мы не стремимся превратить этот проект в бизнес; вместо этого мы фокусируемся на создании лучшего опыта для вас. PulseSync остается открытым, свободным от рекламы и всего плохого, что может ухудшить ваш опыт.
                                </div>
                                <div className={sub.quoteText}>
                                    Поддержка PulseSync — это не просто помощь проекту, а выражение доверия к нашему видению и усилиям. Это не даст вам никаких особых преимуществ, но сделает вас частью нашей дружной команды и, возможно, быть чуть круче в глазах ваших друзей! :)
                                    Ваши взносы помогают нам покрывать затраты на сервера и продолжать развитие PulseSync. Мы искренне благодарны каждому из вас за поддержку. Вместе мы создаем нечто особенное!
                                </div>
                                <div className={sub.signature}>
                                    — С благодарностью, Максим "Maks1mio" и команда PulseSync!
                                </div>
                            </div>
                            <div className={sub.quoteEnd}>
                                <Image src={QuoteEnd} quality={100} unoptimized alt="" />
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
