//XMLHttpRequest
(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fracment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange",(e) => {
        if(xhr.readyState !==4) return;

        if(xhr.status >= 200 && xhr.status <300){
            console.log("Exito");
            let json = JSON.parse(xhr.responseText);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fracment.appendChild($li);
            });

            $xhr.appendChild($fracment);
        }else{
            console.log("Error");
            let message = xhr.statusText || "Ocurio un error";
            $xhr.innerHTML = `Error ${xhr.status}:${message}`
        };
    });

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();

//API Fetch
(()=>{
    const $fetch = document.getElementById("fetch"),
    $fracment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> (res.ok ? res.json():Promise.reject(res)))
    .then((json) =>{
        console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fracment.appendChild($li);
        });
        $fetch.appendChild($fracment)
    })
    .catch(err =>{
        console.log(err);
        let message = err.statusText || "Ocurio un error";
        $fetch.innerHTML = `Error ${err.status}:${message}`
    })
    .finally(()=>{
        console.log( "Esto se ejecutara independientemente del resultado de la promesa Fetch");
    });
})();

//API Fetch + Async-Awaint
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fracment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            json = await res.json();

            if(!res.ok) throw{status: res.status, statusText:res.statusText}

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fracment.appendChild($li);
            });
            $fetchAsync.appendChild($fracment)
        }catch(err){
            let message = err.statusText || "Ocurio un error";
            $fetchAsync.innerHTML = `Error ${err.status}:${message}`
        } finally{
        }
    }

    getData();
})();
