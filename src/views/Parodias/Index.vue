<template>
  <div id="parodias">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="videos"
    >
      <video
        :src="video"
        controls="true"
        class="embed-responsive-item animate__animated animate__backInRight animate__slow px-2 rounded videoItem"
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
import video4 from '../../assets/media/video4.mp4'
import video5 from '../../assets/media/video5.mp4'
import video6 from '../../assets/media/video6.mp4'

export default {
  data () {
    return {
      videos: [
        video1,
        video2,
        video3,
        video4,
        video5,
        video6
      ]
    }
  }
}
</script>

<style scoped>
#parodias {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: 50% 50%;
  margin: 20px auto;
}
.videos {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  margin: 20px;
}

.videoItem {
  border-radius: 10px;
}

@media screen and (max-width: 1095px) {
  #parodias {
    display: block;
  }
}
</style>
