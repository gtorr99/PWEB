
var idade = []
var sexo = []
var opiniao = []

for (let i = 0; i < 3; i++) {

    idade.push(prompt("Informe sua idade: "));
    sexo.push(prompt("Informe seu sexo: "));
    opiniao.push(prompt("Qual sua opinião? ótimo=4, bom=3, regular=2, péssimo=1"));
    
}

alert("Média das idades: " + media());
alert("Maior idade: " + max());
alert("Menor idade: " + min());
alert("Total péssimos: " + pessimo());
alert("Porcentagem Ótimo e Bom: " + porcentagem() + "%");
alert("Total de: "
        +  "\nHomens: "   + totalSexo('h') 
        +  "\nMulheres: " + totalSexo('m'));

function media() {
    let soma = 0
    for (let index = 0; index < idade.length; index++) {
        soma += parseInt(idade[index], 10);
    }
    return soma / idade.length;
}

function max() {
    let max = idade[0];
    for (let index = 1; index < idade.length; index++) {
        if (idade[index] > max)
            max = idade[index];
    }
    return max;
}

function min() {
    let min = idade[0];
    for (let index = 1; index < idade.length; index++) {
        if (idade[index] < min)
            min = idade[index];
    }
    return min;
}

function pessimo() {
    let contador = 0;
    for (let index = 0; index < opiniao.length; index++) {
        if (opiniao[index] == 1)
            contador++;
    }
    return contador;
}

function porcentagem() {
    
    let contador = 0;
    for (let index = 0; index < opiniao.length; index++) {
        if (opiniao[index] == 4 || opiniao[index] == 3)
            contador++;
    }
    return (contador / opiniao.length) * 100;
}

function totalSexo(s) {
    let contaHomem = 0;
    let contaMulher = 0;

    for (let index = 0; index < sexo.length; index++) {
        if (sexo[index] == 'M' || sexo[index] == 'm')
            contaHomem++;
        else
            contaMulher++;
    }
    return s == 'h' ? contaHomem : contaMulher;
}

