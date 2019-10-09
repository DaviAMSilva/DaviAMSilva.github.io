var permitirNumeros = false;

function atualizarPN() {
    permitirNumeros = !document.getElementById("permitirNumeros").checked;
}

function criptografar() {
    // Conseguindo as variaveis
    var input = document.getElementById("input").value.match(/[ABCD]+/, "");

    if (input === null) {
        alert("⚠ ATENÇÃO! Insira apenas os caracteres A, B, C ou D (repetições são permitidas)");
        avisado = true;
        return;
    } else {
        input = input[0];
    }

    var output = "";

    for (var i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "A":
                output += ((Math.random() < .5 && permitirNumeros) ? "1" : "K");
                break;
            case "B":
                output += ((Math.random() < .5 && permitirNumeros) ? "2" : "X");
                break;
            case "C":
                output += ((Math.random() < .5 && permitirNumeros) ? "3" : "R");
                break;
            case "D":
                output += ((Math.random() < .5 && permitirNumeros) ? "4" : "U");
                break;
            default:
                break;
        }
    }

    // Enviando o resultado
    document.getElementById("output").value = output;
}

function descriptografar() {
    // Conseguindo as variaveis
    var input = document.getElementById("input").value.match(/[KXRU1234]+/, "");

    if (input === null) {
        alert("⚠ ATENÇÃO! Insira apenas os caracteres K, X, R, U, 1, 2, 3 ou 4 (repetições são permitidas)");
        avisado = true;
        return;
    } else {
        input = input[0];
    }

    var output = "";

    for (var i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "K":
            case "1":
                output += "A";
                break;
            case "X":
            case "2":
                output += "B";
                break;
            case "R":
            case "3":
                output += "C";
                break;
            case "U":
            case "4":
                output += "D";
                break;
            default:
                break;
        }
    }

    // Enviando o resultado
    document.getElementById("output").value = output;
}