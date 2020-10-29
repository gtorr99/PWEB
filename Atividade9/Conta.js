function Conta(){
    // nome correntista
    var nome;
    this.getNome = function () {
        return nome;
    };
    this.setNome = function (value) {
        nome = value;
    };

    // banco
    var banco;
    this.getBanco = function () {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };

    // numConta
    var numConta;
    this.getNumConta = function () {
        return numConta;
    };
    this.setNumConta = function (value) {
        numConta = value;
    };

    // saldo
    var saldo;
    this.getSaldo = function () {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };
}

function Corrente(){
    var valorSaldoEspecial;
    this.getValorSaldoEspecial = function () {
        return valorSaldoEspecial;
    };
    this.setValorSaldoEspecial = function (value) {
        valorSaldoEspecial = value;
    };
}

function Poupanca() {
    var juros;
    this.getJuros = function () {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    var dataVencimento;
    this.getDataVencimento = function () {
        return dataVencimento;
    };
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    };
}

// Herança
Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

// Instanciação de Objetos
corrente = new Corrente();
poupanca = new Poupanca();

// Sets de corrente
corrente.setNome("Gabriel Torres");
corrente.setBanco("Nubank");
corrente.setNumConta("321032-x");
corrente.setSaldo(10000);
corrente.setValorSaldoEspecial(5000);

// Sets de poupanca
poupanca.setNome("Gabriel Guimarães");
poupanca.setBanco("Santander");
poupanca.setNumConta("93029-y");
poupanca.setSaldo(20000);
poupanca.setJuros(1.5);
poupanca.setDataVencimento(30);

alert(
        "Dados Conta Corrente:"
        + "\n Nome: "               + corrente.getNome()
        + "\n Banco: "              + corrente.getBanco()
        + "\n Conta: "              + corrente.getNumConta()
        + "\n Saldo: R$ "           + corrente.getSaldo()
        + "\n Saldo Especial: R$ "  + corrente.getValorSaldoEspecial()  
    );

alert(
    "Dados Conta Poupança:"
    + "\n Nome: "               + poupanca.getNome()
    + "\n Banco: "              + poupanca.getBanco()
    + "\n Conta: "              + poupanca.getNumConta()
    + "\n Saldo: R$ "           + poupanca.getSaldo()
    + "\n Juros: "              + poupanca.getJuros() + "%"
    + "\n Data de Vencimento: " + poupanca.getDataVencimento()
);