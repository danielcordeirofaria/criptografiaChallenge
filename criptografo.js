var textoParaCriptografar = document.querySelector("#textoInserido");

var botaoCriptografar = document.querySelector(".botaoCriptografar");

botaoCriptografar.addEventListener("click", function(){
    var resultadoTextoParaCriptografar = textoParaCriptografar.replace("e","enter");
    //var textoParaCriptografar = textoParaCriptografar.replace("i","imes");
    //var textoParaCriptografar = textoParaCriptografar.replace("a","ai");
    //var textoParaCriptografar = textoParaCriptografar.replace("o","obter");
    //var textoParaCriptografar = textoParaCriptografar.replace("u","ufat");
    figuraDoQuadro.remove();
    console.log(resultadoTextoParaCriptografar.value);
});