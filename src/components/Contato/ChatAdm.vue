<template>
  <div class="row">
    <div class="col">
      <b-container class="bg-dark my-4">
        <b-row>
          <div class="col">
            <div class="container">
              <div class="row">
                <h3 class="text-white text-center py-5 col-md-10">
                  Contatos Profissionais
                </h3>
                <div class="col-md-2" style="display: flex; justify-content: center; align-items: center;">
                  <b-button
                    variant="danger"
                    @click="exit()"
                    class="mb-4"
                  >
                    Sair
                  </b-button>
                </div>
              </div>

              <div class="messaging">
                <div class="inbox_msg_responsive row">
                  <div class="inbox_people_responsive col-md-6">
                    <div class="headind_srch">
                      <div class="recent_heading">
                        <h4>Recentes</h4>
                      </div>
                      <div class="srch_bar">
                        <div class="stylish-input-group" style="display: flex; justify-content: center; align-items: center;">
                          <b-input type="text" id="search_bar2" class="search-bar"  placeholder="Encontrar Empresa" />
                          <span class="input-group-addon">
                            <button type="button">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="inbox_chat" style="overflow-y: hidden;">
                      <div
                        class="chat_list active_chat"
                        v-for="(empresa, index) in dataEmpresas"
                        :key="index"
                        id="show-btn"
                        @click="$bvModal.show('bv-modal-example')"
                      >
                        <div
                          class="chat_people"
                          v-if="getUltimoTexto()"
                          :key="index"
                        >
                          <div class="chat_img">
                            <img :src="empresa.imagem" :alt="empresa.nome" />
                          </div>
                          <div class="chat_ib">
                            <h5>
                              {{ empresa.nomeEmpresa }} | {{ empresa.nomeResponsavel }} <br />
                              <span class="chat_date">{{ getUltimoTexto().data }}</span>
                            </h5>
                            <p>{{ getUltimoTexto().text }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="inbox_msg row">
                  <div class="inbox_people col-md-12">
                    <div class="headind_srch">
                      <div class="recent_heading">
                        <h4>Recentes</h4>
                      </div>
                      <div class="srch_bar">
                        <div class="stylish-input-group" style="display: flex; justify-content: center; align-items: center;">
                          <b-input type="text" id="search_bar" class="search-bar"  placeholder="Encontrar Empresa" />
                          <span class="input-group-addon">
                            <button type="button">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="inbox_chat" style="overflow-y: hidden;">
                      <div
                        class="chat_list active_chat"
                        v-for="(empresa, index) in dataEmpresas"
                        :key="index"
                        id="show-btn"
                        @click="$bvModal.show('bv-modal-example')"
                      >
                        <div
                          class="chat_people"
                          v-if="getUltimoTexto()"
                          :key="index"
                        >
                          <div class="chat_img">
                            <img :src="empresa.imagem" :alt="empresa.nome" />
                          </div>
                          <div class="chat_ib">
                            <h5>
                              {{ empresa.nomeEmpresa }} | {{ empresa.nomeResponsavel }} <br />
                              <span class="chat_date">{{ getUltimoTexto().data }}</span>
                            </h5>
                            <p>{{ getUltimoTexto().text }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b-modal id="bv-modal-example" size="lg" centered hide-footer>
                    <template #modal-title>
                      Nome da Empresa | Nome do Responsavel
                    </template>
                    <div class="mesgs mb-4">
                      <div id="box_msg" class="msg_history">
                        <div
                          class="incoming_msg px-2"
                          v-for="(text, index) in textoRecebido"
                          :key="index+text"
                        >
                          <div class="incoming_msg_img">
                            <img :src="text.imagem" :alt="text.alt"> </div>
                          <div class="received_msg">
                            <div class="received_withd_msg">
                              <p>{{ text.text }}</p>
                              <span class="time_date">
                                {{ text.hora }} |
                                {{ text.data }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="outgoing_msg px-2"
                          v-for="(text, index) in textoEnviado"
                          :key="index"
                        >
                          <div class="sent_msg">
                            <p>{{ text.text }}</p>
                            <span class="time_date">
                              {{ text.hora }}    |    {{ text.data }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="type_msg">
                        <div class="input_msg_write">
                          <input
                            type="text"
                            class="write_msg px-4"
                            placeholder="Enviar mensagem"
                            id="mensagem"
                            v-model="mensagem"
                            @keyup.enter="enviarMensagem()"
                          />
                          <button class="msg_send_btn" type="button" @click="enviarMensagem()">
                            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <b-button
                      class="mt-5"
                      block
                      @click="$bvModal.hide('bv-modal-example')"
                    >
                      Fechar
                    </b-button>
                  </b-modal>
                </div>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { data as dataTextoEnviado } from '../../data/dataTextoEnviado'
import { data as dataTextoRecebido } from '../../data/dataTextoRecebido'
import { empresas as dataEmpresas } from '../../data/dataEmpresas'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      textoEnviado: dataTextoEnviado,
      textoRecebido: dataTextoRecebido,
      dataEmpresas: dataEmpresas,
      ultimoTexto: [],
      mensagem: '',
      index: null
    }
  },
  methods: {
    enviarMensagem () {
      if (this.mensagem !== '') {
        this.textoEnviado.push({
          text: this.mensagem,
          hora: dayjs().format('HH:mm'),
          data: dayjs().format('DD/MM/YYYY')
        })
        this.mensagem = ''
        const messages = document.getElementById('box_msg')

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
    exit () {
      localStorage.clear()
      this.$router.push('/contato/login')
    }
  },
  mounted () {
    // Coloca no ultimo texto enviado
    const heightPage = document.getElementById('box_msg')
    heightPage.scrollTop = heightPage.scrollHeight
    // Teste ultimo texto
    this.getUltimoTexto()
  }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
.inbox_msg_responsive {
  display: none;
}
.background_inbox {
  background: url('../../assets/img/doug2.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{max-width:1170px; margin:auto;}

img{ max-width:100%;}

.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}

.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}

.top_spac{ margin: 20px 0 0;}

.recent_heading {float: left; width:40%;}

.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  padding: 0;
}

.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}

.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}

.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
  cursor: pointer;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 100%;
}

.sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 60%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #000;
  font-size: 15px;
  min-height: 48px;
  width: 500px;
  overflow-wrap: break-word;
}

.input_msg_write input:hover,
.input_msg_write input:focus,
.input_msg_write input:active {
  outline: none;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging {
  padding: 0 0 50px 0;
  border-radius: 5px;
}
.msg_history {
  height: 516px;
  overflow-y: scroll;
}

@media screen and (max-width: 810px) {
  .inbox_people {
    display: none;
  }
  .inbox_msg_responsive {
    display: block;
    height: 200px;
  }
  .mesgs {
    width: 100%;
  }
  .write_msg {
    padding-right: 20px;
  }
}
</style>
