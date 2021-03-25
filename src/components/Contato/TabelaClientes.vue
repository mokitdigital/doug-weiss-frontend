<template>
  <b-container id="tabela">
    <hr style="border-color: #fff;">
    <b-row>
      <div class="col-sm-8">
        <h1 class="mt-4 mx-2 text-white">Tabela de Clientes</h1>
      </div>
      <div class="col-sm-4 d-flex justify-content-end">
        <b-button
          variant="success"
          @click="exit()"
          class="my-4 mx-2"
          pill
        >
          <span>Sair da conta</span>
        </b-button>
      </div>
    </b-row>
    <b-row>
      <div class="col-sm-4 mt-5">
        <b-form-input
          type="text"
          class="my-4"
          @keyup="searchCliente()"
          placeholder="Pesquisar Empresa"
          v-model="search"
          style="border-radius: 1rem;"
        >
        </b-form-input>
      </div>
      <div class="col-sm-4 mt-5">
        <b-button
          variant="dark"
          @click="searchCliente()"
          class="my-4"
          pill
        >
          Procurar
        </b-button>
        <b-button
          variant="danger"
          @click="clearSearchCliente()"
          class="my-4 mx-2"
          pill
        >
          Limpar Tabela
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
          :busy="show"
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
    <b-modal hide-footer id="form-client" hide-header>
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
      show: false,
      countClear: 0
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
      if (this.search !== '') {
        this.newDataTable = []
        this.newDataTable = this.dataTable
        this.dataTable = []
        const length = this.newDataTable.length

        for (let i = 0; i < length; i++) {
          console.log('Dado: ' + this.newDataTable[i].Empresa)
          if (this.newDataTable[i].Empresa.toLowerCase().indexOf(this.search.toLowerCase()) !== -1) {
            this.dataTable.push(this.newDataTable[i])
          }
        }
      } else {
        this.$router.go()
      }
    },
    clearSearchCliente () {
      if (this.countClear === 0) {
        this.dataTable = []
        this.getClientesDataTable()
      }
    },
    closeModal () {
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
