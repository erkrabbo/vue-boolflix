import Vue from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

library.add(fasStar)
library.add(farStar)
// library.add(faStarr)

// icon({ prefix: 'far', iconName: ' star' })
// icon({ prefix: 'fas', iconName: 'star' })

// Vue.use(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
// Vue.component('PerfectScrollbar', PerfectScrollbar)
// require('default-passive-events')
// document.addEventListener('touchstart', scroll, { passive: false })
