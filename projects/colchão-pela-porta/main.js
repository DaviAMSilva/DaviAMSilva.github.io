function main() {
    const lookup = [0, 2, 0, 4, 2, 4];

    // Conseguindo as variaveis
    var inputs = document.getElementById("input").value.match(
        /\d+\.\d+|\.\d+|\d+|\D/g
    );
    for (var i of inputs) {
        i = parseFloat(i);
    }

    // Verificar erros
    if (inputs.length !== 9 || inputs[5] !== "\n") {
        alert("Por favor insira os valores corretamente:\nExemplo:\n6  5.0  4.3\n.2  01.00");
        return;
    }

    // Algoritmo ⤵⤵⤵
    doorMax = Math.max(inputs[6], inputs[8]);
    doorMin = Math.min(inputs[6], inputs[8]);

    for (var i = 0; i < 6; i += 2) {
        if (Math.min(inputs[lookup[i]], inputs[lookup[i + 1]]) <= doorMin &&
            Math.max(inputs[lookup[i]], inputs[lookup[i + 1]]) <= doorMax) {

            // Enviando o resultado
            document.getElementById("output").value = "S";
            return;
        };
    }

    // Enviando o resultado
    document.getElementById("output").value = "N";
}