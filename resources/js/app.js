import './bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.min.js'

// const app = createApp(App).use(store).use(router)
const app = createApp({}).use(store).use(router)
import Tag from './components/Tag'
app.component('Tag', Tag)
app.component('App', App)

app.mount('#app')
