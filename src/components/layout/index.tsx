import Header from './header'
import { Footer } from './footer'
import React, { ReactNode, useCallback } from 'react'
import Head from 'next/head'

interface Props {
    children: ReactNode
    title?: string
    description?: string
    image?: string
    background?: string
    backgroundBody?: string

    headerColor?: string
    headerLinksColor?: string;
    headerLinksColorActive?: string;
    headerLinksHover?: string;

    disableFooter?: boolean
    disableNavbar?: boolean
    disableButtonsNavbar?: boolean
    particles?: boolean
}

const Layout: React.FC<Props> = ({
    children,
    title,
    background,
    disableFooter,
    disableNavbar,
    description,
    image,
    backgroundBody = "#fff",
    headerColor,
    headerLinksColor,
    headerLinksColorActive,
    headerLinksHover,
}) => {
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
                :root {
                    --backgroundBody: ${backgroundBody};
                }

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

                .layout-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
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

            {!disableNavbar && (
                <Header
                    backgroundHex={headerColor}
                    linksColor={headerLinksColor}
                    linksColorActive={headerLinksColorActive}
                    linksHover={headerLinksHover}
                />
            )}
            <div className="layout-container">{children}</div>
            {!disableFooter && <Footer />}
        </>
    );
};

export default Layout;