
var templateListarTipos = `

<div class="container">
<br>
<h2>Lista de tipos</h2>
<br>
<table class="table table-hover">
        <thead>
        
        </thead>
<tbody>

            
    <div v-for="t in tiposs" class="container">
    <tr>

    <th>Id</th>
    <th>Nombre</th>
    <th>Descripcion</th>
    <th>Opciones </th>
    
    </tr>
        <tr>
        
            <td> {{ t.id }} </td>       
            <td> {{ t.nombre }} </td>           
            <td> {{ t.descripcion}} </td> 
            <td> 
            <a href="#" @click.prevent="eliminarTipo(t.id)">Eliminar</a> 
            <a href="#" @click.prevent="redirect(t.id)">Modificar</a>
            </td>
           
        </tr>
    </div>
 
        </tbody>
    </table>
</div>
`

var componenteListarTipos = Vue.component('listar-tipos',
{
    template:templateListarTipos,
    data: function()
    {
        return {
            tiposs:null
        }
    },
    created:function()
    {
        this.listar()
    },
    methods:{
        listar(){
            var service = new TipoService()

            var self = this
    
            service.listar().then(function(data){
                self.tiposs = data
            })
        }, 
        eliminarTipo(id)
        {
            var self = this
            var service = new TipoService()
            service.eliminarTipo(id).then(function()
            {
                self.listar()
            })
        },
        redirect(id){
            this.$router.push({'path':'/agregartipos/'+id})
        }
        
    }
})