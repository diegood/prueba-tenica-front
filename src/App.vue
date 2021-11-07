<template>
  <main>
    <nav-bar v-if="showNavBar" />
    <router-view />
  </main>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { useStore } from 'vuex'
export default {
  components: {
    NavBar,
  },
  created() {
    useStore().dispatch('fetchAuhtenticationStatus')
  },
  computed: {
    showNavBar() {
      return useStore().state.authentication.userLogged
    },
  },
}
</script>

<style lang="stylus">
#app
  background-color #F3EBF6
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video
    margin 0
    padding 0
    border 0
    font-size 100%
    font inherit
    vertical-align baseline

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section
    display block

body
    line-height 1

h1
  color: #8C55AA
  font-family: 'Ubuntu', sans-serif
  font-weight: bold
  font-size: 23px
  height: 1em

.input
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


.input:focus
  border 2px solid rgba(0, 0, 0, 0.18) !important
</style>
