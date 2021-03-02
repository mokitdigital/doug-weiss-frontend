<template>
  <div id="chat">
    <div class="chat_container">
      <div class="person">
        <b-dropdown id="dropdown-left" text="Left align" variant="primary" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <font-awesome-icon class="icons" :icon="faUser" size="2x" style="color: #fff; margin: 0 20px;" />
      </div>
      <div class="box_messages">
        <div class="name_messages">
          <h1>
            {{ nomeEmpresa }} | {{ nomeResponsavel }}</h1>
        </div>
        <div id="over" class="over">
          <div class="all_messages"
            v-for="(text, index) in texts"
            :key="index"
          >
            <div class="send_messages" v-if="text.empresa">
              <p>{{ text.text }}</p>
              <span class="time_data">
                {{ text.hora }} | {{ text.data }}
              </span>
            </div>
            <div class="received_messages" v-else>
              <p>{{ text.text }}</p>
              <span class="time_data">
                {{ text.hora }} | {{ text.data }}
              </span>
            </div>
          </div>
        </div>
        <div class="write_messages">
          <input
            type="text"
            class="input_messages"
            placeholder="Enviar mensagem"
            id="menssages"
            v-model="mensagem"
            @keyup.enter="enviaMensagem()"
          >
          <button class="msg_send_btn" type="button" @click="enviaMensagem()">
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="gallery_container">
      <gallery :images="images" :index="index" @close="index = null" style="overflow: hidden;"></gallery>
      <div
        class="image animate__animated animate__backInLeft animate__slow"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '500px', height: '200px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import VueGallery from 'vue-gallery'

export default {
  components: {
    FontAwesomeIcon,
    gallery: VueGallery
  },
  data () {
    return {
      faUser,
      texts: [{
        text: 'Ola tudo bem?',
        data: '26/02/2021',
        hora: '15:15',
        empresa: true
      },
      {
        text: 'Ola tudo bem?',
        data: '26/02/2021',
        hora: '15:15',
        empresa: true
      },
      {
        text: 'Ola tudo bem?',
        data: '26/02/2021',
        hora: '15:15',
        empresa: true
      },
      {
        text: 'Ola tudo bem?',
        data: '26/02/2021',
        hora: '15:15',
        empresa: false
      },
      {
        text: 'Ola tudo bem?',
        data: '26/02/2021',
        hora: '15:15',
        empresa: false
      },
      {
        text: 'Ola tudo bem?',
        data: '26/02/2021',
        hora: '15:15',
        empresa: false
      }],
      textoEnviado: [],
      textoRecebido: [],
      mensagem: '',
      nomeEmpresa: 'Mokit Digital',
      nomeResponsavel: 'Luan Medeiros',
      images: [
        'https://dummyimage.com/1960/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000'
      ],
      index: null
    }
  },
  methods: {
    enviaMensagem () {
      if (this.mensagem !== '') {
        this.texts.push({
          text: this.mensagem,
          hora: dayjs().format('HH:mm'),
          data: dayjs().format('DD/MM/YYYY'),
          empresa: false
        })
        this.mensagem = ''
        const messages = document.getElementById('over')

        setTimeout(() => {
          const shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight
          if (!shouldScroll) {
            messages.scrollTop = messages.scrollHeight
          }
        }, 100)
      } else {
        this.$swal('Espaco esta em branco!')
      }
      this.getUltimoTexto()
    },
    getUltimoTexto () {
      const env = this.textoEnviado
      const rec = this.textoRecebido
      for (let i = env.length - 1; i < env.length; i++) {
        const envData = env[i].data
        const envHora = env[i].hora
        const partesDataEnv = envData.split('/')
        const parteHoraEnv = envHora.split(':')
        const dataEnv = new Date(
          partesDataEnv[2],
          partesDataEnv[1] - 1,
          partesDataEnv[0],
          parteHoraEnv[0],
          parteHoraEnv[1]
        )
        for (let j = rec.length - 1; j < rec.length; j++) {
          const recData = rec[j].data
          const recHora = rec[j].hora
          const partesDataRec = recData.split('/')
          const parteHoraRec = recHora.split(':')
          const dataRec = new Date(
            partesDataRec[2],
            partesDataRec[1] - 1,
            partesDataRec[0],
            parteHoraRec[0],
            parteHoraRec[1]
          )

          if (dataEnv > dataRec) {
            return env[i]
          } else {
            return rec[j]
          }
        }
      }
    },
    getTextos () {
      for (let index = 0; index < this.texts.length; index++) {
        const element = this.texts[index]

        if (element.empresa === true) {
          this.textoEnviado.push(element)
        } else {
          this.textoRecebido.push(element)
        }
      }
    }
  },
  mounted () {
    // Busca textos enviado ou recebidos para colocar na tela
    this.getTextos()
    // Coloca no ultimo texto enviado
    const heightPage = document.getElementById('over')
    heightPage.scrollTop = heightPage.scrollHeight

    // Busca o ultimo texto do bd
    this.getUltimoTexto()
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;900&display=swap');
body {
  overflow: auto;
}
/* Largura da barra de rolagem */
::-webkit-scrollbar {
    width: 10px;
    border-radius: 2px;
}

/* Fundo da barra de rolagem */
::-webkit-scrollbar-track-piece {
    background-color: #EEE;
    border-left: 1px solid #CCC
}

/* Cor do indicador de rolagem */
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: rgb(44, 44, 44)
}

/* Cor do indicador de rolagem - ao passar o mouse */
::-webkit-scrollbar-thumb:vertical:hover,
::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #c2c2c2;
}

#chat {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;

  .chat_container {
    background-color: rgb(44, 44, 44);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: auto;
    .person {
      padding: 2rem;
      overflow: hidden;
    }
  }

  .box_messages {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    .name_messages {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #231F20;
      height: 10vh;
      width: 100%;
      h1 {
        font-size: 1.5rem;
        font-family: 'Noto Sans KR', sans-serif;
        height: 40px;
        color: #fff;
      }
    }

    .over {
      overflow:auto;
      height:100%;
      ::-webkit-scrollbar {
          width: 10px;
      }
      .all_messages {
        display: grid;
        grid-template-rows: 20% 20% 20% 20% 20%;
        grid-template-columns: 20% 20% 20% 20% 20%;
        .send_messages {
          display: grid;
          grid-template-rows: 20% 20% 20% 20% 20%;
          grid-template-columns: 20% 20% 20% 20% 20%;
          width: 250px;
          background: #0E0E52;
          height: 100px;
          margin: 2px 2px;
          padding: 5px 5px;
          font-family: 'Noto Sans KR', sans-serif;
          border-radius: 5px;
          p {
            color: #fff;
            grid-area: 1 / 1 / 5 / 5;
          }
          .time_data{
            border-top: 1px solid #fff;
            color: #fff;
            font-size: 10px;
            grid-area: 5 / 1 / 5 / 6;
          }
        }
        .received_messages {
          display: grid;
          grid-template-rows: 20% 20% 20% 20% 20%;
          grid-template-columns: 20% 20% 20% 20% 20%;
          background: #3A4F41;
          width: 250px;
          height: 100px;
          grid-area: 1 / 3 / 3 / 4;
          margin: 2px 2px;
          padding: 5px 5px;
          font-family: 'Noto Sans KR', sans-serif;
          border-radius: 5px;
          p {
            color: #fff;
            grid-area: 1 / 1 / 5 / 5;
          }
          .time_data{
            border-top: 1px solid #fff;
            color: #fff;
            font-size: 10px;
            grid-area: 5 / 1 / 5 / 6;
          }
        }
      }
    }
    .write_messages {
      overflow: hidden;
      width: 100%;
      margin: 2px 2px 5px 0px;
      border-top: 2px solid #000;
      input {
        width: 90%;
        background: none;
        border: none;
        padding: 5px;
      }
      input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
      button {
        width: 35px;
        background: none;
        border: none;
      }
    }
  }
  .gallery_container {
    display: none;
  }
}

@media screen and (min-width: 750px) {
  #chat {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    .chat_container {
      width: 90%;
      grid-area: 1 / 1 / 3 / 2;
    }
    .gallery_container {
      display: grid;
      width: 90%;
      grid-area: 1 / 2 / 3 / 2;
    }
  }
}
</style>
