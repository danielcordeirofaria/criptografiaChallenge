var botaoCriptografar = document.querySelector(".botaoCriptografar");

botaoCriptografar.addEventListener("click", function(){

    var textArea = document.querySelector("#textoInserido");

    var textoParaCriptografar = textArea.value;

    var substituindoLetraE = textoParaCriptografar.replaceAll("e","enter");

    var SubstituindoLetraI = substituindoLetraE.replaceAll("i","imes");
    
    var SubstituindoLetraA = SubstituindoLetraI.replace("a","ai");

    var SubstituindoLetraO = SubstituindoLetraA.replace("o","obter");

    var SubstituindoLetraU = SubstituindoLetraO.replace("u","ufat");

    var exclusaoFiguradoQuadro = document.querySelector(".itensParaExcluir");
    exclusaoFiguradoQuadro.parentNode.removeChild(exclusaoFiguradoQuadro);
    
});



//function textoParaCopiar{
  //  var textoCriptografado = SubstituindoLetraU;
    //textoCriptografado.appendChild()
//}

