<template>
  <b-sidebar
    bg-variant="dark"
    text-variant="light"
    id="sidebar-2"
    shadow
    no-header
    ref="sidebar2"
  >
    <b-row>
      <b-col class="text-center mx-3 mt-3 d-flex justify-content-end">
        <h1 v-b-toggle.sidebar-2><font-awesome-icon icon="times"></font-awesome-icon></h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ul class="mx-4">
          <li class="my-5 li-menu">
            <router-link
              :to="{
               name: 'Index',
               hash: ''
              }"
              active-class="active"
            >
              <span class="ml-3 text-white">Início</span>
            </router-link>
          </li>
          <li class="my-5 li-menu">
            <router-link
              :to="{
               name: 'Parodias',
               hash: '#parodias'
              }"
            >
              <span class="ml-3 text-white">Paródias</span>
            </router-link>
          </li>
          <li class="my-5 li-menu">
            <router-link
              :to="{
               name: 'Fotos',
               hash: '#fotos'
              }"
            >
              <span class="ml-3 text-white">Fotos</span>
            </router-link>
          </li>
          <li class="my-5 li-menu">
            <router-link
              :to="{
               name: 'Parcerias',
               hash: '#parcerias'
              }"
            >
              <span class="ml-3 text-white">Parcerias</span>
            </router-link>
          </li>
          <li class="my-5 li-menu">
            <router-link
              :to="{
               name: 'Entrevistas',
               hash: '#entrevistas'
              }"
            >
              <span class="ml-3 text-white">Entrevistas</span>
            </router-link>
          </li>
          <li class="my-5 li-menu">
            <router-link
              :to="{
               name: 'Contato',
               hash: '#contato'
              }"
            >
              <span class="ml-3 text-white">Entre em contato</span>
            </router-link>
          </li>
        </ul>
      </b-col>
    </b-row>
    <template #footer>
      <hr style="border-color: #fff;" />
      <ul class="mx-4">
        <li class="mb-5 li-menu" @click="openLogin()">
          <span class="ml-3 text-white">Dashboard</span>
        </li>
      </ul>
    </template>
  </b-sidebar>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    openLogin () {
      if (localStorage.getItem('dougweiss')) {
        this.$router.push('/contato/clientes')
      } else {
        this.$bvModal.show('modal-login')
      }
    }
  }
}
</script>

<style>
.b-sidebar-footer {
  overflow-y: hidden !important;
}

.li-menu {
  font-weight: 400;
  border-left: 2px solid #fff;
  cursor: pointer;
}

.li-menu:hover {
  font-weight: 700;
  border-left: 4px solid #fff;
  cursor: pointer;
}

li a:hover {
  text-decoration: none;
}
</style>
