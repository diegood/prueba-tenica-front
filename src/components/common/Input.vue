<template>
  <input class="input" v-bind="$attrs" />
</template>

<script lang="ts">
export default {
  name: "Input",
  functional: true,
};
</script>

<style lang="stylus" scoped>

.input {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}

.input:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}
</style>
