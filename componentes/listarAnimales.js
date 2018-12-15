
var templateListarAnimales = `

<div class="container">
<br>
<h2>Listado de Animales</h2>
<br>
<table class="table table-hover">
    <thead>
   
    </thead>
<tbody>   
<center>
<tr>
<th>Código</th>	  
<th>Nombre</th>
<th>Peso</th>
<th>Género</th>
<th>Tipo</th>
<th>Sector</th>
<th>Fecha Ingreso </th>
<th>Fecha Nacimiento </th>
<th>Fecha Defunción</th>
<th>Opciones </th>

</tr>
      <div v-for="a in animales" class="container">
            <tr>
                <td> {{ a.codigo }} </td>       
                <td> {{ a.nombre }} </td>           
                <td> {{ a.peso }} Kg.</td>
                <td> {{a.genero}} </td>
                <td> {{a.tipo.nombre}} </td>
                <td> {{a.sector.nombre}} </td>
                <td> {{a.fechaIngreso}} </td>
                <td> {{a.fechaNacimiento}} </td>
                <td> {{a.fechaDefuncion}} </td>
                <td> 
                <a href="#" @click.prevent="eliminar(a.codigo)">Eliminar</a> 
                <a href="#" @click.prevent="redirect(a.codigo)">Modificar</a>
                </td>
            </tr>
        </div>
</center>
      
    </tbody>
  </table>
     
</div>
`

var componenteListarAnimales = Vue.component('listar-animales',
{
    template:templateListarAnimales,
    data: function()
    {
        return {
            animales:null
        }
    },
    created:function()
    {
        this.listar()
    },
    methods:{
        listar(){
            var service = new AnimalService()

            var self = this
    
            service.listar().then(function(data){
                self.animales = data
            })
        },
        eliminar(id)
        {
            var self = this
            var service = new AnimalService()
            service.eliminar(id).then(function()
            {
                self.listar()
            })
        },
        redirect(id){
            this.$router.push({'path':'/agregar/'+id})
        }
    }
})