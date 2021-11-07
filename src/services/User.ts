import { api } from './index'
import { User } from '@/models/User'

export default {
  async getCurrentUser(): Promise<User> {
    const { data } = await api.get(`users/me`)
    return new User(data)
  },
  async getUsers(): Promise<User[]> {
    const { data } = await api.get(`users`)
    return data.items.map((u: User) => new User(u))
  },
  async remove(id: string): Promise<void> {
    await api.delete(`users/${id}`)
  },
}
