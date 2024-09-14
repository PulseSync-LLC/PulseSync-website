import BanInterface from '@/api/interface/ban.interface'

export default interface UserInterface {
    id: string
    avatar: string
    banner: string
    username: string
    perms: string
    createdAt: number
    nickname: string
    ban?: BanInterface
    badges: string[]
}