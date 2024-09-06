import BanInterface from '@/api/interface/ban.interface'

export default interface UserInterface {
    avatar: string
    createdAt: number
    id: string
    nickname: string
    perms: string
    username: string
    ban: BanInterface
}
