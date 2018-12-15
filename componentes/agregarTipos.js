var templateAgregarTipos = `


<div class="container">
<br>
<h2>Agregar Tipo</h2>
<hr>
<center>
<div class="col-sm-5">


    <div class="form-group">
    <center>
                <form>
                    <label>Nombre</label>
                    <input type="text" v-model="nombre" class="form-control" > 
                    <br>
                    <label >Descripción</label>
                    <input type="text" v-model="descripcion" class="form-control">
                    <br>                    
                    <center>
                    <input type="button" value="Guardar" @click="guardar" class="btn btn-success">
                    <input type="button" value="Limpiar" @click="limpiar" class="btn btn-danger">
                    </center>
                </form>
                <br>
                <div v-if="mensaje">
                    <center><h3> {{ mensaje }} </h3></center>
                </div>
                </center>
            </div>
            </div>
            </center>
    </div>
`


var componenteAgregarTipos = Vue.component('agregar-tipo',{
    template:templateAgregarTipos,
    data:function(){
        return{
            nombre:"",
            descripcion:"",            
            mensaje:""
        }
    },
    created:function(){
        var self = this
        var servicioTipo = new TipoService() 
        
        if(this.$route.params.id){
           servicioTipo.buscarTipo(this.$route.params.id).then(function(data){
               self.nombre=data.nombre
               self.descripcion=data.descripcion        
           })
        } 
    },
    watch:{
        '$route' (to,end){
            this.limpiar();
        }
    },

    methods:{
        guardar(){
            var self = this
            var serviceTipo = new TipoService()

            if(this.$route.params.id){

                var id = this.$route.params.id
                serviceTipo.modificar(id,self.nombre, self.descripcion).
                then(function(data){
                    self.mensaje ="Modificado Correctamente!"
                    self.limpiar()
                })

            }else{
                
                serviceTipo.guardar(self.nombre, self.descripcion).
                then(function(data){
                    self.mensaje ="Guardado Correctamente!"
                    self.limpiar()
                })
            }

        },
        limpiar(){
            this.nombre=""           
            this.descripcion=""
        }
    }
})