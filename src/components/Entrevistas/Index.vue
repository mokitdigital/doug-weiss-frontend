<template>
  <div id="entrevistas">
    <div
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      class="box-image animate__animated animate__backInLeft animate__slow"
    >
      <a :href="image.href" target="_blank" rel="noopener noreferrer">
        <img
          :src="image.src"
          :alt="image.src"
          class="image"
        />
      </a>
    </div>
  </div>
</template>

<script>
import jr from '../../assets/img/entrevistas/jr.jpg'
import casa from '../../assets/img/entrevistas/decasa.png'
import diario from '../../assets/img/entrevistas/diariogaucho.jpg'

export default {
  data: function () {
    return {
      images: [{
        src: jr,
        href: 'https://www.instagram.com/p/CB9khTrgZrF/'
      },
      {
        src: casa,
        href: 'https://globoplay.globo.com/v/9041286/'
      },
      {
        src: diario,
        href: 'http://diariogaucho.clicrbs.com.br/rs/dia-a-dia/noticia/2020/07/jovem-de-gravatai-chama-a-atencao-nas-redes-sociais-com-parodias-para-divulgar-comercios-da-cidade-12530027.html'
      }]
    }
  }
}
</script>

<style>
*{
  overflow-x: hidden;
}
#entrevistas {
  margin: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
}
.box-image {
  margin: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
}

.image {
  border: 1px solid #ebebeb;
  padding: 5px;
  width: 300px;
  height: 300px;
  margin-top: 20px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
</style>
