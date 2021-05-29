import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
    name:'home',
    path: '/',
    component: Home  //componente que sera carregado nessa rota sera o Home
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages //lembrando que cada componete foi importado para rota por ex admin esta sendo importado na linha 5
}]

export default new VueRouter({ //uma vez importando o router preciso tbm assoiar ele na estancia do vue, ou seja importar ele para dentro do main.js
    mode: 'history',
    routes
})

 