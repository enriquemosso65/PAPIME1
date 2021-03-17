function verificarRespuestas(){
    var total = 5;
    var puntos = 0;
    
    var myForm  =   document.forms["quizForm"];
    var respuestas =["a","a","a","a","a"];
    
    for(var i=1; i <= total; i ++){
        if(myForm["p"+i].value === null || myForm["p" + i].value === ""){
            alert("Responde la pregunta" + i);
            return false;

        }else{
            if(myForm["p"+i].value === respuestas[i-1]){
                ++puntos;
            }
        }
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h4> Obtuviste '+ puntos+' de '+ total+ '</h4>';
    return false;
}