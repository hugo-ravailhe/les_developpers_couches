import { createApp } from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import store from './store'

createApp(App).use(store).use(Vuelidate).mount('#app')





