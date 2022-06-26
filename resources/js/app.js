import './bootstrap';

import { createApp } from 'vue'

import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// const app = createApp(App).use(store).use(router)
const app = createApp({}).use(store).use(router)
import App from './App.vue'
app.component('App', App)

import Tag from './components/Tag'
app.component('Tag', Tag)

import Navbar from './components/Navbar'
app.component('Navbar', Navbar)


app.mount('#app')
