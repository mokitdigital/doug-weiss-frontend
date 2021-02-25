<template>
  <div class="container">
    <div class="row form">
      <b-form class="col-md-5 my-5" @submit="onSubmit">
        <b-form-group>
          <b-form-file
            @change="handleImage"
            placeholder="Coloque o logotipo de sua empresa..."
          ></b-form-file>
        </b-form-group>

        <b-button @click="image" class="mb-3">Ver Imagem</b-button>
        <img :src="form.imagem" v-if="showImage" class="ml-4 mb-2" width="200">

        <b-form-group
          description="Coloque um email valido para que possamos entrar em contato."
        >
          <b-form-input
            v-model="form.email"
            type="email"
            placeholder="Email de contato"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          description="Coloque um celular/telefone valido para que possamos entrar em contato."
          class="row"
          style="margin-left: 2px;"
        >
          <b-form-input
            v-model="form.ddd"
            type="number"
            placeholder="DDD"
            required
            max="99"
            class="col-3"
          >
          </b-form-input>
          <b-form-input
            v-model="form.celular"
            type="tel"
            placeholder="Celular para contato"
            required
            class="col-9 mt-1"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            v-model="form.nomeEmpresa"
            placeholder="Nome da empresa"
            maxlength="15"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <input
            class="form-control mt-4"
            v-model="form.nomeResponsavel"
            placeholder="Nome do Responsavel"
            maxlength="15"
            required
          />
        </b-form-group>

        <b-form-group
          description="Crie um nome de usuario. Ex.: dougweiss"
        >
          <input
            class="form-control mt-4"
            v-model="form.nomeUsuario"
            placeholder="Nome de Usuario"
            maxlength="15"
            required
          />
        </b-form-group>

        <b-form-group
          description="Senha no minimo 8 caracteres"
        >
          <input
            type="password"
            class="form-control mt-4"
            v-model="form.password"
            placeholder="Crie uma Senha"
            minlength="8"
            required
          />
        </b-form-group>

        <b-form-group
        >
          <input
            type="password"
            class="form-control mt-4"
            v-model="repeatPassword"
            placeholder="Repita a senha"
            required
          />
        </b-form-group>

        <b-button
          type="submit"
          class="mr-4"
          variant="primary"
        >
          Cadastrar
        </b-button>
        <b-alert>Ola</b-alert>
      </b-form>
      <div class="col-md-2">
      </div>
      <div class="col-md-5 mt-4 float-right">
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
        imagem: null,
        email: '',
        ddd: '',
        celular: '',
        nomeEmpresa: '',
        nomeResponsavel: '',
        nomeUsuario: '',
        password: ''
      },
      index: null,
      file: null,
      showImage: false,
      repeatPassword: ''
    }
  },
  methods: {
    handleImage (e) {
      const selectedImage = e.target.files[0]
      this.base64(selectedImage)
    },
    onSubmit (event) {
      event.preventDefault()

      if (this.form.password !== this.repeatPassword) {
        this.$swal('Senhas nao coincide com a anterior!')
      } else {
        cadastroService.createCadastro(this.form).then(response => {
          this.$router.push('/cadastro/login')
        }).catch(error => {
          this.$swal('Erro ao fazer o cadastro!')
          console.log(error)
        })
      }
    },
    base64 (fileObject) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.form.imagem = String(e.target.result)
      }

      reader.readAsDataURL(fileObject)
    },
    image () {
      if (!this.showImage) {
        this.showImage = true
      } else {
        this.showImage = false
      }
    }
  }
}
</script>

<style>

</style>
