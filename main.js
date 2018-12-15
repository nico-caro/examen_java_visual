
var routes =[
    {
        'path':'/',
        'redirect':'/listar'
    },
    {
        'path':"/listar",
        'component':componenteListarAnimales
    },
    {
        'path':"/agregar/:id?",
        'component':componenteAgregar
    },
    {
        'path':"/tipos",
        'component':componenteListarTipos
    },
    {
        'path':"/agregartipos/:id?",
        'component':componenteAgregarTipos
    }
]

var router = new VueRouter({
    routes
})



var app = new Vue({
    router
}).$mount('#app ')