var botaoCriptografar = document.querySelector(".botaoCriptografar");

botaoCriptografar.addEventListener("click", function(){

    var textArea = document.querySelector("#textoInserido");

    var textoParaCriptografar = textArea.value;

    var substituindoLetraE = textoParaCriptografar.replaceAll("e","enter");

    var substituindoLetraI = substituindoLetraE.replaceAll("i","imes");
    
    var substituindoLetraA = substituindoLetraI.replaceAll("a","ai");

    var substituindoLetraO = substituindoLetraA.replaceAll("o","obter");

    var substituindoLetraU = substituindoLetraO.replaceAll("u","ufat");

    var exclusaoFiguradoQuadro = document.querySelector(".itensParaExcluir");

    exclusaoFiguradoQuadro.parentNode.removeChild(exclusaoFiguradoQuadro); 

    novoElemento();
});

function novoElemento() {
    var elementoCriptografado = document.createElement("div");
    var textoCriptografado = document.createTextNode(".substituindoLetraU");

    elementoCriptografado.appendChild(textoCriptografado);

console.log(elementoCriptografado);
};