import UserInterface from '@/api/interface/user.interface'

export default interface BanInterface {
    uuid: string
    type: number[]
    reason: string
    createdAt: string
}
