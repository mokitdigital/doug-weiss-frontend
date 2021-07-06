<template>
  <b-modal
    header-bg-variant="dark"
    hide-footer
    body-bg-variant="dark"
    body-text-variant="light"
    header-text-variant="light"
    id="modal-login"
    title="Faça seu Login"
    shadow
    no-header
  >
    <b-form style="background-color: transparent;" class="col-12 my-4">

      <b-input-group prepend="@" class="my-4">
        <b-form-input id="inline-form-input-username" placeholder="Empresa" v-model="form.username"></b-form-input>
      </b-input-group>

      <b-form-input
        id="inline-form-input-name"
        class="my-4"
        v-model="form.password"
        placeholder="Senha"
        type="password"
        @keyup.enter="login()"
      ></b-form-input>

      <b-row>
        <b-col class="d-flex justify-content-between" style="overflow-y: hidden;">
          <b-button variant="primary" @click="login()" v-scroll-to="'#tabela'">Entrar</b-button> <br />
          <!-- <b-button variant="dark" class="mx-5 my-4" @click="register()">Registrar-se</b-button> -->
          <b-spinner label="Spinning" class="mx-4 mt-2" v-if="loadingLogin">Enviando mensagem</b-spinner>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
import { authService } from '../../services/auth.service'
import dayjs from 'dayjs'
export default {
  data () {
    return {
      form: {},
      loadingLogin: false
    }
  },
  methods: {
    login () {
      this.loadingLogin = true
      authService.login(this.form).then(response => {
        const KEY = dayjs().format('DDMMYYYYHHmm')
        localStorage.setItem('dougweiss', KEY)
        this.$router.push('/contato/clientes')
        this.$bvModal.hide('modal-login')
        this.loadingLogin = false
      }).catch(() => {
        this.$swal('Senha inválida!')
      })
      /* if (this.form.username === 'dougweiss' && this.form.password === '@senha6534') {
        const KEY = dayjs().format('DDMMYYYYHHmm')
        localStorage.setItem('dougweiss', KEY)
        this.$router.push('/contato/clientes')
      } else {
        this.$swal('Senha inválida!')
      } */
    }
  }
}
</script>

<style>

</style>
