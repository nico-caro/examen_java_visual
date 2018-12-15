class SectorService {
    constructor(){

    }
    listar(){
        var url = config.url3 + "/sector"
        return fetch(url).then(function(data){
            return data.json()
        })
    }
}