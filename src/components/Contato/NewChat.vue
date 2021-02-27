<template>
  <div id="chat">
    <div class="chat_container">
      <div class="person">
        <font-awesome-icon class="icons" :icon="faUser" size="2x" style="color: #fff; margin: 0 20px;" />
      </div>
      <div class="box_messages">
        <div class="name_messages">
          <h1>
            {{ nomeEmpresa }} | {{ nomeResponsavel }}</h1>
        </div>
        <div class="over">
          <div class="all_messages"
            v-for="(text, index) in texts"
            :key="index"
          >
            <div class="send_messages" v-if="text.empresa">
              <p>{{ text.text }}</p>
              <span class="time_data">
                {{ text.hora }} |{{ text.data }}
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
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon
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
      mensagem: '',
      nomeEmpresa: 'Mokit Digital',
      nomeResponsavel: 'Luan Medeiros'
    }
  },
  methods: {
    enviaMensagem () {
      alert(JSON.stringify(this.texts))
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;900&display=swap');
body {
  overflow: auto;
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
    .person {
      padding: 2rem;
    }
  }
  .box_messages {
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    flex-wrap: wrap;
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow: auto;
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
      .all_messages {
        display: grid;
        grid-template-rows: 20% 20% 20% 20% 20%;
        grid-template-columns: 20% 20% 20% 20% 20%;
        .send_messages {
          width: 250px;
          background: #231F20;
          color: #fff;
          height: 100px;
          p {
            color: #fff;
          }
        }
        .received_messages {
          background: #9e9e9e;
          width: 250px;
          height: 100px;
          grid-area: 1 / 3 / 3 / 4;
        }
      }
    }
    .write_messages {
      width: 100%;
      input {
        width: 90%;
      }
      button {
        width: 10%;
      }
    }
  }
}
</style>
