/**
AVISO: Embora o código esteja de acordo com o pseudocódigo apresentado,
os resultados dos itens do problema 3.1 não condizem com os resultados desse programa
*/
function main() {
    // Conseguindo as variaveis
    var inicial = document.getElementById("input").value

    if (inicial.length !== 4) {
        alert("⚠ ATENÇÃO! Insira exatamente 4 caracteres");
        return;
    }

    var final = inicial[2]
        + inicial[3]
        + inicial[1]
        + inicial[0];

    // Enviando o resultado
    document.getElementById("output").value = final;
}