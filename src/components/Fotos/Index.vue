<template>
  <div id="fotos">
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
import doug2 from '../../assets/img/doug2.jpg'
import doug3 from '../../assets/img/doug3.jpg'
import doug4 from '../../assets/img/doug4.jpg'
import doug5 from '../../assets/img/doug5.jpg'
import doug6 from '../../assets/img/doug6.jpg'
import doug7 from '../../assets/img/doug7.jpg'

export default {
  data: function () {
    return {
      images: [
        doug4,
        doug2,
        doug3,
        doug5,
        doug6,
        doug7
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
  height: 400px;
  margin-top: 20px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}

</style>
