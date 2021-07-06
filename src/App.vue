<template>
  <div id="app">
    <topbar />
    <sidebar />
    <router-view/>
    <footer-comp />
    <Login></Login>
  </div>
</template>
<script>
import Login from './components/Modals/Login'
import Sidebar from './components/Commom/Sidebar.vue'
import Topbar from './components/Commom/Topbar.vue'
import Footer from './views/Footer.vue'

export default {
  components: {
    Login,
    'footer-comp': Footer,
    Topbar,
    Sidebar
  },
  mounted () {
    if (localStorage.getItem('dougweiss')) {
      this.$router.push('/contato/clientes')
    } else if (this.$route.path !== '/') {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #212529;
}
</style>
