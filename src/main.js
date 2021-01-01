import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faSave, faClipboard, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye)
library.add(faSave)
library.add(faClipboard)
library.add(faArrowCircleRight)
library.add(faArrowCircleLeft)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
