var templateAgregar = `


<div class="container">
<br>
<h2>Agregar Animales</h2>
<hr>
<center>
<div class="col-sm-5">


    <div class="form-group">
    <center>
                <form>
                    <label>Nombre</label>
                    <input type="text" v-model="nombre" class="form-control" > 
                    <br>
                    <label >Peso</label>
                    <input type="number" v-model="peso" class="form-control" min="1" max="100">
                    <br>
                    <label >Tipo</label>
                    <select v-model="tipoId" name="" id="" class="form-control">
                        <option value="">Seleccionar</option>
                        <option v-for="t in tipos" v-bind:value=" t.id "> {{ t.nombre }}</option>

                    </select>
                    <br>
                    <label >Sector</label>
                    <select v-model="sectorId" name="" id="" class="form-control">
                        <option value="">Seleccionar</option>
                        <option v-for="s in sectores" v-bind:value=" s.id "> {{ s.nombre }}</option>
                        
                    </select>
                    <br>
                    <label >Genero</label>
                    <select v-model="genero" name="" id="" class="form-control" >
                        <option value="">Seleccionar</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                    <br>
                    <label >Fecha Ingreso</label>
                    <input type="date" v-model="fechaIngreso" class="form-control">
                    <br>
                    <label >Fecha Nacimiento</label>
                    <input type="date" v-model="fechaNacimiento" class="form-control">
                    <br>
                    <label >Fecha Defunción</label>
                    <input type="date" v-model="fechaDefuncion"   class="form-control">
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


var componenteAgregar = Vue.component('agregar-animal',{
    template:templateAgregar,
    data:function(){
        return{
            nombre:"",
            peso:"",
            tipoId:"",
            sectorId:"",
            genero:"",
            fechaIngreso:"",
            fechaNacimiento:"",
            fechaDefuncion:"",
            mensaje:"",
            tipos:null,
            sectores:null

        }
    },
    created:function(){
        var self = this        

        var servicioTipo = new TipoService() 
        servicioTipo.listar().then(function(data){
            self.tipos = data
            
        }) 

        var self =this
        var servicioSector = new SectorService()
        servicioSector.listar().then(function(data){
            self.sectores =data
        })
        
        var servicioAnimal = new AnimalService()
        if(this.$route.params.id){
           servicioAnimal.buscar(this.$route.params.id).then(function(data){
               self.nombre=data.nombre
               self.peso=data.peso
               self.tipoId=data.tipo.id
               self.sectorId=data.sector.id
               self.genero=data.genero
               self.fechaIngreso=data.fechaIngreso
               self.fechaNacimiento=data.fechaNacimiento
               self.fechaDefuncion=data.fechaDefuncion
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
            var service = new AnimalService()

            if(this.$route.params.id){

                var id = this.$route.params.id
                service.modificar(id,self.nombre, self.peso,self.tipoId,self.sectorId,self.genero,self.fechaIngreso,self.fechaNacimiento,self.fechaDefuncion).
                then(function(data){
                    self.mensaje ="Modificado Correctamente!"
                    self.limpiar()
                })

            }else{
                
                service.guardar(self.nombre, self.peso,self.tipoId,self.sectorId,self.genero,self.fechaIngreso,self.fechaNacimiento,self.fechaDefuncion).
                then(function(data){
                    self.mensaje ="Guardado Correctamente!"
                    self.limpiar()
                })
            }

        },
        limpiar(){
            this.nombre=""           
            this.peso=""
            this.tipoId=""
            this.sectorId=""
            this.genero=""
            this.fechaIngreso=""
            this.fechaNacimiento=""
            this.fechaDefuncion=""
            
            
        }
    }
    
    
    
})