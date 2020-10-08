
do
    var humanPlayer = prompt(
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


function checkNumber(number){
    if (isNaN(number)){
        alert("Eu disse para escolher um número!")
        return true
    }
    return false
}

function machineChoice() {

    var machinePlayer = Math.random();

    switch (machinePlayer) {

        case machinePlayer > 0.7:
            machinePlayer = 1
            break

        case machinePlayer > 0.4:
            machinePlayer = 2
            break

        case machinePlayer < 0.4:
            machinePlayer = 3
            break
    }
    var t = choice(machinePlayer)
    alert("Computador escolheu: " + t)
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
            alert(choice(machinePlayer) + " + " + choice(humanPlayer) + " = Você venceu!")
            break
        case "machine":
            alert(choice(machinePlayer) + " + " + choice(humanPlayer) + " = Você perdeu!")
            break
        case "0":
            alert(choice(machinePlayer) + " + " + choice(humanPlayer) + " = Empate!")
            break
    }
}

