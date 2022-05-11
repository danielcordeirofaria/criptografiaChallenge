var botaoCriptografar = document.querySelector(".botaoCriptografar");

botaoCriptografar.addEventListener("click", function(){

    var textArea = document.querySelector("#textoInserido");

    var textoParaCriptografar = textArea.value;

    var substituindoLetraE = textoParaCriptografar.replaceAll("e","enter");

    var substituindoLetraI = substituindoLetraE.replaceAll("i","imes");
    
    var substituindoLetraA = substituindoLetraI.replaceAll("a","ai");

    var substituindoLetraO = substituindoLetraA.replaceAll("o","ober");

    var substituindoLetraU = substituindoLetraO.replaceAll("u","ufat");

    var exclusaoFiguradoQuadro = document.querySelector(".itensParaExcluir");

    if(exclusaoFiguradoQuadro){

    exclusaoFiguradoQuadro.parentNode.removeChild(exclusaoFiguradoQuadro); 

    };

    console.log(substituindoLetraU);

    novoElemento(substituindoLetraU);

    return substituindoLetraU;

});
var botaoDescriptografar = document.querySelector(".botaoDescriptografar");

botaoDescriptografar.addEventListener("click", function(){

    var textArea = document.querySelector("#textoInserido");

    var textoParaDescriptografar = textArea.value

    var substituindoEnter = textoParaDescriptografar.replaceAll("enter", "e");

    var substituindoImes = substituindoEnter.replaceAll("imes", "i");

    var substituindoAi = substituindoImes.replaceAll("ai", "a")

    var substituindoOber = substituindoAi.replaceAll("ober", "o");

    var substituindoUfat = substituindoOber.replaceAll("ufat" , "u");

    var exclusaoFiguradoQuadro = document.querySelector(".itensParaExcluir");

    if(exclusaoFiguradoQuadro){

    exclusaoFiguradoQuadro.parentNode.removeChild(exclusaoFiguradoQuadro); 

    };

    console.log(substituindoUfat);

    novoElemento(substituindoUfat);

    return substituindoUfat;
});

function novoElemento(textoFinal) {
    var elementoCriptografado = document.querySelector(".textoFinal");
    elementoCriptografado.innerHTML = textoFinal;
    console.log(elementoCriptografado);

    elementoCriptografado.classList.add("respostaFinal");

    console.log(elementoCriptografado);

    return textoFinal;

};

function copyToClipBoard() {
    var elementoCriptografado = document.querySelector(".textoFinal");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${elementoCriptografado.textContent}`)
      .then(() => {
        console.log('Copied to clipboard successfully.');
        window.location.reload(); //recarregar a pagina
      }, (err) => {
        console.log('Failed to copy the text to clipboard.', err);
      });
    } else if (window.clipboardData) {
      window.clipboardData.setData("Text", input);
    }

  }