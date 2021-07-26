<template>
  <div class="whatsapp animate__animated animate__bounce animate__infinite animate__slow" @click="send()">
    <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  methods: {
    send () {
      /* window.open('https://wa.me/555191216335') */
    }
  }
}
</script>

<style>
.whatsapp {
  width: 80px;
  height: 80px;
  position: fixed;
  z-index: 1000;
  right: 1rem;
  bottom: 1rem;
  color: #000;
  background-color: #128c7e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  color: #fff;
  font-size: 45px;
}

@media screen and (max-width: 500px) {
  .whatsapp {
    width: 50px;
    height: 50px;
  }

  .icon {
    font-size: 20px;
  }
}
</style>
