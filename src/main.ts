import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

createApp(App)
  .provide('router', router)  
  .use(router)
  .mount('#app')
