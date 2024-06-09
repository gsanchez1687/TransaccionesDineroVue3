//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//import bootstrap-icon
import 'bootstrap-icons/font/bootstrap-icons.css'
//import toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Toast).mount('#app')
