<template>
  <b-container id="tabela">
    <b-row>
      <div class="col-sm-4">
        <b-form-input
          type="text"
          class="my-4 rounded"
          @keyup.enter="searchCliente()"
          placeholder="Pesquisar Empresa"
          v-model="search"
        >
        </b-form-input>
      </div>
      <div class="col-sm-4">
        <b-button
          variant="dark"
          @click="searchCliente()"
          class="my-4 rounded"
        >
          Procurar
        </b-button>
        <b-button
          variant="danger"
          @click="clearSearchCliente()"
          class="my-4 mx-2 rounded"
        >
          Limpar
        </b-button>
      </div>
      <div class="col-sm-4 float-sm-left">
        <b-button
          variant="success"
          @click="exit()"
          class="my-4 mx-2"
        >
          Sair
        </b-button>
      </div>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          table-variant="dark"
          striped
          hover
          :items="dataTable"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template #cell(Empresa)="data">
            <a v-b-modal.modal-1 @click="getClienteUnique(data.value)">{{ data.value }}</a>
          </template>
        </b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="customPagination"
        ></b-pagination>

        <p class="mt-3 text-white">Pagina {{ currentPage }}</p>
      </b-col>
    </b-row>
    <b-modal hide-footer id="modal-1" hide-header v-if="show">
      <p class="my-4 p-4 border-bottom">
        <strong>Nome Completo:</strong> {{ cliente.Nome_Completo }}
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Empresa:</strong> {{ cliente.Empresa }}
      </p>
      <p class="my-4 p-4 border-bottom">
        <strong>Celular:</strong> <a :href="'tel:+55' + cliente.Celular">{{ cliente.Celular}}</a>
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
        <strong>Data e Hora do Contato:</strong> {{ cliente.DataHora }}
      </p>

      <b-button
        class="mt-3"
        block
        @click="closeModal()"
      >Fechar</b-button>
      <b-button
        class="mt-3"
        block
        variant="danger"
        @click="deleteCliente()"
      >Excluir</b-button>
    </b-modal>
  </b-container>
</template>

<script>
import { formService } from '../../services/formularios.service'
export default {
  computed: {
    rows () {
      return this.dataTable.length
    }
  },
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      sortBy: 'DataHora',
      sortDesc: true,
      fields: [
        {
          key: 'DataHora',
          sortable: true
        },
        {
          key: 'Empresa',
          sortable: true
        },
        {
          key: 'Motivo',
          sortable: true
        }
      ],
      dataTable: [],
      newDataTable: [],
      cliente: {},
      search: '',
      show: false
    }
  },
  methods: {
    exit () {
      localStorage.clear()
      this.$router.push('/contato/formulario')
    },
    deleteCliente () {
      this.$swal({
        html:
          'Voce tem certeza que quer <em> Excluir </em> ?',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false
      }).then((result) => {
        if (result.value) {
          formService.deleteMensagens(this.cliente).then(() => {
            this.$router.go()
          })
        }
      })

      this.show = false
    },
    searchCliente () {
      this.newDataTable = []
      this.newDataTable = this.dataTable
      this.dataTable = []

      for (let index = 0; index < this.newDataTable.length; index++) {
        const element = this.newDataTable[index]

        if (element.Empresa === this.search) {
          this.dataTable.push(element)
        }
      }
    },
    clearSearchCliente () {
      this.dataTable = []
      this.getClientesDataTable()
    },
    closeModal () {
      this.cliente = {}
      this.show = false
    },
    getClientesDataTable () {
      formService.findMensagens().then(response => {
        for (let index = 0; index < response.data.formularios.length; index++) {
          const element = response.data.formularios[index]
          console.log(element)
          const newItem = {
            Empresa: `${element.empresa}`,
            Motivo: `${element.motivo}`,
            DataHora: `${element.dataHora}`
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

            console.log(newItem.Celular)
            this.cliente = newItem
            this.show = true
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
.customPagination > li > a {
  color: red;
}

.customPagination > li.active > a,
.customPagination > li > a:hover
{
  color: white;
  background-color: green!important;
}

</style>
