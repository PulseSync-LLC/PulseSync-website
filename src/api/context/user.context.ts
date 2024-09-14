import { createContext, useContext, useState } from 'react';
import UserInterface from '@/api/interface/user.interface';
import UserInitials from '@/api/interface/user.initials';
import { Socket } from 'socket.io-client';

interface UserContextProps {
    user: UserInterface;
    setUser: (userData: UserInterface) => void;
    loading: boolean;
    socket: Socket | null;
    socketConnected: boolean;
    authorize?: () => void;
}

const UserContext = createContext<UserContextProps>({
    user: UserInitials,
    setUser: () => {},
    loading: true,
    socket: null,
    socketConnected: false,
    authorize: undefined,
});

export const useUser = () => useContext(UserContext);

export default UserContext;
