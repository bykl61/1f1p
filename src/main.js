import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Partners from './components/Partners';
import BeforePrograms from './components/BeforePrograms'
import CurrentPrograms from './components/CurrentPrograms'

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/hakkimizda', component: About },
    { path: '/basvuru', component: Partners },
    { path: '/sponsorlarimiz', component: Partners },
    { path: '/birfikirbirproje/2023', component: CurrentPrograms },
    { path: '/oncekiprogramlarimiz/2020-2022', component: BeforePrograms },
    { path: '/oncekiprogramlarimiz/2019', component: BeforePrograms },
    { path: '/oncekiprogramlarimiz/2018', component: BeforePrograms },
    { path: '/oncekiprogramlarimiz/2017', component: BeforePrograms },
    { path: '/iletisim', component: Contact },
    { path: '*', component: NotFound }
  ],
  mode: 'hash'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
