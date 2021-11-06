<template>
  <div class="card-wrapper">
    <Card>
      <h1>Ingreso</h1>
      <form>
        <Input class="input" type="text" placeholder="email" />
        <Input class="input" type="password" placeholder="Contraseña" />
        <Btn class="submit">Ingresar</Btn>
        <router-link :to="{ name: 'sign-up' }" class="sign-up-btn">
          Crear una cuenta
        </router-link>
      </form>
    </Card>
  </div>
</template>
<script lang="ts">
import Input from "@/components/common/Input.vue";
import Card from "@/components/common/Card.vue";
import Btn from "@/components/common/Btn.vue";

export default {
  name: "login",
  components: { Input, Card, Btn },
};
</script>
<style lang="stylus" scoped>
.card-wrapper
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
