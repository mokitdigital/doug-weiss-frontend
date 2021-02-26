<template>
  <div id="app">
    <Header></Header>
    <About></About>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/NewHeader.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    About,
    Footer
  },
  mounted () {
    if (this.$route.path !== '/parodias') this.$router.push('/parodias')
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
