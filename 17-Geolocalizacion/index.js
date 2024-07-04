let marker,map

function initMap(){
    const posicion = {
        lat: -25.363,
        lng: 131.844
    }

    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center: posicion
    })

    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title:"Posiscion inicial"
    })
    //marker.setPosition({lat,lng})
    /// Obtner la geolocalizacion
    geoPosicion()   
}

function geoPosicion(){
    if(navigator.geolocation){
        const geoloc = navigator.geolocation
        const options = {timeout:500}
        const watchPos = geoloc.watchPosition(centrarmapa,ole.onError,options)
    }else{
        alert("Tu navegador no admite geolocalizacion")
    }
}

function centrarmapa(position){
    const nuevapos = {
        lat: position.coords.latitude,
        lng:position.coords.longitude
    }
    marker.setPosition(nuevapos)
    map.setCenter(nuevapos)
}

function onError(error){
    console.error("se ha produciodo un error y lo hemos gestionado")
    console.error(error)
}