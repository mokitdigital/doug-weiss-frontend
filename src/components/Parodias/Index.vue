<template>
  <div id="parodias">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="videos"
    >
      <video
        width="400"
        height="315"
        :src="video"
        controls="true"
        class="embed-responsive-item animate__animated animate__backInRight animate__slow px-2 rounded"
      >
      Seu navegador não suporta o elemento <code>video</code>.
    </video>
    </div>
  </div>
</template>

<script>
import video1 from '../../assets/media/video1.mp4'
import video2 from '../../assets/media/video2.mp4'
import video3 from '../../assets/media/video3.mp4'

export default {
  data () {
    return {
      videos: [
        video1,
        video2,
        video3
      ]
    }
  }
}
</script>

<style scoped>
#parodias {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}
.videos {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
}
@media screen and (max-width: 1095px) {
  #parodias {
    display: block;
  }
}
</style>
