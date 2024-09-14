import UserInterface from '@/api/interface/user.interface'
import BanInitials from '@/api/interface/ban.initials'

const UserInitials: UserInterface = {
    avatar: '',
    createdAt: 0,
    id: '-1',
    banner: '',
    username: '',
    nickname: '',
    perms: 'default',
    ban: BanInitials,
    badges: [],
};

export default UserInitials