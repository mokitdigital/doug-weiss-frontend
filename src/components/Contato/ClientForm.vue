<template>
  <b-container id="formulario">
    <b-row>
      <b-col>
        <div>
          <b-form
            @submit="onSubmit"
            v-if="show"
            class="my-4"
          >
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
  </b-container>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import { formService } from '../../_services/formularios.service'

export default {
  data () {
    return {
      form: {
        nome: '',
        sobrenome: '',
        email: '',
        celular: '',
        empresa: '',
        motivo: '',
        descricao: ''
      },
      motivos: [{ text: 'Selecione o Motivo', value: null }, 'Stories', 'Posts', 'Paródias', 'Outro'],
      show: true
    }
  },
  directives: {
    mask: AwesomeMask
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      formService
        .sendMessages(this.form)
        .then(response => {
          alert(JSON.stringify(response))
          this.show = false
        })
        .catch(error => {
          this.$swal('Erro ao enviar mensagem')
          console.log(error)
        })
    }
  }
}
</script>

<style>

form {
  background-color: #383838;
  border-radius: 5px;
  padding: 50px;
}

label {
  color: #fff;
}
</style>
