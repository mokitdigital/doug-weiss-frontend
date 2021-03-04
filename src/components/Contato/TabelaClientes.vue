<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table table-variant="dark" striped hover :items="dataTable">
          <template #cell(Empresa)="data">
            <a v-b-modal.modal-1 @click="getClienteUnique(data.value)">{{ data.value }}</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-modal id="modal-1" :title="cliente.Nome_Completo + ' | ' + cliente.Empresa">
      <p class="my-4 p-4 border-bottom">
        <strong>Nome Completo:</strong> {{ cliente.Nome_Completo }}
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Empresa:</strong> {{ cliente.Empresa }}
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Celular:</strong> <a :href="'tel:+' + cliente.celular">{{ cliente.Celular}}</a>
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Email:</strong> <a :href="'mailto:'+ cliente.Email">{{ cliente.Email }}</a>
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Motivo do Contato:</strong> {{ cliente.Motivo }}
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Descricao do Motivo:</strong> {{ cliente.Descricao }}
      </p>
      <p class="my-4 p-4">
        <strong>Data e Hora do Contato:</strong> {{ cliente.DataHora }}</p>
    </b-modal>
  </b-container>
</template>

<script>
import { formService } from '../../_services/formularios.service'
export default {
  data () {
    return {
      dataTable: [],
      cliente: {}
    }
  },
  methods: {
    getClientesDataTable () {
      formService.findMensagens().then(response => {
        for (let index = 0; index < response.data.formularios.length; index++) {
          const element = response.data.formularios[index]

          const newItem = {
            Empresa: `${element.empresa}`,
            Nome_Completo: `${element.nome} ${element.sobrenome}`,
            Motivo: `${element.motivo}`
          }

          this.dataTable.push(newItem)
        }
      })
    },
    getClienteUnique (empresa) {
      formService.findMensagens().then(response => {
        for (let index = 0; index < response.data.formularios.length; index++) {
          const element = response.data.formularios[index]

          if (element.empresa === empresa) {
            const newItem = {
              Empresa: `${element.empresa}`,
              Nome_Completo: `${element.nome} ${element.sobrenome}`,
              Celular: `${element.celular.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}`,
              Email: `${element.email}`,
              Motivo: `${element.motivo}`,
              Descricao: `${element.descricao}`,
              DataHora: `${element.dataHora}`
            }

            this.cliente = newItem
          }
        }
      })
    }
  },
  mounted () {
    this.getClientesDataTable()
  }
}
</script>

<style lang="scss" scoped>
</style>
