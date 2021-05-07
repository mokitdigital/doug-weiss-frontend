<template>
  <b-container id="tabela" class="bg-dark my-5 rounded">
    <b-row>
      <b-col cols="6" sm="8">
        <h1 class="mt-4 mx-2 text-white">Meus Clientes</h1>
      </b-col>
      <b-col cols="6" sm="4" class="d-flex justify-content-end my-5 my-md-0">
        <b-button
          @click="exit()"
          class="my-4 mx-2 blue-gray-100"
          pill
          size="sm"
        >
          <span>Sair da conta</span>
        </b-button>
      </b-col>
    </b-row>
    <hr class="text-white">
    <b-row>
      <b-col cols="8" sm="4" class="mt-5">
        <b-form-input
          type="text"
          class="my-4"
          @keydown="searchCliente()"
          placeholder="Pesquisar Empresa"
          v-model="search"
          style="border-radius: 1rem;"
        >
        </b-form-input>
      </b-col>
      <b-col cols="4" sm="4" class="mt-5">
        <b-button
          @click="clearSearchCliente()"
          class="my-4 mx-2 blue-gray-900"
          pill
          size="md"
        >
          Limpar
        </b-button>
      </b-col>
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
          :busy="show"
          style="cursor: pointer;"
          title="Clique em EMPRESA para + informações"
        >
          <template v-slot:table-busy>
            <div class="text-center text-info my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Carregando...</strong>
            </div>
          </template>
          <template #cell(Empresa)="data">
            <a @click="getClienteUnique(data.value)">{{ data.value }}</a>
          </template>
        </b-table>

        <b-modal id="spinner-loading" size="sm" hide-footer hide-header centered>
          <b-row>
            <b-col cols="12" sm="12" md="12" lg="12" class="d-flex justify-content-center align-items-center">
              <b-spinner label="Spinning" class="mx-4 mt-2" v-if="loading">Enviando mensagem</b-spinner>
            </b-col>
          </b-row>
        </b-modal>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="customPagination"
          align="center"
        ></b-pagination>

        <p class="mt-3 text-white">Pagina {{ currentPage }}</p>
      </b-col>
    </b-row>
    <b-modal hide-footer id="form-client" :title="cliente.Nome_Completo + ' | ' + cliente.Empresa">
      <b-list-group>
        <b-list-group-item button>
          <p>
            <strong>Celular:</strong> <a :href="'tel:+55' + cliente.Celular">{{ cliente.Celular}}</a>
          </p>
        </b-list-group-item>
        <b-list-group-item button>
          <p >
            <strong>Email:</strong> <a :href="'mailto:'+ cliente.Email">{{ cliente.Email }}</a>
          </p>
        </b-list-group-item>
        <b-list-group-item button>
          <p >
            <strong>Motivo do Contato:</strong> {{ cliente.Motivo }}
          </p>
        </b-list-group-item>
        <b-list-group-item button>
          <p >
            <strong>Descrição do Motivo:</strong> {{ cliente.Descricao }}
          </p>
        </b-list-group-item>
        <b-list-group-item button>
          <p>
            <strong>Data e Hora do Contato:</strong> {{ cliente.DataHora }}
          </p>
        </b-list-group-item>
      </b-list-group>

      <b-row>
        <b-col>
          <b-button
            class="mt-3 blue-gray-900"
            block
            @click="closeModal()"
          >Fechar</b-button>
        </b-col>
        <b-col>
          <b-button
            class="mt-3"
            block
            variant="danger"
            @click="deleteCliente()"
          >Excluir</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-container>
</template>

<script>
import { formService } from '../../services/formularios.service'
import { tableService } from '../../services/table.service'
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
          label: 'Data & Hora',
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
      show: false,
      countClear: 0,
      loading: false
    }
  },
  methods: {
    exit () {
      localStorage.clear()
      this.$router.push('/contato/formulario')
    },
    deleteCliente () {
      this.$bvModal.hide('spinner-loading')
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
      /* his.newDataTable = []
      this.newDataTable = this.dataTable
      this.dataTable = []
      const length = this.newDataTable.length

      for (let i = 0; i < length; i++) {
        if (this.newDataTable[i].Empresa.toLowerCase().indexOf(this.search.toLowerCase()) !== -1) {
          this.dataTable.push(this.newDataTable[i])
        }
      } */
      tableService.searchBusiness(this.search.toLowerCase()).then(response => {
        this.dataTable = []
        for (let index = 0; index < response.data.empresas.length; index++) {
          const element = response.data.empresas[index]
          const newItem = {
            Empresa: `${element.empresa}`,
            Motivo: `${element.motivo}`,
            DataHora: `${element.dataHora}`
          }

          this.dataTable.push(newItem)
        }
      })
    },
    clearSearchCliente () {
      if (this.countClear === 0) {
        this.dataTable = []
        this.getClientesDataTable()
      }
      this.search = ''
    },
    closeModal () {
      this.$bvModal.hide('spinner-loading')
      this.$bvModal.hide('form-client')
    },
    getClientesDataTable () {
      formService.findMensagens().then(response => {
        for (let index = 0; index < response.data.formularios.length; index++) {
          const element = response.data.formularios[index]
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
      this.$bvModal.show('spinner-loading')
      this.loading = true
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
            this.$bvModal.show('form-client')
            this.loading = false
            this.$bvModal.hide('spinner-loading')
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
.blue-gray-900 {
  background-color: #102A43;
}
.blue-gray {
  background-color: #627D9B;
}

.blue-gray-100 {
  background-color: #486581;
}

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
