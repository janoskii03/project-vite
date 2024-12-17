

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

//aos引入
import AOS from 'aos'
import 'aos/dist/aos.css'






AOS.init({
    duration: 1000,

});


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(AOS)
app.use(axios)


app.mount('#app')
