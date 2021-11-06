<template>
  <div class="logout-container">
    <Card>
      <h1>Crea una cuenta</h1>
      <form>
        <Input class="input" type="text" placeholder="Nombre" />
        <Input class="input" type="text" placeholder="Apellido" />
        <Input class="input" type="text" placeholder="email" />
        <Input class="input" type="password" placeholder="Contraseña" />
        <Btn class="submit">Registrar</Btn>
        <router-link :to="{ name: 'login' }" class="sign-up-btn" href="#">
          Iniciar sesion
        </router-link>
      </form>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/common/Input.vue";
import Card from "@/components/common/Card.vue";
import Btn from "@/components/common/Btn.vue";
export default defineComponent({
  name: "SignUp",
  components: { Input, Card, Btn },
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped>
.logout-container
  display: flex
  justify-content: center
  height: 100vh
  align-items: center

form {
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
