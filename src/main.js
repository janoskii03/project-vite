import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//aos引入
import AOS from 'aos'
import 'aos/dist/aos.css'



// 全域樣式
import "@/assets/css/_style.scss"

AOS.init({
    duration: 1000,

});


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(AOS)


app.mount('#app')
