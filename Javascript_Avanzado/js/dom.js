//Holar computadora
/* let texto = "Hola soy cristian Garcia futuro desarrollador"
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
hablar(texto) */


/* console.log("******* Elementos del Documento **********");
console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.title);
console.log(document.chatset);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000); */




//NODOS, ELEMENTOS Y SELECTORES

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el))
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */




//Atributos y Data-Attributes

/* console.log(document.documentElement.lang); 
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en"
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX")
console.log(document.documentElement.lang);

const $linkDom = document.querySelector(".link-dom")

$linkDom.setAttribute("target","_blank")
$linkDom.setAttribute("rel","noopener")
$linkDom.setAttribute("href","https://www.youtube.com/watch?v=RacxNskxySo&list=RD5r3B7yz6J68&index=11&ab_channel=AnnenMayKantereit")
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel")
console.log($linkDom.hasAttribute("rel"));

//Data-Attributes
console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.id);
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento")
console.log($linkDom.dataset.description);
$linkDom.dataset.description ="Suscribete a mi cana y comparte"
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-id"));
console.log($linkDom.removeAttribute("data-id"));
console.log($linkDom.hasAttributeNS("data-id")); */






//DOM: Estilos y Variables CSS

/* const $linkDom = document.querySelector(".link-dom")

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));

$linkDom.style.setProperty("text-decoration","none")
$linkDom.style.setProperty("display","block")
$linkDom.style.width = "50%"
$linkDom.style.textAlign = "center"
$linkDom.style.marginLeft = "auto"
$linkDom.style.marginRight = "auto"
$linkDom.style.padding = "1rem"
$linkDom.style.borderRadius = ".5rem"


//Variables CSS - Custom Propertis CSS
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-color",varDarkColor) */





//class CSS

/* const $card = document.querySelector(".card")
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia","rotate-45","rotate-135")
*/




// Texto y HTML

/* const $whatlsDOM = document.getElementById("que-es")
let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;
//$whatlsDOM.innerText = text;
$whatlsDOM.textContent = text;
$whatlsDOM.innerHTML = text;
$whatlsDOM.outerHTML = text; */





//Traversing: Recorriendo el DOM

/* const $cards = document.querySelector(".cards")
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */






// Creando elementos y Fragmentos

/* const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure")

$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("alt","Animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)


const estaciones = ["Primavera","Verano","Otoño","Invierno"],
$ul = document.createElement("ul");

document.write("<h3> Estaciones del año </h3>")
document.body.appendChild($ul)

estaciones.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})

//Fragmentos
const meses = [
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"
]
const $ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment()

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3> Estaciones del año </h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3) */



//Templates HTML

/* const $cards =  document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    }
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title;
    

    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)
})

$cards.appendChild($fragment) */



//Modificando Elementos (Old Style)

/* const $cards =  document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true)

$newCard.innerHTML = `
<img src= "https://placeimg.com/200/200/any" alt ="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card")

//$cards.replaceChild($newCard, $cards.children[2])
//$cards.insertBefore($newCard, $cards.firstElementChild)
//$cards.removeChild($cards.lastElementChild)
document.body.appendChild($cloneCards) */



//Modificando Elementos (Cool Style)

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/* 
const $cards =  document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contenCard = `
<img src= "https://placeimg.com/200/200/any" alt ="Any">
<figcaption></figcaption>
`;
$newCard.classList.add("card")

$newCard.insertAdjacentHTML("beforeend", $contenCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
$cards.insertAdjacentElement("afterbegin", $newCard)

$cards.prepend($newCard)
$cards.before($newCard)
$cards.append($newCard)
$cards.after($newCard)
*/ 




//MANEJADORES DE EVENTOS

/* function holaMundo(){
    alert("Hola mundo")
    console.log(event);
}

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`)
}
const $eventoSemantico = document.getElementById("evento-samantico"),
$eventoMultiple = document.getElementById("evento-multiple"),
$eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo
$eventoSemantico.onclick = function(e){
    alert("hola mundo Manjedaror de eventos Semantico")
    console.log(e);
}

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e) =>{
    alert("Hola manejador de eventos multiples")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
})

$eventoMultiple.addEventListener("click", ()=> {
    saludar()
    saludar("Cristian")
})

const removerDobleClick = (e) => {
    alert(`Removiendo el evento tipo ${e.type}`)
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick)
    $eventoRemover.disabled = true
}

$eventoRemover.addEventListener("dblclick", removerDobleClick)
 */




// FLUJO DE VENTOS - DELEGACION DE VENTOS 

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a"); */

/* function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    //e.stopPropagation()
}

document.addEventListener("click", (e) =>{
    console.log("Click en", e.target);
    
    if(e.target.matches(".eventos-flujo a")){
        alert(`Hola soy tu amigo, docente virtual `);
        e.preventDefault();
    }
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e)
    }
}) */

/* $divsEventos.forEach(div => {
    //Fase de burbuja
    div.addEventListener("click", flujoEventos)
    //div.addEventListener("click", flujoEventos,false)
    //Fase de captura
    //div.addEventListener("click", flujoEventos,true)
    /* div.addEventListener("click", flujoEventos,{
        captura: true,
        once: true
    })
}) 
*/

/* 
$linkEventos.addEventListener("click",  (e) => {
    alert(`Hola soy tu amigo, docente virtual `);
    e.preventDefault();
    e.stopPropagation()
})
 */






// PROPIEDADES Y EVENTOS

/* window.addEventListener("resize",(e) =>{
    console.clear()
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

window.addEventListener("scroll",(e) =>{
    console.log("-----scroll------");
    console.clear()
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

window.addEventListener("load",(e)=> {
    console.log("----load----");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded",(e) =>{
    console.log("-----DOMContentLoaded----");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})
 */






// BOM: METODOS

//window.alert("Alerta")
//window.confirm("Confirmacion")
//window.prompt("Aviso")

/* const $btnAbrir = document.getElementById("abrir-ventana"),
 $btnCerrar = document.getElementById("cerrar-ventana"),
 $btnImprimir= document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com")
});

$btnCerrar.addEventListener("click",(e)=>{
    ventana.close()
});
$btnImprimir.addEventListener("click",(e)=>{
    window.print()
});
*/






//Objetos: URL, Historial y Navegador
/* console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);
//location.reload()

console.log(history);
console.log(history.length);
//console.log(history.back(3));
//console.log(history.go(-3));
//console.log(history.forward(1));


navigator.connection //nos da informacion si estamos conectados e informacion de la conexion del usuario
navigator.geolocalizacion //: api de google para que nos muestre la ubicacion
navigator.mediaDevices //: Nos indica si hay camaras , microfonos , etc
navigator.mimeTipes //: Es el tipo de formato que acepta el navegador.
navigator.onLine //: Este es el indicador que detecta si el usuario pierde o vuelve a conectarse a la red
navigator.servirceWorker //: es una api que nos ayuda convertir en un sitio web , en una aplicacion instalable
navigator.storage //: api de almacenamiento 
navigator.usb //: este detecta dispositivos usb 
navigator.userAgent //: nos da informacion sobre la plataforma que se conecta a nuestra aplicacion.
*/

















//TITULO DINAMICO

/* function tituloDinamico(){
    let i = 0
    setInterval(() => {
        i++
        document.title = `DOM - Cambio nº ${i}`
    }, 1000);
}

tituloDinamico() */