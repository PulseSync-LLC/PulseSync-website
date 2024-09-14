import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { appWithTranslation } from 'next-i18next'
import { YandexMetricaProvider } from 'next-yandex-metrica'
import config from '@/api/config'
import { useEffect, useState } from 'react'
import Preloader from '@/components/preloader'
import UserContext from '@/api/context/user.context';
import UserInitials from '@/api/interface/user.initials';
import { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import UserInterface from '@/api/interface/user.interface';

function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserInterface>(UserInitials);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [socketConnected, setSocketConnected] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
    
        if (token) {
            fetch(`${config.SERVER_URL}/user/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (storedUser) {
                        setUser(JSON.parse(storedUser));
                    } else {
                        setUser(data.user || UserInitials);
                    }
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        }
    }, []);
    

    useEffect(() => {
        const socketInstance = io(config.SERVER_URL);
        setSocket(socketInstance);

        socketInstance.on('connect', () => {
            setSocketConnected(true);
        });

        socketInstance.on('disconnect', () => {
            setSocketConnected(false);
        });

        return () => {
            socketInstance.disconnect();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, socket, socketConnected }}>
            <SkeletonTheme baseColor="#1E2027" highlightColor="#3E424C">
                <YandexMetricaProvider
                    tagID={config.YANDEX_METRIK}
                    initParameters={{
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                    }}
                >
                    {loading ? <Preloader /> : <Component {...pageProps} />}
                </YandexMetricaProvider>
            </SkeletonTheme>
        </UserContext.Provider>
    );
}

export default appWithTranslation(App);
