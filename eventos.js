
document.getElementById("divalert").addEventListener("click", divAlert)
document.getElementById("btn").addEventListener("click", function(event){
alert("Hola!")
event.stopPropagation();
})


function divAlert(){
    
    alert("Hola! Soy el div")
}


