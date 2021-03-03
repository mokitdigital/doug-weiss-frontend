<template>
  <b-container>
    <b-row id="login">
      <b-form class="login col-6 my-4">

        <b-input-group prepend="@" class="my-4">
          <b-form-input id="inline-form-input-username" placeholder="Empresa" v-model="form.nomeUsuario"></b-form-input>
        </b-input-group>

        <b-form-input
          id="inline-form-input-name"
          class="my-4"
          v-model="form.password"
          placeholder="Senha"
          type="password"
        ></b-form-input>

        <b-button variant="primary" @click="login()">Entrar</b-button>
        <!-- <b-button variant="dark" class="mx-5 my-4" @click="register()">Registrar-se</b-button> -->
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
// import { cadastroService } from '../../_services/cadastros.service'

export default {
  data () {
    return {
      form: {
        nomeUsuario: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.form.nomeUsuario === 'dougweiss' && this.form.password === '1234') {
        this.$router.push('/contato/clientes')
      }
      /* cadastroService.login(this.form).then(response => {
        if (response.status === 200) {
          this.$swal(`${response.data.msg}! Clique em [ Contato ] para entrar no chat.`)
          if (this.form.nomeUsuario === 'dougweiss') {
            localStorage.setItem('token_doug', (Math.random() * 100))
            this.$router.push('/contato/administrador')
          } else {
            localStorage.setItem('token_empresa', (Math.random() * 100))
            this.$router.push('/contrato/chat')
          }
        } else {
          this.$swal(`${response.data.error}! Verifique se voce esta cadastrado.`)
        }
      }) */
    },
    register () {
      this.$router.push('/contato/register')
    }
  }
}
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
