var lados;
var lookup = [
    { x: -1, y: -1 },
    { x: -1, y: +0 },
    { x: +0, y: -1 },
    { x: +1, y: -1 }
];
var avisado = false;

function listarVizinhos(arr, n) {
    var lista = [];
    var i = n % lados;
    var j = Math.floor(n / lados);

    for (const l of lookup) {
        if (arr[i + l.x] && arr[i + l.x][j + l.y] && !lista.includes(arr[i + l.x][j + l.y])) lista.push(arr[i + l.x][j + l.y]);
    }

    return lista;
}

function clonarArray(arr) {
    return [...arr];
}

function casos(arr, letra, n) {
    var i = n % lados;
    var j = Math.floor(n / lados);
    var arrCopia = clonarArray(arr);
    arrCopia[i][j] = letra;

    var lista = listarVizinhos(arrCopia, n + 1);

    var ac = 0, bc = 0, cc = 0, dc = 0;
    if (n < lados * lados - 1) {
        if (!lista.includes("A")) {
            ac = casos(clonarArray(arrCopia), "A", n + 1);
        }
        if (!lista.includes("B")) {
            bc = casos(clonarArray(arrCopia), "B", n + 1);
        }
        if (!lista.includes("C")) {
            cc = casos(clonarArray(arrCopia), "C", n + 1);
        }
        if (!lista.includes("D")) {
            dc = casos(clonarArray(arrCopia), "D", n + 1);
        }
        return (ac + bc + cc + dc);
    } else {
        return 1;
    }
}

function main() {
    // Conseguir a variavel
    lados = parseInt(document.getElementById("input").value);

    if (!avisado && lados >= 10) {
        alert("⚠ ATENÇÃO! Números maiores que 10 poderão travar permanentemente o seu navegador. Continue ao seu proprio risco...");
        avisado = true;
        return;
    }

    var arr = [];
    for (var i = 0; i < lados; i++) {
        arr[i] = [];
        for (var j = 0; j < lados; j++) {
            arr[i][j] = "";
        }
    }

    var ac = casos(arr, "A", 0);
    var bc = casos(arr, "B", 0);
    var cc = casos(arr, "C", 0);
    var dc = casos(arr, "D", 0);

    // Enviar a variavel
    document.getElementById("output").value = ac + bc + cc + dc;
}