<template>
  <header class="header">
    <div class="header__login" v-if="getLoginUser" style="margin-right: 1rem;">
      <div class="header__login_label">
        Login with:
      </div>
      <div id="header__login_form" class="header__login_form"></div>
    </div>
    <div v-else class="header__logout" :title="infoUser.displayName">
      <img class="header__logout_img" :alt="infoUser.displayName" :src="infoUser.photoURL" @click="viewMenu">
      <div class="header__logout_menu" v-if="showMenu" @click="showMenu = false">
        <div class="header__logout_menu--item user">
          <span class="user__name">{{infoUser.displayName}}</span>
          <span class="user__email">{{infoUser.email}}</span>
        </div>
        <router-link class="header__logout_menu--item" to="/profile">Profile</router-link>
        <div class="header__logout_menu--item" @click="logout">LogOut</div>
      </div>
    </div>
  </header>
</template>

<script>
// import GoogleIcon from 'vue-material-design-icons/Google.vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
// import firebaseConfig from '@/assets/scripts/firebase.config'

// firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())

export default {
  name: 'HeaderPartial',
  data () {
    return {
      infoUser: '',
      userLogin: false,
      showMenu: false
    }
  },
  components: {
  },
  mounted () {
    document.addEventListener('DOMContentLoaded', (e) => {
      var elements = document.getElementsByClassName('firebaseui-idp-icon-wrapper')
      var arrayElements = []
      var networkIcons = [
        {
          name: 'facebook',
          icon: ''
        }, {
          name: 'google',
          icon: ''
        }
      ]
      setTimeout(() => {
        elements.forEach(el => arrayElements.push(el))

        for (var i = 0; i <= arrayElements.length; i++) {
          var icon = document.createElement('div')
          icon.setAttribute('class', `mdi mdi-24px mdi-${networkIcons[i].name}`)
          icon.setAttribute('title', `Login with ${networkIcons[i].name}`)
          arrayElements[i].innerHTML = ''
          arrayElements[i].appendChild(icon)
        }
      }, 4000)
      setTimeout(() => {
        document.getElementById('header__login_form').classList.add('show')
      }, 4000)
    })
  },
  created () {
    this.initFirebase()
  },
  methods: {
    async initFirebase () {
      var vm = this
      await ui.start('#header__login_form', {
        callbacks: {
          signInSuccessWithAuthResult: async function (authResult) {
            const user = await firebase.auth().currentUser
            console.log(user)
            vm.infoUser = user.providerData[0]
            if (user) {
              await vm.setUser(vm.infoUser)
              await vm.setLogin(true)
            }
            return true
          }
        },
        signInFlow: 'popup',
        signInSuccessUrl: process.env.NOD_ENV !== 'production' ? 'http://localhost:8888/#/profile' : 'https://muiscasrc.github.io/club/#/profile',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
      })
    },
    setUser (value) {
      this.$store.commit('setCurrentUser', value)
    },
    setLogin (value) {
      this.$store.commit('setLoginUser', value)
    },
    logout () {
      firebase.auth().signOut()
      this.setLogin(false)
      this.setUser(undefined)
      window.location.reload()
    },
    viewMenu (e) {
      this.showMenu = !this.showMenu
    }
  },
  computed: {
    getLoginUser () {
      return !this.$store.getters.getLoginUser
    },
    getInfoUser () {
      return this.$store.getters.getCurrentUser
    }
  }
}
</script>
