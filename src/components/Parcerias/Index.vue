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

export default {
  data: function () {
    return {
      images: [
        'https://dummyimage.com/1960/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000',
        'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff',
        'https://dummyimage.com/200/000000/ffffff'
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
