import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import config from '../../api/config';
import UserContext from '../../api/context/user.context';

export default function Login() {
    const { user } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        const redirectAfterLogin = localStorage.getItem('redirectAfterLogin') || '/';

        if (user.id !== '-1') {
            router.push(redirectAfterLogin);
            localStorage.removeItem('redirectAfterLogin');
        } else {
            if (router.asPath !== '/login') {
                localStorage.setItem('redirectAfterLogin', router.asPath);
            }
            window.location.href = `${config.SERVER_URL}/auth/discord`;
        }
    }, [user, router]);

    return null;
}
