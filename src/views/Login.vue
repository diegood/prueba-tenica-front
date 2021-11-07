<template>
  <div class="card-wrapper">
    <Card>
      <h1>Ingreso</h1>
      <p class="error" v-if="error">error: {{ error }}</p>
      <div class="form">
        <input v-model="form.email" class="input" type="text" placeholder="email" />
        <input v-model="form.password" class="input" type="password" placeholder="Contraseña" />
        <Btn class="submit" @click="login(form.email, form.password)"> Ingresar </Btn>
        <router-link :to="{ name: 'sign-up' }" class="sign-up-btn"> Crear una cuenta </router-link>
      </div>
    </Card>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import router from '@/router'
import Card from '@/components/common/Card.vue'
import Btn from '@/components/common/Btn.vue'
import Services from '@/services/index'
import { Auth } from '@/models/Auth'
import { useStore } from 'vuex'
import { User } from '@/models/User'

export default {
  name: 'login',
  components: { Card, Btn },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  setup() {
    const store = useStore()
    const error = ref('')
    const login = async (email: string, password: string): Promise<void> => {
      await getCredentials(email, password)
      await setUserAsLogged()
      router.push({ name: 'users' })
    }

    const getCredentials = async (email: string, password: string): Promise<void> => {
      try {
        const credential: Auth = await Services.Authentication.login(email, password)
        store.dispatch('updateAuthCredentials', credential)
      } catch (e) {
        error.value = 'Credenciales no validas'
        throw e
      }
    }

    const setUserAsLogged = async (): Promise<void> => {
      try {
        const user: User = await Services.User.getCurrentUser()
        store.dispatch('updateUser', user)
      } catch (e) {
        error.value = 'No se pudo obtener informacion de usuario'
        store.dispatch('logout')
        throw e
      }
    }

    return { login, error }
  },
}
</script>
<style lang="stylus" scoped>
.card-wrapper
  display: flex
  justify-content: center
  height: 100vh
  align-items: center

.error
  color: red
.form {
  width 100%
  display: flex
  flex-direction: column
  justify-content: center
  gap: 1rem
  align-items: center
}

.sign-up-btn {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #E1BEE7;
  padding-top: 15px;
}

a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #E1BEE7;
  text-decoration: none;
}

@media (max-width: 600px) {
  .card {
    border-radius: 0px;
  }
}
</style>
