<template>
  <nav>
    <h2>Hiberus Test</h2>
    <span>{{ store.getters.getUserLogged.name }} {{ store.getters.getUserLogged.surname }}</span>
    <btn @click="logOut">Cerrar sesion</btn>
  </nav>
</template>

<script lang="ts" setup>
import router from '@/router'
import { useStore } from 'vuex'
import Btn from './common/Btn.vue'
const store = useStore()
const logOut = () => {
  router.push({ name: 'logout' })
}
</script>

<style lang="stylus" scoped>
nav
  background-color #eacbdc
  padding 0.5em
  display grid
  grid-template-columns 2fr 14fr 2fr 2fr
  align-items center
  h2
    color: #ba5ba3
  span
    grid-column-start 3
    color: #ba5ba3
  button
    grid-column-start 4
</style>
