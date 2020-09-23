function Media()
{
    var nome = document.getElementById("txtNome").value;
    var m1 = document.getElementById("txtM1").value;
    var m2 = document.getElementById("txtM2").value;
    var m3 = document.getElementById("txtM3").value;

    var media = ((parseFloat(m1) + parseFloat(m2) + parseFloat(m3)) / 3);

    alert("Olá " + nome + "\nSua média é " + media);
}


function Operacoes()
{
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;

    var soma = parseFloat(n1) + parseFloat(n2);
    var sub = parseFloat(n1) - parseFloat(n2);
    var multi = parseFloat(n1) * parseFloat(n2);
    var div = parseFloat(n1) / parseFloat(n2);
    var mod = parseFloat(n1) % parseFloat(n2);

    alert(  
              "Soma: " + soma
            + "\nSubtração: " + sub 
            + "\nMultiplicação: " + multi
            + "\nDivisão: " + div
            + "\nResto: " + mod
        );
    
}
