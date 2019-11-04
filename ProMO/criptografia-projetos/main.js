function paraBase(n, b) {
    var str = "", q;
    while (n > 0) {
        if ((q = n % b) <= 9) {
            str = q + str;
        } else if (q >= 10 && q <= 15) {
            str = String.fromCharCode(q + 55) + str;
        } else erro();
        n = Math.floor(n / b);
    }
    return str;
}

function main() {
    viuErro = false;

    var b = parseInt(document.getElementById("base").value), total;

    var input = document.getElementById("input").value.toUpperCase();
    if (b === 2 && /[2-9]|[A-F]/.test(input) ||
        b === 10 && /[A-F]/.test(input)) erro();

    if (b === 10) {
        total = input || 0;
    } else {
        total = 0;
        for (var i = 0; i < input.length; i++) {
            var r;

            if ((n = input.charCodeAt(i)) >= 48 && n <= 57) {
                r = n - 48;
            } else if (n >= 65 && n <= 70) {
                r = n - 55;
            } else erro();


            total += r * Math.pow(b, input.length - 1 - i);
        }
    }

    document.getElementById("output-bin").value = paraBase(total, 2) || 0;
    document.getElementById("output-dec").value = total || 0;
    document.getElementById("output-hex").value = paraBase(total, 16) || 0;
}

function erro() {
    if (!viuErro) {
        alert("Algo deu errado, por favor confira os valores e tente novamente.");
        throw new Error("Algo deu errado, por favor confira os valores e tente novamente.");
    }
}