// the button start 
function rotatey (){
    $(".back").css("transform" , "rotateY(180deg)")

}

// the welcoming function 
document.querySelector(".control-buttons span").onclick = function (){
    var yourName = prompt("Chnowa esmk ?"); 
    if (yourName==null||yourName==''){
        document.querySelector('.name span').innerHTML='unknown'

    } else {
        document.querySelector('.name span').innerHTML=yourName
    }
    document.querySelector(".control-buttons").remove()
}
