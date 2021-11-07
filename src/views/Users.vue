<template>
  <div class="content">
    <div class="search-container">
      <input v-model="searchCriteria" class="input" type="text" placeholder="Buscar un Usuario" />
    </div>
    <div class="users">
      <UserCard v-for="user in filterdUser" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import UserCard from '@/components/UserCard.vue'
import Services from '@/services/index'
import { User } from '@/models/User'

export default defineComponent({
  name: 'users',
  components: {
    UserCard,
  },
  setup() {
    const searchCriteria = ref('')
    const store = useStore()

    const getUsers = async () => {
      const users = await Services.User.getUsers()
      store.dispatch('updateUsers', users)
    }
    const filterdUser = computed(() => {
      return store.getters.users
        ? store.getters.users.filter((user: User) => {
            const fullName = `${user.name} ${user.surname}`
            return fullName.toLowerCase().includes(searchCriteria.value.toLowerCase())
          })
        : store.getters.users
    })

    if (!store.getters.hasUsers) getUsers()
    return { searchCriteria, filterdUser }
  },
})
</script>

<style lang="stylus" scoped>
.content
  min-height: 90vh
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 2em
  .search-container
    max-width: 20em
.users
  display: grid
  padding: 4em
  padding-top: 2em
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 0.8rem
</style>
