import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from "@/styles/Pricecontainer.module.scss";
import { MdBlock, MdCheckCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

interface Subscription {
    name: string;
    priceMonthly: string;
    priceYearly: string;
    benefits: string[];
    colors: string[];
    secretcard?: boolean;
}

const subscriptions: Subscription[] = [
    {
        secretcard: false,
        name: 'Free',
        priceMonthly: 'Бесплатно',
        priceYearly: 'Бесплатно',
        benefits: ['Поддержать разработчиков', 'Темы для Яндекс Музыка', 'Discord RPC'],
        colors: ['#91BDE7', "#405568", "#314251", "#34BFF2", "#7B97B2"],
    },
    {
        secretcard: false,
        name: 'Basic',
        priceMonthly: '40₽/мес',
        priceYearly: '408₽/год',
        benefits: ['Темы для Яндекс Музыка', 'Discord RPC', 'Расширенные настройки статуса Discord RPC', 'Уникальный значок', 'Редактирование баннера в профиле', 'Роль на сервере Discord', 'Поддержать разработчиков'],
        colors: ['#90A9EA', "#414C69", "#333C54", "#3468F2", "#7F8FB8"],
    },
    {
        secretcard: false,
        name: 'Infinite',
        priceMonthly: '90₽/мес',
        priceYearly: '918₽/год',
        benefits: ['Темы для Яндекс Музыка', 'Discord RPC', 'Расширенные настройки статуса Discord RPC', 'Уникальный значок', 'Редактирование баннера в профиле', 'Роль на сервере Discord', 'Что-то что будет скоро', 'Поддержать разработчиков'],
        colors: ['#A493E9', "#484069", "#3B3455", "#8934F2", "#8C80BE"],
    },
];

const renderBenefits = (benefit: string, currentSubscription: Subscription) => {
    if (currentSubscription.secretcard) {
        return <div className={styles.benefit} style={{ color: '#C05A5A' }}><MdBlock size={20} /> {benefit}</div>;
    }

    const higherTiers = subscriptions.slice(subscriptions.indexOf(currentSubscription) + 1);

    const isAvailable = currentSubscription.benefits.includes(benefit);
    const isAvailableInHigherTier = higherTiers.some((sub) => sub.benefits.includes(benefit));

    if (isAvailable) {
        return <div className={styles.benefit} style={{ color: '#fff' }}><MdCheckCircleOutline size={20} /> {benefit}</div>;
    } else if (isAvailableInHigherTier) {
        return <div className={styles.benefit} style={{ color: "var(--linksColor4)" }}><MdRemoveCircleOutline size={20} /> {benefit}</div>;
    } else {
        return <div className={styles.benefit} style={{ color: '#C05A5A' }}><MdBlock size={20} /> {benefit}</div>;
    }
};

const PriceContainer: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const springProps = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'rotateX(90deg)' },
        to: { opacity: 1, transform: 'rotateX(0deg)' },
        reset: true,
        config: { duration: 300 },
    });

    const percentSpringProps = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'rotateX(-90deg)' },
        to: { opacity: 1, transform: 'rotateX(0deg)' },
        reset: true,
        config: { duration: 300 },
    });

    const toggleSubscriptionType = () => {
        setIsMonthly(prev => !prev);
    };

    return (
        <>
            {subscriptions.map((subscription) => {
                if (subscription.secretcard) {
                    return;
                }

                const percent = isMonthly ? undefined : subscription.name === 'Free' ? null : '15%';

                return (
                    <div
                        key={subscription.name}
                        className={styles.border}
                        style={{
                            "--linksColor": subscription.colors[0],
                            "--linksColor1": subscription.colors[1],
                            "--linksColor2": subscription.colors[2],
                            "--linksColor3": subscription.colors[3],
                            "--linksColor4": subscription.colors[4],
                            background: `linear-gradient(0deg, #292C36 0%, rgba(41, 44, 54, 0.9) 100%), var(--linksColor3)`,
                            backgroundSize: 'cover',
                        } as React.CSSProperties}
                    >
                        <div className={styles.subscription}>
                            <div className={styles.subscriptionName}>{subscription.name}</div>
                            <div className={styles.subscriptionHeader}>
                                <animated.div className={styles.percent} style={percentSpringProps}>
                                    {percent}
                                </animated.div>
                                <animated.div className={styles.subscriptionPrice} style={springProps}>
                                    {isMonthly ? subscription.priceMonthly : subscription.priceYearly}
                                </animated.div>
                                <div className={styles.subscriptionButtons}>
                                    <button
                                        className={isMonthly ? styles.activeSelectButton : styles.selectButtons}
                                        onClick={() => setIsMonthly(true)}
                                    >
                                        В месяц
                                    </button>
                                    <button
                                        className={!isMonthly ? styles.activeSelectButton : styles.selectButtons}
                                        onClick={() => setIsMonthly(false)}
                                    >
                                        В год
                                    </button>
                                </div>
                            </div>
                            <div className={styles.benefits}>
                                {subscriptions.reduce((allBenefits, sub) => {
                                    sub.benefits.forEach((benefit) => {
                                        if (!allBenefits.includes(benefit)) {
                                            allBenefits.push(benefit);
                                        }
                                    });
                                    return allBenefits;
                                }, [] as string[]).map((benefit) => renderBenefits(benefit, subscription))}
                            </div>
                            <button
                                className={styles.getButton}
                                disabled={subscription.name === 'Free'}
                            >
                                {subscription.name === 'Free' ? 'Активна' : 'Получить'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default PriceContainer;
