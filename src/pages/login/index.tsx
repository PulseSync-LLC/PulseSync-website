import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import config from '../../api/config';
import UserContext from '../../api/context/user.context';

export default function Login() {
    const { user } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (user.id !== '-1') {
            router.push('/dashboard');
        } else {
            window.location.href = `${config.SERVER_URL}/auth/discord`;
        }
    }, [user, router]);

    return null;
}
