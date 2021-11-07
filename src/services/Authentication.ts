import { api } from './index'
import { Auth } from '@/models/Auth'
import { User } from '@/models/User'

export default {
  async login(email: string, password: string): Promise<Auth> {
    const { data } = await api.post(`auth/log-in`, { email, password })
    return new Auth(data)
  },
  async signUp(user: User): Promise<void> {
    await api.post(`auth/sign-up`, user)
  },
}
