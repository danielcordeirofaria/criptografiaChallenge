var textArea = document.querySelector("#textoInserido");

var textoParaCriptografar = textArea.value

var botaoCriptografar = document.querySelector(".botaoCriptografar");

botaoCriptografar.addEventListener("click", function(){
    var resultadoTextoParaCriptografar = textoParaCriptografar.replace("e","enter");
    //var textoParaCriptografar = textoParaCriptografar.replace("i","imes");
    //var textoParaCriptografar = textoParaCriptografar.replace("a","ai");
    //var textoParaCriptografar = textoParaCriptografar.replace("o","obter");
    //var textoParaCriptografar = textoParaCriptografar.replace("u","ufat");
    var exclusaoFiguradoQuadro = document.querySelector(".itensParaExcluir")
    exclusaoFiguradoQuadro.parentNode.removeChild(exclusaoFiguradoQuadro);
    console.log(resultadoTextoParaCriptografar);
});