<template>
  <div class="logout-container">
    <Card>
      <h1>Crea una cuenta</h1>
      <div class="form">
        <input class="input" type="text" placeholder="Nombre" v-model="user.name" />
        <input class="input" type="text" placeholder="Apellido" v-model="user.surname" />
        <input class="input" type="text" placeholder="email" v-model="user.email" />
        <input class="input" type="password" placeholder="Contraseña" v-model="user.password" />
        <Btn class="submit" @click="signUp()">Registrar</Btn>
        <router-link :to="{ name: 'login' }" class="sign-up-btn" href="#"> Iniciar sesion </router-link>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
import Services from '@/services/index'
import Card from '@/components/common/Card.vue'
import Btn from '@/components/common/Btn.vue'
import { ref } from 'vue'
import { Auth } from '@/models/Auth'
import { useStore } from 'vuex'
import { User } from '@/models/User'
export default defineComponent({
  name: 'SignUp',
  components: { Card, Btn },
  setup() {
    const store = useStore()
    const error = ref('')
    const user = ref({} as User)

    const signUp = async (): Promise<void> => {
      try {
        await Services.Authentication.signUp(user.value)
        login()
      } catch (e) {
        error.value = 'No se pudo registar'
        throw e
      }
    }

    const login = async (): Promise<void> => {
      await getCredentials()
      await setUserAsLogged()
      router.push({ name: 'users' })
    }

    const getCredentials = async (): Promise<void> => {
      try {
        const credential: Auth = await Services.Authentication.login(user.value.email, user.value.password || '')
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

    return { login, signUp, error, user }
  },
})
</script>

<style lang="stylus" scoped>
.logout-container
  display: flex
  justify-content: center
  height: 100vh
  align-items: center

.form {
  width 100%
  display: flex
  flex-direction: column
  justify-content: center
  gap: 1rem
  align-items: center
}

.submit:hover{
  background-color: #9C27B0;
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
</style>
