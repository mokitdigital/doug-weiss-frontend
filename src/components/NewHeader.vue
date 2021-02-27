<template>
  <div id="header">
    <div id="navbar">
        <div class="btn_group">
          <router-link to="/parodias" class="btn" v-scroll-to="'#parodias'">Paródias</router-link>
          <router-link to="/fotos" class="btn" v-scroll-to="'#fotos'">Fotos</router-link>
          <router-link to="/parcerias" class="btn" v-scroll-to="'#parcerias'">Parcerias</router-link>
          <router-link to="/contato/login" class="btn" v-scroll-to="'#login'">Contato</router-link>
        </div>
        <div class="text-animation">
          <h2>Aqui coloca suas informacoes de visualizacoes, e outros dados importantes.</h2>
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

@keyframes opaciting {
  0% {
    margin-right: -2100px;
    opacity: 1;
  }
  25% {
    opacity: 0.8s;
  }
  50% {
    opacity: 0.5s;
  }
  75% {
    opacity: 0.2s;
  }
  100% {
    margin-left: -2500px;
  }
}

@keyframes opaciting-responsive {
  0% {
    margin-right: -800px;
    opacity: 1;
  }
  25% {
    opacity: 0.8s;
  }
  50% {
    opacity: 0.5s;
  }
  75% {
    opacity: 0.2s;
  }
  100% {
    margin-left: -800px;
  }
}

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
      font-size: 0.65rem;
      margin: 1rem 0.2rem 0.5rem 0.2rem;
      color: #000;
      text-transform: uppercase;
      font-weight: 900;
    }
    .btn {
      text-decoration: none;
      position: relative;
      overflow: hidden;
      width: 80px;
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
    .text-animation {
      text-align: center;
      white-space: nowrap;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      overflow-x: hidden;
      h2 {
        margin-top: 3px;
        font-size: 20px;
        color: #000;
        animation: opaciting-responsive 15s infinite ease-in-out;
      }
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

@media screen and (min-width: 516px) {
  #header {
    #navbar {
      a {
        font-size: 1rem;
      }
      .btn {
        width: 120px;
      }
    }
    #title {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 60px;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  #header {
    display: grid;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 25% 25% 25% 25%;
    height: 100vh;
    overflow: hidden;
    #navbar {
      grid-column-start: 1;
      grid-column-end: 6;
      a {
        font-size: 1.2rem;
      }
      .btn {
        width: 200px;
        height: 50px;
      }
    }
    #title {
      grid-area: 2 / 5 / 5 / 3;
      h1 {
        font-size: 80px;
        height: 120px;
      }
    }
    #img {
      grid-area: 3 / 1 / 5 / 5;
    }

  }
}
</style>
