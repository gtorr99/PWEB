var machinePlayer
var humanPlayer

do{


    do
        humanPlayer =     prompt(
                                    "Escolha o número e desafie a sorte!:      \
                                    \n 1 - Pedra   \
                                    \n 2 - Papel   \
                                    \n 3 - Tesoura \
                                ");

    while(checkNumber(humanPlayer))

    result(humanPlayer,machineChoice());

    var stop = prompt("Deseja continuar? \
                    \n 1 - Sim        \
                    \n 0 - Não        \
                    ")
}while(stop == "1" && !checkNumber(stop))

function checkNumber(number){
    if (isNaN(number)){
        alert("Eu disse para escolher um número!")
        return true
    }
    return false
}

function machineChoice() {

    machinePlayer = Math.random();


        if(machinePlayer > 0.7)
            machinePlayer = 1

        else if (machinePlayer > 0.4)
            machinePlayer = 2

        else
            machinePlayer = 3

    alert("Você escolheu: " + choice(parseInt(humanPlayer))
        +"\nComputador escolheu: " + choice(machinePlayer))
    return machinePlayer
}

function choice(num) {
    switch (num) {

        case 1:
            return "Pedra"

        case 2:
            return "Papel"

        case 3:
            return "Tesoura"
    }
}

function result(human, machine) {

    if (human == 1 && machine == 3)
        win("human")

    else if (human == 3 && machine == 1) 
        win("machine")

    else if (human < machine)
        win("machine") 

    else if (human > machine)
        win("human") 
    else
        win("0")
}

function win(winner){
    switch(winner){
        case "human":
            alert(choice(machinePlayer) + " + " + choice(parseInt(humanPlayer)) + " = Você venceu!")
            break
        case "machine":
            alert(choice(machinePlayer) + " + " + choice(parseInt(humanPlayer)) + " = Você perdeu!")
            break
        case "0":
            alert(choice(machinePlayer) + " + " + choice(parseInt(humanPlayer)) + " = Empate!")
            break
    }
}

