import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"
import "./style.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faSave, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye)
library.add(faSave)
library.add(faClipboard)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
