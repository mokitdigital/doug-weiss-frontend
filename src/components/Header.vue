<template>
  <div class="menu">
    <b-row>
      <div class="col-md ml-auto btn-group">
        <b-nav class="pt-4 float-right mr-4">
          <router-link to="/parodias" class="btn" v-scroll-to="'#parodias'">Paródias</router-link>
          <router-link to="/fotos" class="btn" v-scroll-to="'#fotos'">Fotos</router-link>
          <router-link to="/parcerias" class="btn" v-scroll-to="'#parcerias'">Parcerias</router-link>
          <router-link to="/contato/formulario" class="btn" v-scroll-to="'#formulario'">Contato</router-link>
        </b-nav>
      </div>
    </b-row>
    <b-row style="height: 50vh;">
      <b-col class="ml-auto">
        <div class="text">
          <h1>Doug Weiss</h1>
          <p class="ml-3">Divulgue sua empresa comigo!</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;900&display=swap');

* {
  overflow: hidden;
}

h1 {
  text-decoration: line-through 2px rgb(255, 255, 255);
}

.menu {
  background: url('../assets/img/doug1.png') no-repeat;
  background-size: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;

  .btn-group {
    display: inline;
  }
  a {
    font-size: 20px;
    margin: 1rem;
    color: #000;
    text-transform: uppercase;
    font-weight: 900;
  }
  .btn {
    text-decoration: none;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 60px;
    padding: 10px;
  }
  .btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(0, 0, 0, 0.4),
      transparent
    );
    transition: all 650ms;
  }
  .btn:hover:before {
    left: 100%;
  }

  .text {
    position: relative;
    float: right;
    margin: 200px 100px 0 0;
    h1{
      font-size: 65px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 900;
      height: 120px;
    }
    p {
      font-size: 20px;
      font-family: 'Noto Sans KR', sans-serif;
      margin-top: -15px;
    }
  }
}

@media screen and (max-width: 960px) {
  .menu {
    background-position: bottom;
    background-color: #fff;

    .text {
      h1 {
        font-size: 40px;
        margin-left: 10%;
      }
    }
    .btn-group {
      display: none;
    }
  }
}
</style>
