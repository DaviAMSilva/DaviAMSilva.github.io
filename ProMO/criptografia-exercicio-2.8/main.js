function main() {
    // Conseguindo as variaveis
    var inicial = document.getElementById("input").value.toUpperCase()
        .replace(/\s+|\n+/g, "");

    if (/[^ABEP]/.test(inicial)) {
        alert("⚠ ATENÇÃO! Insira apenas os caracteres: A, B, E ou P (repetições são permitidas)");
        return;
    }

    var final = "";

    var y = 0;

    for (var i = 0; i < inicial.length; i++) {
        if (i % 3 === 0) y = 14;
        if (i % 3 === 1) y = 1;
        if (i % 3 === 2) y = 15;

        var x = inicial[i];

        if (x === "A") x = 1;
        if (x === "B") x = 2;
        if (x === "E") x = 5;
        if (x === "P") x = 16;

        var z = x + y + "";

        final += z + " ";
    }

    // Enviando o resultado
    document.getElementById("output").value = final;
}