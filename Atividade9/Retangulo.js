function Retangulo(x, y){
    this.base = x;
    this.altura = y;

    this.calcArea = function(){
        return this.base * this.altura;
    };
}


let x = prompt("Base: ");
let y = prompt("Altura: ");

var ret = new Retangulo(x, y);
alert("Área = " + ret.calcArea());