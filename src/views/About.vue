<template>
  <div id="about">
    <b-row>
      <b-col class="text-center">
        <b-nav class="mt-5" align="center">
          <b-nav-item @click="routerAndScrollTo('#parodias', '/parodias')">
            Paródias
          </b-nav-item>
          <b-nav-item>
            <router-link to="/fotos" v-scroll-to="'#fotos'">
              Fotos
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/parcerias" v-scroll-to="'#parcerias'">
              Parcerias
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/entrevistas" v-scroll-to="'#entrevistas'">
              Entrevistas
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/contato" v-scroll-to="'#contato'">
              Contato
            </router-link>
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    routerAndScrollTo (element, to) {
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;900&display=swap');

* {
  overflow-x: hidden;
}
#about {
  background-color: #222222;
  a {
    color: #fff;
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
  }
  a:hover {
    color: #bbb8b8;
  }
}

@media screen and (max-width: 516px) {
  #about {
    a {
      font-size: 17px;
    }
  }
}
</style>
