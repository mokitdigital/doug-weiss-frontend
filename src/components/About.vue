<template>
  <div id="about">
    <b-row>
      <b-col class="text-center">
        <b-nav class="mt-5" align="center">
          <b-nav-item>
            <router-link to="/parodias" v-scroll-to="'#parodias'">
              Parodias
            </router-link>
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
</style>
