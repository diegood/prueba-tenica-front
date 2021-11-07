<template>
  <Card class="user-card">
    <h1>{{ user.name }} {{ user.surname }}</h1>
    <div class="info-row">
      <label>id:</label>
      <span>{{ user.id }}</span>
    </div>
    <div class="info-row">
      <label>correo: </label>
      <span>{{ user.email }}</span>
    </div>
    <div class="delete">
      <btn @click="deleteUser()" :disabled="showDelete()">Eliminar</btn>
    </div>
  </Card>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent } from 'vue'
import Card from '@/components/common/Card.vue'
import { User } from '@/models/User'
import Btn from './common/Btn.vue'
import services from '@/services/index'

export default defineComponent({
  name: 'UserCard',
  components: {
    Card,
    Btn,
  },
  props: {
    user: {
      type: User,
      default: () => {
        return {} as User
      },
    },
  },
  setup(props, { emit }) {
    const store = useStore()

    const deleteUser = (): void => {
      services.User.remove(props.user.id || '')
      store.dispatch('deleteUser', props.user)
    }
    return { deleteUser }
  },
  methods: {
    showDelete(): boolean {
      return this.user.id === useStore().getters.getUserLogged.id
    },
  },
})
</script>

<style lang="stylus" scoped>
.user-card
  width: auto;
  padding: 2em;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  height: max-content;
  &:hover
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

.info-row
  display: flex
  flex-direction: row;
  gap: 8px;
  align-self: flex-start;

.info-row label
  font-weight: bold

.info-row span
  flex: 1
.delete
  display: flex
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
</style>
