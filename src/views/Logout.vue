<template>
  <div class="logout-container">
    <Card>
      <h1>¿Estás seguro de cerrar sesión?</h1>
      <div class="buttons-group">
        <Btn @click="logout()">Si</Btn>
        <Btn @click="goToUsers()">No</Btn>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import Card from '@/components/common/Card.vue'
import Btn from '@/components/common/Btn.vue'

export default defineComponent({
  name: 'Logout',
  components: { Card, Btn },
  setup() {
    const store = useStore()
    const logout = () => {
      store.dispatch('logout')
      router.push({ name: 'login' })
    }
    const goToUsers = () => router.push({ name: 'users' })
    return { logout, goToUsers }
  },
})
</script>

<style lang="stylus" scoped>
.logout-container
  display: flex
  justify-content: center
  height: 100vh
  align-items: center

.buttons-group
  display: flex
  gap: 0.5rem
</style>
