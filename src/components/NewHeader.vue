<template>
  <div id="header">
    <div id="navbar">
        <div class="btn_group">
          <router-link to="/parodias" class="btn" v-scroll-to="'#parodias'">Paródias</router-link>
          <router-link to="/fotos" class="btn" v-scroll-to="'#fotos'">Fotos</router-link>
          <router-link to="/parcerias" class="btn" v-scroll-to="'#parcerias'">Parcerias</router-link>
          <router-link to="/contato/login" class="btn" v-scroll-to="'#login'">Contato</router-link>
        </div>
    </div>
    <div id="title" class="animate__animated animate__zoomIn animate__slow">
      <h1>Doug Weiss</h1>
      <p>Divulgue sua empresa comigo!</p>
    </div>
    <div id="img" class="animate__animated animate__zoomIn animate__slow">
      <img :src="img" alt="background-doug">
    </div>
  </div>
</template>

<script>
import IMG from '../assets/img/img-background-doug.png'
export default {
  data () {
    return {
      img: IMG
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;900&display=swap');

#header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  #navbar {
    .btn-group {
      display: flex;
    }
    a {
      font-size: 0.7rem;
      margin: 1rem 0.5rem 0.5rem 0.5rem;
      color: #000;
      text-transform: uppercase;
      font-weight: 900;
    }
    .btn {
      text-decoration: none;
      position: relative;
      overflow: hidden;
      width: 90px;
      height: 40px;
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
  }
  #title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    h1 {
      text-decoration: line-through 2px rgb(255, 255, 255);
      font-size: 50px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 900;
      height: 90px;
    }
    p {
      font-family: 'Noto Sans KR', sans-serif;
    }
  }
}
</style>
