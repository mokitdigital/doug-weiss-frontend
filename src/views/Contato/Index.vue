<template>
  <div id="contato">
    <router-view />
  </div>
</template>

<script>

export default {
  mounted () {
    /* if (localStorage.getItem('token_empresa')) {
      this.$router.push('/contato/chat')
    } else if (localStorage.getItem('token_doug')) {
      this.$router.push('/contato/administrador')
    } else {
      this.$router.push('/contato/login')
    } */
    this.$router.push('/contato/formulario')
  }
}
</script>

<style>
</style>
