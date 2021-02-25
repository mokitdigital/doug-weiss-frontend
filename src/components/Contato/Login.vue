<template>
  <div id="login" class="row">
    <b-form class="login col-md-5 m-5">
      <b-input-group prepend="@" class="m-5">
        <b-form-input id="inline-form-input-username" placeholder="Empresa" v-model="form.nomeUsuario"></b-form-input>
      </b-input-group>

      <b-form-input
        id="inline-form-input-name"
        class="m-5"
        v-model="form.password"
        placeholder="Senha"
        type="password"
      ></b-form-input>

      <b-button variant="primary" class="mx-5" @click="login()">Entrar</b-button>
      <b-button variant="dark" class="mx-5 my-4" @click="register()">Registrar-se</b-button>
    </b-form>
    <div class="col-md-1"></div>
    <div class="col-md-5 py-4">
        <gallery :images="images" :index="index" @close="index = null" style="overflow: hidden;"></gallery>
        <div
          class="image animate__animated animate__backInLeft animate__slow"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '500px', height: '200px' }"
        ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
import { cadastroService } from '../../_services/cadastros.service'

export default {
  components: {
    gallery: VueGallery
  },
  data () {
    return {
      images: [
        'https://dummyimage.com/1960/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000'
      ],
      form: {
        nomeUsuario: '',
        password: ''
      },
      index: null
    }
  },
  methods: {
    login () {
      cadastroService.login(this.form).then(response => {
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
      })
    },
    register () {
      this.$router.push('/contato/register')
    }
  }
}
</script>

<style>

</style>
