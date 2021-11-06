<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="stylus" scoped>
.card
  background-color: #FFFFFF
  width: 400px
  border-radius: 1.5em
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14)
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  gap: 1em
  padding: 2em
</style>
