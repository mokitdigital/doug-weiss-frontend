<template>
  <div id="parcerias" style="display: flex; justify-content: center; align-items: center;">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="box-image animate__animated animate__backInLeft animate__slow"
    >
      <img
        :src="image"
        :alt="image"
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
      />
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
import Ana from '../../assets/img/parcerias/anaeana.jpg'
import Daniele from '../../assets/img/parcerias/danielesalvador.jpg'
import Kau from '../../assets/img/parcerias/kaucaffe.jpg'
import Mundo from '../../assets/img/parcerias/mundoencantado.jpg'
import Parc1 from '../../assets/img/parcerias/parc1.jpg'
import SindiLojas from '../../assets/img/parcerias/sindilojas.jpg'
import Vale from '../../assets/img/parcerias/superlojadovale.jpg'
import Supreme from '../../assets/img/parcerias/supreme.jpg'
import Vacariense from '../../assets/img/parcerias/vacariense.jpg'
import Yazigi from '../../assets/img/parcerias/yazigi.png'

export default {
  data: function () {
    return {
      images: [
        Ana,
        Daniele,
        Kau,
        Mundo,
        Parc1,
        SindiLojas,
        Vale,
        Supreme,
        Vacariense,
        Yazigi
      ],
      index: null
    }
  },

  components: {
    gallery: VueGallery
  }
}
</script>

<style>
*{
  overflow-x: hidden;
}
#fotos {
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 400px;
  margin-top: 20px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
</style>
