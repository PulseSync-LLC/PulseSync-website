import styles from '@/styles/Home.module.scss'
import policy from '@/styles/Policy.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout'

export default function Privacy() {
    return (
        <Layout headerColor="#171821" title="Пользовательское соглашение">
            <div className={styles.mainContainer}>
                <div className={styles.contentSection}>
                    <div className={styles.sectionWrapper}>
                        <div className={policy.main}>
                            <div>
                                <div className={policy.header}>
                                    <div className={policy.date}>
                                        09.09.2024
                                    </div>
                                    <div className={policy.title}>
                                        ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ С КОНЕЧНЫМ
                                        ПОЛЬЗОВАТЕЛЕМ (EULA) ДЛЯ «PulseSync»
                                    </div>
                                </div>
                                <div className={policy.alert}>
                                    Внимательно прочитайте это лицензионное
                                    соглашение перед использованием Программного
                                    обеспечения. Используя Программное
                                    обеспечение, вы соглашаетесь с условиями
                                    настоящего соглашения. Если вы не согласны
                                    или не понимаете условия, не используйте
                                    Программное обеспечение.
                                </div>
                            </div>
                            <div>
                                1. ОБЩИЕ ПОЛОЖЕНИЯ
                                <div>
                                    <div>
                                        1.1. Настоящее Лицензионное соглашение
                                        (далее — «Лицензия») устанавливает
                                        условия использования Программного
                                        обеспечения для ЭВМ «PulseSync», версии
                                        для Windows (далее — «Программное
                                        обеспечение») и заключено между любым
                                        лицом, использующим Программное
                                        обеспечение (далее — «Пользователь»), и
                                        ИП «Деднев Григорий Дмитриевич», являющимся
                                        правообладателем исключительного права
                                        на Программное обеспечение (далее —
                                        «Лицензиар»).
                                    </div>
                                    <div>
                                        1.2. Копируя, устанавливая, воспроизводя
                                        Программное обеспечение на своё
                                        устройство или используя Программное
                                        обеспечение любым образом, Пользователь
                                        выражает своё полное и безоговорочное
                                        согласие со всеми условиями Лицензии.
                                    </div>
                                    <div>
                                        1.3. Использование Программного
                                        обеспечения разрешается только на
                                        условиях настоящей Лицензии. Если
                                        пользователь не принимает условия
                                        Лицензии в полном объеме, Пользователь
                                        не имеет права использовать Программное
                                        обеспечение в каких-либо целях.
                                        Использование Программного обеспечения с
                                        нарушением какого-либо из условий
                                        Лицензии запрещено.
                                    </div>
                                    <div>
                                        1.4. Использование Программного
                                        обеспечения Пользователем на условиях
                                        настоящей Лицензии в личных
                                        некоммерческих целях осуществляется без
                                        взимания дополнительной платы. За
                                        пользование отдельными функциями
                                        Программы может взиматься плата.
                                    </div>
                                </div>
                            </div>
                            <div>
                                2. ЛИЦЕНЗИЯ
                                <div>
                                    <div>
                                        2.1. Лицензиар предоставляет
                                        Пользователю непередаваемое право
                                        использования Программного обеспечения
                                        на условиях простой (неисключительной)
                                        лицензии, в соответствии с условиями
                                        настоящего соглашения, следующими
                                        способами:
                                        <div>
                                            2.1.1. Применять Программное
                                            обеспечение по прямому
                                            функциональному назначению, в целях
                                            чего произвести его копирование и
                                            установку (воспроизведение) на
                                            устройство (-ва) Пользователя.
                                            Пользователь вправе произвести
                                            установку Программного обеспечения
                                            на неограниченное число устройств.
                                            При установке каждой новой копии
                                            Программного обеспечения
                                            Пользователю присваивается
                                            индивидуальный номер, который
                                            автоматически сообщается
                                            Лицензиатору.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                3. ОГРАНИЧЕНИЯ
                                <div>
                                    <div>
                                        3.1. Пользователь не имеет права
                                        копировать, изменять, распространять или
                                        создавать производные работы на основе
                                        Программного обеспечения в коммерческих
                                        целях (в том числе за плату) без
                                        письменного согласия Лицензиара.
                                    </div>
                                    <div>
                                        3.2. Пользователь не имеет права
                                        предоставлять Программное обеспечение в
                                        аренду, прокат или сублицензировать его.
                                    </div>
                                    <div>
                                        3.3. Программное обеспечение должно
                                        использоваться (в том числе
                                        распространяться) под наименованием:
                                        «PulseSync». Пользователь не вправе
                                        изменять или удалять наименование
                                        Программного обеспечения или иные
                                        указания на Лицензиара.
                                    </div>
                                    <div>
                                        3.4. Пользователь не имеет права
                                        изменять исходный код Программного
                                        обеспечения для осуществления
                                        неправомерных действий, создавать и
                                        распространять вредоносный код
                                        посредством использования Программного
                                        обеспечения.
                                    </div>
                                    <div>
                                        3.5. Пользователь не имеет права
                                        использовать Программное обеспечение в
                                        целях, нарушающих действующее
                                        законодательство или права третьих лиц.
                                    </div>
                                </div>
                            </div>
                            <div>
                                4. СОБСТВЕННОСТЬ
                                <div>
                                    <div>
                                        4.1. Все права, титулы и интересы в
                                        отношении Программного обеспечения
                                        принадлежат Лицензиару.
                                    </div>
                                </div>
                            </div>
                            <div>
                                5. ОТКАЗ ОТ ГАРАНТИЙ
                                <div>
                                    <div>
                                        5.1. Программное обеспечение (включая
                                        Данные) предоставляется «КАК ЕСТЬ», без
                                        каких-либо гарантий, явных или
                                        подразумеваемых, включая, но не
                                        ограничиваясь, подразумеваемыми
                                        гарантиями товарной пригодности и
                                        пригодности для конкретной цели.
                                    </div>
                                </div>
                            </div>
                            <div>
                                6. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ
                                <div>
                                    <div>
                                        6.1. Лицензиар не несет ответственности
                                        за любые убытки, возникающие в
                                        результате использования или
                                        невозможности использования Программного
                                        обеспечения, даже если Лицензиар был
                                        уведомлен о возможности таких убытков.
                                    </div>
                                    <div>
                                        6.2. Пользователь настоящим уведомлен и
                                        соглашается, что при использовании
                                        Программного обеспечения Лицензиару в
                                        автоматическом режиме передаётся
                                        следующая информация: тип операционной
                                        системы Пользователя, версия и
                                        идентификатор Программного обеспечения,
                                        статистика использования функций
                                        Программного обеспечения, а также иная
                                        техническая информация.
                                    </div>
                                    <div>
                                        6.3. Пользователь настоящим уведомлен и
                                        соглашается, что при использовании
                                        Программного обеспечения он может прямо
                                        или косвенно нарушить Лицензионное
                                        соглашение на использование программы
                                        «Яндекс Музыка».
                                    </div>
                                    <div>
                                        <p>
                                            6.4. Пользователь настоящим
                                            уведомлен и соглашается с настоящим
                                            лицензионным соглашением с конечным
                                            пользователем для
                                            «PulseSync-backend» доступным по
                                            адресу:{' '}
                                            <a href="https://github.com/PulseSync-Official/YMusic-DRPC/blob/patcher-ts/static/assets/policy/terms.ru.md">
                                                https://github.com/PulseSync-Official/YMusic-DRPC/blob/patcher-ts/static/assets/policy/terms.ru.md
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                7. ПРИМЕНИМОЕ ПРАВО
                                <div>
                                    <div>
                                        7.1. Настоящее соглашение регулируется
                                        гражданским кодексом Российской
                                        Федерации.
                                    </div>
                                </div>
                            </div>
                            <div>
                                8. ОБНОВЛЕНИЯ/НОВЫЕ ВЕРСИИ ПРОГРАММНОГО
                                ОБЕСПЕЧЕНИЯ
                                <div>
                                    <div>
                                        8.1. Программное обеспечение
                                        автоматически загружает и устанавливает
                                        обновления для улучшения
                                        функциональности. Пользователь
                                        соглашается с автоматическим обновлением
                                        Программного обеспечения и запросом,
                                        загрузкой и установкой обновлений без
                                        дополнительных уведомлений.
                                    </div>
                                    <div>
                                        8.2. Лицензия распространяется на все
                                        обновления и новые версии Программного
                                        обеспечения. Установка обновления или
                                        новой версии Программного обеспечения
                                        означает принятие пользователем условий
                                        настоящей Лицензии.
                                    </div>
                                </div>
                            </div>
                            <div>
                                9. УРЕГУЛИРОВАНИЕ СПОРОВ
                                <div>
                                    <div>
                                        <p>
                                            9.1. Пользователь вправе обратиться
                                            за помощью к Лицензиару в случае
                                            непредвиденных ошибок, сбоев и
                                            прочих неисправностей в работе
                                            Программного Обеспечения,
                                            посредством подробного описания
                                            возникшей неисправности в
                                            Discord-канале Лицензиара, доступном
                                            по адресу:{' '}
                                            <a href="https://discord.gg/qy42uGTzRy/">
                                                https://discord.gg/qy42uGTzRy/
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div>
                                        9.2. Лицензиар вправе не предоставлять
                                        какую-либо помощь в случае нарушения
                                        Пользователем условий Лицензии.
                                    </div>
                                    <div>
                                        9.3. Лицензиар вправе ограничить
                                        Пользователя в использовании
                                        Программного обеспечения в случае
                                        нарушения Пользователем условий Лицензии
                                        без объяснения причины.
                                    </div>
                                    <div>
                                        9.4. Пользователь обязан сообщать
                                        Лицензиару о любых непредвиденных
                                        ошибках, сбоях и прочих неисправностях в
                                        работе Программного обеспечения
                                        средствами, описанными в пункте 9.1.
                                        настоящей Лицензии.
                                    </div>
                                    <div>
                                        9.5. Пользователь обязан сообщать
                                        Лицензиару о любых фактах неправомерного
                                        использования программы и/или о
                                        сторонних модификациях с неправомерным
                                        функционалом средствами, описанными в
                                        пункте 9.1. настоящей Лицензии.
                                    </div>
                                </div>
                            </div>
                            <div>
                                10. ИЗМЕНЕНИЕ УСЛОВИЙ НАСТОЯЩЕЙ ЛИЦЕНЗИИ
                                <div>
                                    <div>
                                        10.1. Лицензиар имеет право в
                                        одностороннем порядке изменять условия
                                        настоящей Лицензии. Условия вступают в
                                        силу с момента изменения, если иное не
                                        указано в них.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    Используя Программное обеспечение, вы
                                    подтверждаете, что прочитали и поняли
                                    настоящее соглашение и соглашаетесь
                                    соблюдать его условия.
                                </div>
                            </div>
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
