<template>
  <button class="submit" align="center">
    <slot />
  </button>
</template>
<script>
export default {
  name: "Btn",
};
</script>
<style lang="stylus" scoped>
button
  cursor: pointer
  border-radius: 5em
  color: #fff
  background-color: #E040FB
  border: 0
  padding: 10px 40px
  font-family: 'Ubuntu', sans-serif
  font-size: 13px
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04)
  transition: background-color 0.5s ease

button:hover
  background-color: #9C27B0
</style>
