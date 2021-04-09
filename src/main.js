// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from "vue-resource";
Vue.use(VueResource)

import VueRouter from "vue-router";
Vue.use(VueRouter);

//crear la importación del componente
import Test from './components/Test';
import User from './components/User';

//crear constante de un enrutador para configurarlo
const router = new VueRouter({
    mode: 'history', //dice como va a funcionar tu aplicación
    base: __dirname, //desde donde obtiene los componentes
    routes: [{
            path: '/',
            component: User
        },
        {
            path: '/test',
            component: Test
        }
    ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    components: { App },
    template: '<App/>'
}).$mount('#app')