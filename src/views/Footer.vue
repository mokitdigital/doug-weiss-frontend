<template>
  <div class="footer-basic">
      <footer>
          <div class="social">
            <a href="https://www.facebook.com/dougweiss20" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon class="icons" :icon="facebook" size="1s" style="color: #fff; margin: 0 20px;" />
            </a>
            <a href="https://www.instagram.com/doug.weiss/" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon class="icons" :icon="instagram" size="1x" style="color: #fff; margin: 0 20px;" />
            </a>
          </div>
          <div class="text-center">
            <a href="https://mokit.digital/" class="copyright">Mokit Digital &copy; 2021 - All Rights Reserved.</a>
          </div>
      </footer>
  </div>
  <!-- <footer>
    <div class="row">
      <div class="col-sm text-center central">
        <h1>Doug Weiss</h1>
        <p>Influencer Digital</p>
      </div>
      <div class="col-sm text-center central">
        <ul class="pt-3">
          <li class="py-3">
            <router-link to="/parodias" v-scroll-to="'#parodias'">
              Parodias
            </router-link>
          </li>
          <li class="py-3">
            <router-link to="/fotos" v-scroll-to="'#fotos'">
            Fotos
            </router-link>
          </li>
          <li class="py-3">
            <router-link to="/parcerias" v-scroll-to="'#parcerias'">
            Parcerias
            </router-link>
          </li>
          <li class="py-3">
            <router-link to="/contato" v-scroll-to="'#contato'">
            Contato
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-sm text-center central">
        <h2>Redes Sociais</h2>
        <a href="https://www.facebook.com/dougweiss20" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon class="icons" :icon="facebook" size="2x" style="color: #fff; margin: 0 20px;" />
        </a>
        <a href="https://www.instagram.com/doug.weiss/" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon class="icons" :icon="instagram" size="2x" style="color: #fff; margin: 0 20px;" />
        </a>
      </div>
    </div>
    <div style="min-height: 150px;">
    </div>
    <div class="row">
      <div class="col col-sm-12fluid-container footer">
        <p class="text-center">Copyright &copy; 2021,
          <a href="https://mokit.digital/">Mokit Digital.</a> All Rights Reserved.</p>
      </div>
    </div>

  </footer> -->
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  data () {
    return {
      facebook: faFacebookF,
      twitter: faTwitter,
      instagram: faInstagram
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.footer-basic {
  padding:40px 0;
  background-color: #000;
  color: #fff;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:50px;
  height:50px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius: 50%;
  border: 1px solid #000;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}
/*
.central {
  padding-top: 100px;
}

a {
  color: #fff;
}

a:hover {
  color: #fff;
} */
</style>
