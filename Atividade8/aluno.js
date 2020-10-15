var alunoLiteral = {
    ra: 123456,
    nome: "Gabriel"
};

alert("RA: " + alunoLiteral.ra + "\nNome: " + alunoLiteral.nome)

var alunoObj = new Object();
alunoObj.ra = 123456;
alunoObj.nome = "Gabriel";

alert("RA: " + alunoObj.ra + "\nNome: " + alunoObj.nome)

var alunoDotNot = {};
var propriedade1 = 'ra';
var propriedade2 = 'nome';
alunoDotNot[propriedade1] = 123456;
alunoDotNot[propriedade2] = "Gabriel";

alert("RA: " + alunoDotNot.ra + "\nNome: " + alunoDotNot.nome)


