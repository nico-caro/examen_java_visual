class TipoService {
    constructor(){

    }
    listar(){
        var url = config.url2 + "/tipo"
        return fetch(url).then(function(data){
            return data.json()
        })
    }
    eliminarTipo(id)
    {
        var url = config.url2 + "/tipo/"+id
            
        return fetch(url, {
            method:'DELETE'
        })
        .then(function(data){
            return data.json()
        })
    }

    guardar(nombre,descripcion)
    {
        var url = config.url2 + "/tipo"

        var data = {
            "nombre":nombre,
            "descripcion":descripcion
            
        }

        return fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }     
        }).then(function(data){
            return data.json()
        })
    }

    buscarTipo(id){
        var url = config.url2 + "/tipo/" +id

        return fetch(url).then(function(data){
            return data.json()
        })
    }

    modificar(id,nombre,descripcion)
    {
        var url = config.url2 + "/tipo/"+id

        var data = {
            "id":id,
            "nombre":nombre,
            "descripcion":descripcion
        }

        return fetch(url,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }     
        }).then(function(data){
            return data.json()
        })
    }    
    
    
    
}