var nums = []
for (let i = 0; i < 3; i++)
    nums[i] = prompt("Insira o " + String(i+1) + "º número: ");

comparaNum(nums[0], nums[1], nums[2]);

function comparaNum(x, y, z){
    let num1 = parseFloat(x)
    let num2 = parseFloat(y)
    let num3 = parseFloat(z)

    if (num1 == num2 == num3)
        alert("Os três números são iguais: " + num1)

    else if (num1 == num3)
        alert("O 1º e o 3º números são iguais: " + num1)

    else if (num2 == num3)
        alert("O 2º e o 3º números são iguais:" + num2)

    let maior = Math.max(num1, num2, num3) 
    alert("Maior: " + maior)


    
}