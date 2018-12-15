class AnimalService {
    constructor()
    {

    }
    listar()
    {
        var url = config.url + "/animal"

        return fetch(url)
        .then(function(data)
        {
            return data.json()
        })
    }

    eliminar(id)
    {
        var url = config.url + "/animal/"+id
            
        return fetch(url, {
            method:'DELETE'
        })
        .then(function(data){
            return data.json()
        })
    }

    guardar(nombre,peso,tipoId,sectorId,genero,fechaIngreso,fechaNacimiento,fechaDefuncion)
    {
        var url = config.url + "/animal"

        var data = {
            "nombre":nombre,
            "peso":peso,
            "genero":genero,
            "fechaNacimiento":fechaNacimiento,
            "fechaIngreso": fechaIngreso,
            "fechaDefuncion": fechaDefuncion,
            "tipo":{
                "id":tipoId
            },
            "sector":{
                "id":sectorId
            }
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

    buscar(id){
        var url = config.url +"/animal/"+id

        return fetch(url).then(function(data){
            return data.json()
        })
    }

    modificar(id,nombre,peso,tipoId,sectorId,genero,fechaIngreso,fechaNacimiento,fechaDefuncion)
    {
        var url = config.url + "/animal/"+id

        var data = {
            "id":id,
            "nombre":nombre,
            "peso":peso,
            "genero":genero,
            "fechaNacimiento":fechaNacimiento,
            "fechaIngreso": fechaIngreso,
            "fechaDefuncion": fechaDefuncion,
            "tipo":{
                "id":tipoId
            },
            "sector":{
                "id":sectorId
            }
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