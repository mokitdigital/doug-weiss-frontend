<template>
  <b-row id="header">
    <b-col
      id="title"
      class="animate__animated animate__zoomIn animate__slow"
      sm="12"
    >
      <b-row cols-lg="1">
        <b-col class="text-center">
          <h1 class="p-4">Doug Weiss</h1>
          <p>Divulgue sua empresa comigo!</p>
        </b-col>
      </b-row>
    </b-col>

    <b-col
      id="img"
      class="animate__animated animate__zoomIn animate__slow"
      sm="12"
    >
      <img :src="img" alt="background-doug">
    </b-col>

    <b-col
      class="
        animate__animated
        animate__zoomIn
        animate__slow
        d-flex
        justify-content-center
        align-items-center
        bg-dark
      "
    >
      <div class="p-5" style="border-left: 3px solid #000;">
        <div class="text-center py-5">
          <h1 class="text-white"><strong>Mensagem do dia</strong></h1>
          <cite class="text-white-50">Em Breve</cite>
        </div>
      </div>
    </b-col>
  </b-row>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;900&display=swap');

@keyframes opaciting {
  0% {
    margin-right: -3000px;
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
    margin-left: -3000px;
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
  background-color: #fff;
}

#title {
  margin-top: 6rem;
  h1 {
    text-decoration: line-through 2px rgb(255, 255, 255);
    font-size: 80px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    overflow: hidden;
    margin: 0;
  }
  p {
    font-family: 'Noto Sans KR', sans-serif;
  }
}
/* #header {
  background-color: #fff;
}

@media screen and (min-width: 516px) {
  #header {
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
}*/

@media screen and (max-width: 440px) {
  #title {
    h1 {
      border-left: 5px solid #272727;
      font-size: 50px;
    }
  }
}
</style>
