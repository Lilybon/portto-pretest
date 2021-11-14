import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueLazyloadNext from 'vue-lazyload-next'

createApp(App)
  .provide('router', router)  
  .use(router)
  .use(VueLazyloadNext)
  .mount('#app')
