<template>
  <b-container id="formulario">
    <b-row class="my-4 text-center">
      <b-col cols="6">
        <h1>Alcance por Genero</h1>
        <GChart
          :settings="{ packages: ['corechart', 'table', 'map'] }"
          type="PieChart"
          :data="genero"
          class="animate__animated animate__backInLeft animate__slow gchart"
        />
      </b-col>
      <b-col cols="6">
        <h1>Alcance por Idade</h1>
        <GChart
          :settings="{ packages: ['corechart', 'table', 'map'] }"
          type="ColumnChart"
          :data="idade"
          class="animate__animated animate__backInLeft animate__slow gchart"
        />
      </b-col>
    </b-row>
    <b-row class="my-4 text-center">
      <b-col cols="6">
        <h1>Media por Stories</h1>
        <GChart
          :settings="{ packages: ['corechart', 'table', 'map'] }"
          type="LineChart"
          :data="stories"
          class="animate__animated animate__backInLeft animate__slow gchart"
        />
      </b-col>
      <b-col cols="6">
        <h1>Principais Localizações</h1>
        <GChart
          :settings="{ packages: ['corechart', 'table', 'map'] }"
          type="BarChart"
          :data="cidades"
          class="animate__animated animate__backInLeft animate__slow gchart"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-form
            @submit="onSubmit"
            v-if="show"
            class="my-4 text-white"
          >
            <h1 class="text-white text-center" style="font-size: 25px;">Entre em contato comigo!</h1>
            <div class="col-sm text-center central my-4">
              <a href="https://www.facebook.com/dougweiss20" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon class="icons" :icon="facebook" size="2x" style="color: #fff; margin: 0 20px;" />
              </a>
              <a href="https://www.instagram.com/doug.weiss/" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon class="icons" :icon="instagram" size="2x" style="color: #fff; margin: 0 20px;" />
              </a>
              <h3 class="my-4">ou</h3>
            </div>
            <b-form-group
              label="Coloque seu nome:"
              label-for="input-name"
            >
              <b-form-input
                id="input-name"
                v-model="form.nome"
                type="text"
                placeholder="Primeiro Nome"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Coloque seu sobrenome:"
              label-for="input-lastname"
            >
              <b-form-input
                id="input-lastname"
                v-model="form.sobrenome"
                type="text"
                placeholder="Sobrenome"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Coloque seu email:"
              label-for="input-email"
              description="Coloque um email válido para que possamos entrar em contato."
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="email"
                placeholder="Email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Coloque seu celular:"
              label-for="input-cel"
              description="Coloque um celular válido para que possamos entrar em contato."
            >
              <b-form-input
                id="input-cel"
                v-model="form.celular"
                type="tel"
                placeholder="(51) 99999-9999"
                v-mask="'(99) 99999-9999'"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Coloque sua empresa:"
              label-for="input-business"
            >
              <b-form-input
                id="input-business"
                v-model="form.empresa"
                type="text"
                placeholder="Nome da Empresa"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Coloque o motivo para contato:"
              label-for="input-contact"
            >
              <b-form-select
                id="input-contact"
                v-model="form.motivo"
                :options="motivos"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              label="Descreva os motivos de seu contato:"
              label-for="input-describe"
              class="my-3"
            >
              <b-form-textarea
                id="input-describe"
                v-model="form.descricao"
                placeholder="Coloque os detalhes do seu contato..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Enviar</b-button>
            <b-spinner label="Spinning" class="mx-4 mt-2 text-" v-if="loading">Enviando mensagem</b-spinner>
          </b-form>
          <div
            v-else
            class="my-4"
          >
            <b-card
              overlay
              img-src="https://picsum.photos/900/250/?image=3"
              img-alt="Envio com sucesso"
              text-variant="white"
              title="Enviado com sucesso!"
            >
              <b-card-text>
                Espere que Doug Weiss entrará logo que visualizar seu contato.
              </b-card-text>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="my-4">
        <b-button variant="danger" @click="login()">Login</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import { formService } from '../../_services/formularios.service'
import graphics1 from '../../assets/img/graphics1.jpg'
import graphics2 from '../../assets/img/graphics2.jpg'
import graphics3 from '../../assets/img/graphics3.jpg'
import { GChart } from 'vue-google-charts'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  data () {
    return {
      facebook: faFacebookF,
      twitter: faTwitter,
      instagram: faInstagram,
      genero: [
        ['Genero', '%'],
        ['Mulheres', 75.5],
        ['Homens', 24.4]
      ],
      stories: [
        ['Últimos Stories', 'Visualizações'],
        ['Seg', 2835],
        ['Ter', 2863],
        ['Qua', 2875],
        ['Qui', 2937],
        ['Sex', 3006],
        ['Sáb', 3150]
      ],
      idade: [
        ['Idade', '%'],
        ['13-17', 5],
        ['18-24', 26.4],
        ['25-34', 38.3],
        ['35-44', 21.5],
        ['45-64', 8.2],
        ['65+', 0.4]
      ],
      cidades: [
        ['Cidades', '%'],
        ['Gravataí', 41.8],
        ['Cachoeirinha', 10],
        ['Porto Alegre', 8.8],
        ['Taquará', 1.8],
        ['São Paulo', 1.8]
      ],
      form: {
        nome: '',
        sobrenome: '',
        email: '',
        celular: '',
        empresa: '',
        motivo: '',
        descricao: '',
        dataHora: ''
      },
      motivos: [{ text: 'Selecione o Motivo', value: null }, 'Stories', 'Posts', 'Paródias', 'Outro'],
      show: true,
      loading: false,
      images: [
        graphics1,
        graphics2,
        graphics3
      ],
      index: null
    }
  },
  components: {
    GChart,
    FontAwesomeIcon
  },
  directives: {
    mask: AwesomeMask
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.form.dataHora = dayjs().format('DD/MM/YYYY HH:mm')
      this.loading = true
      formService
        .sendMessages(this.form)
        .then(() => {
          this.loading = false
          this.show = false
        })
        .catch(error => {
          this.loading = false
          this.$swal('Erro ao enviar mensagem')
          console.log(error)
        })
    },
    getDias () {
      alert(dayjs('2018 Enero 15', 'YYYY MMMM DD', 'pt-br'))
    },
    login () {
      this.$router.push('/contato/login')
    }
  }
}
</script>

<style scoped>
form {
  background-color: #383838;
  border-radius: 5px;
  padding: 50px;
}

h1 {
  color: #fff;
  font-size: 15px;
}

.gchart {
  border-radius: 5px;
}
</style>
