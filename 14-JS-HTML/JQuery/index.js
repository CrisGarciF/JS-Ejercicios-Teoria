// $(selector).accion()

//$("h1").hide()

$(document).ready(()=>{
    // Seelctores :
    // id ="el-1" => "#el-1"
    // class ="hide" => ".hide"
    

    $(".hide").click(()=>{
        console.log("Ocultando...")
        //$("h1").hide()
        $("h1").fadeOut()
    })
    $(".show").click(()=>{
        console.log("Mostrando...")
        //$("h1").show()
        $("h1").fadeIn()
    })
    $("li").click(()=>{
        $("h1").css({color:"red"})
    })
    $("li").dblclick(()=>{
        $("h1").css({color:"green"})
    })
    $(".new-element").click(()=>{
        $("ul").append("<li>New Elemento</li>")
    })
    $(".borrar").click(()=>{
        
    })
})