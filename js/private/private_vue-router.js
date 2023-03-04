const index = { template:this.index}
const game = { template:this.game}
const memo = { template:this.memo}
const photo = { template:this.photo}
const me = { template:this.me}

const routes = [
    { path: '/', component: index},
    { path: '/game', component: game},
    { path: '/memo', component: memo},
    { path: '/photo', component: photo},
    { path: '/me', component: me}
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})
const app = Vue.createApp({})
app.use(router)
app.mount('#MenuBtn')