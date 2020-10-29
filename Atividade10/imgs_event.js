function Open(){
    img = document.getElementById("img");
    img["src"] = "imagens/aberta.png";

    document.getElementById("texto").innerHTML = 
    "Feche a Janela (cuidado para não quebrar!)";

}

function Close() {
    img = document.getElementById("img");
    img["src"] = "imagens/fechada.png";

    document.getElementById("texto").innerHTML =
    "Abra a Janela (cuidado para não quebrar!)";
}

function Broke() {
    img = document.getElementById("img");
    img["src"] = "imagens/quebrada.png";

    document.getElementById("texto").innerHTML =
    "Avisei! Quebrou! ";
}