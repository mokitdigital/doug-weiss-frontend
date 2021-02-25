<template>
  <div class="home">
    <h1 class="animate__animated animate__slideInUp text">Doug Weiss</h1>

    <div class="text-animation">
      <h2>Melhores paródias diretamente para seu estabelecimento.</h2>
    </div>

    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      :infinite="true"
      :speed="500"
      :slidesToShow="1"
      class="vue-slick"
    >
      <div>
        <img :src="doug1" alt="" class="img-slick">
      </div>
      <div>
        <img :src="doug2" alt="" class="img-slick">
      </div>
      <div>
        <img :src="doug3" alt="" class="img-slick">
      </div>
    </VueSlickCarousel>

    <div class="graphics">
      <b-card-group deck>
        <b-card
          header="Meus Alcances"
          header-tag="header"
          title="+ de 5mil visualizações nos stories!"
          class="animate__animated animate__bounce graphics-card"
        >
          <img :src="grap" alt="">
          <a href="#" class="btn" @click="showAlert()">Ver detalhes</a>
        </b-card>

        <b-card
          title="+ de 10mil visualizações nos vídeos!"
          header-tag="header"
          class="animate__animated animate__bounce graphics-card"
        >
          <template #header>
            <h6 class="mb-0">Visualizações em vídeos</h6>
          </template>
          <img :src="grap" alt="">
          <a href="#" class="btn" @click="showAlert()">Ver Detalhes</a>
        </b-card>
      </b-card-group>
    </div>

    <div class="button-area">
      <a href="#" class="btn">Paródias</a>
      <a href="#" class="btn">Fotos</a>
      <a href="#" class="btn">Patrocínios</a>
      <a href="#" class="btn">Entre em contato</a>
    </div>

    <footer>
      <h3>Mokit Digital ©</h3>
    </footer>
  </div>
</template>

<script>
import doug1 from '../assets/img/doug1.png'
import doug2 from '../assets/img/doug2.jpg'
import doug3 from '../assets/img/doug3.jpg'
import grap from '../assets/img/graphics.png'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: { VueSlickCarousel },
  data: () => ({
    doug1,
    doug2,
    doug3,
    grap
  }),
  methods: {
    showAlert () {
      this.$swal('Aqui colocamos os gráficos')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');

// Size
$text-size: 50px;

// Font-Family
$font: 'Paytone One', sans-serif;

// color
$colorText: #ffffff;

@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes mymove {
  0%   {
    opacity: 0;
  }
  25%  {
    opacity: 0.5;
  }
  50%  {
    opacity: 0.8s;
  }
  75%  {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes opaciting {
  0% {
    margin-right: -1200px;
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
    margin-left: -1500px;
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

.home {
  background-image: url('../assets/img/image.gif');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: #222222;
  height: 100vh;
  .text-animation {
    text-align: center;
    white-space: nowrap;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    overflow-x: hidden;
    h2 {
      margin-top: 3px;
      font-size: 20px;
      color: $colorText;
      animation: opaciting 15s infinite ease-in-out;
    }
  }
  .vue-slick {
    @include center;
    overflow: hidden;
    display: none;
  }
  .text {
    font-family: $font;
    font-size: $text-size;
    color: $colorText;
    padding: 25px;
    text-decoration: line-through 2px rgb(0, 0, 0);
    animation: mymove 8s both;
  }
  .graphics {
    margin: 5px 0 0 0;
    opacity: 0.8;
    max-width: 100%;
    @include center;
    text-align: center;
    .graphics-card {
      background-color: transparent;
      color: #fff;
      border-color: #fff;
      height: 250px;
    }
    a {
      font-size: 10px;
      margin: 1rem;
      color: #f4f4f4;
      text-transform: uppercase;
      font-weight: 900;
    }

    .btn {
      text-decoration: none;
      border: 1px solid rgb(146, 148, 248);
      position: relative;
      overflow: hidden;
      width: 90px;
      height: 40px;
    }

    .btn:hover {
      box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
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
        rgba(146, 148, 248, 0.4),
        transparent
      );
      transition: all 650ms;
    }

    .btn:hover:before {
      left: 100%;
    }
  }
  .button-area {
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    a {
      font-size: 1.5rem;
      padding: 1rem 3rem;
      margin: 1rem;
      color: #f4f4f4;
      text-transform: uppercase;
    }

    .btn {
      text-decoration: none;
      border: 1px solid rgb(146, 148, 248);
      position: relative;
      overflow: hidden;
    }

    .btn:hover {
      box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
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
        rgba(146, 148, 248, 0.4),
        transparent
      );
      transition: all 650ms;
    }

    .btn:hover:before {
      left: 100%;
    }
  }
  footer {
    text-align: center;
    margin-bottom: 10px;
    h3{
      color: #fff;
      font-size: 20px;
    }
  }
}

img {
  width: 100px;
  height: 100px;
}
.img-slick {
  margin-left: 15px;
  margin-top: 15px;
  width: 450px;
  height: 500px;
}
@media screen and (max-width: 1150px){
  .home {
    height: 260vh;
    .text-animation {
      text-align: center;
      h2 {
        font-size: 15px;
        animation: opaciting-responsive 15s infinite ease-in-out;
      }
    }
    .text {
      font-size: 50px;
      padding-top: 5px;
    }
    .button-area {
      max-width: 300px;
      @include center;
      .btn {
        width: 250px;
      }
    }
  }
}

@media screen and (max-width: 900px){
  .home {
    height: 180vh;
    background-color: #222222;
    background-image: none;
    text-align: center;
    .graphics {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 577px){
  .home {
    height: 220vh;

    .vue-slick {
      display: block;
    }
    .graphics {
      max-width: 95%;
    }
  }
}
</style>
