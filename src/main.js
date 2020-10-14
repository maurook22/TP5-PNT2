import { createApp } from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

require('../public/css/style.css')

createApp(App)
.mount('#app')
