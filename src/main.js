import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
// import vSelect from 'vue-select'
import vuetify from './plugins/vuetify'

library.add(fasStar)
library.add(farStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
