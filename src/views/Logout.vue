<template>
  <div class="logout-container">
    <Card>
      <h1>¿Estás seguro de cerrar sesión?</h1>
      <div class="buttons-group">
        <Btn>Si</Btn>
        <Btn>No</Btn>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/common/Card.vue";
import Btn from "@/components/common/Btn.vue";

export default defineComponent({
  name: "Logout",
  components: { Card, Btn },
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

.buttons-group
  display: flex
  gap: 0.5rem
</style>
