<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table table-variant="dark" striped hover :items="items">
          <template #cell(Nome_Completo)="data">
            <a v-b-modal.modal-1>{{ data.value }}</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </b-container>
</template>

<script>
import { formService } from '../../_services/formularios.service'
export default {
  data () {
    return {
      items: [
        { Nome_Completo: 'Luan', Empresa: 'Dickerson', Motivo: 'Macdonald' },
        { Nome_Completo: 'Antonio', Empresa: 'Larsen', Motivo: 'Shaw' },
        { Nome_Completo: 'Franciele', Empresa: 'Geneva', Motivo: 'Wilson' },
        { Nome_Completo: 'Alberto', Empresa: 'Jami', Motivo: 'Carney' }
      ]
    }
  },
  methods: {
    getClientes () {
      formService.findMensagens().then(response => {
        alert(response)
      })
    }
  },
  mounted () {
    this.getClientes()
  }
}
</script>

<style lang="scss" scoped>
</style>
