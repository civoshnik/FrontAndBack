import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import List from './components/List.vue'
import EditPage from './components/EditPage.vue'
import AddPage from './components/AddPage.vue'

const routes = [
    { path: '/', component: List},
    { path: '/add', component: AddPage},
    { path: '/edit/:id', component: EditPage, props:true}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
