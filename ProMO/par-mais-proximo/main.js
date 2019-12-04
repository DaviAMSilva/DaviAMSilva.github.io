//////////////////////////////////////////////////////////////////////////////////////////////////////

new p5();

var points = [];
var numPoints = 10;

var list = [{ i: 0, j: 1 }, { i: 0, j: 2 }, { i: 1, j: 2 }]

function vectorLine(a, b) {
    line(a.x, a.y, b.x, b.y);
}

function createPoints(n) {
    points = [];
    for (var i = 0; i < n; i++) {
        points[i] = createVector(random(width * .01, width * .99), random(height * .01, height * .99));
    }
}

function sendTest() {
    var n;
    if ((n = document.getElementById('input').value) > 1) { createPoints(); }
    else if (n == "") { alert("Por favor insira um número."); return; }
    else { alert("O valor inserido é inválido, por favor insira um número maior que 1."); return; }
    createPoints(n);
    background(255);
    redraw();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(document.getElementById("canvas-container").clientWidth,
        document.getElementById("canvas-container").clientHeight)
        .parent("canvas-container");
    strokeCap(ROUND);
    noLoop();
    textAlign(CENTER, BOTTOM);
    textSize(20);
    background(255);
    createPoints(10);
}
function draw() {
    var c = closestPair(points);

    if (points.length < 10000) {
        stroke(0); strokeWeight(7);
        for (p of points) {
            point(p.x, p.y);
        }
    } else {
        noStroke();
        fill(150);
        text("A visualização dos pontos foi ignorada para evitar lentidão", width / 2, height * .99);
    }

    stroke(255, 0, 0); strokeWeight(15); vectorLine(...c.minPair);
    stroke(0); strokeWeight(7);
    point(c.minPair[0].x, c.minPair[0].y);
    point(c.minPair[1].x, c.minPair[1].y);

    document.getElementById("output").value = "Distância: " + nfs(c.minDist, 0, 5) + "px\nPontos: (" +
        nfs(c.minPair[0].x, 0, 3).slice(1) + "," + nfs(height - c.minPair[0].y, 0, 3).slice(1) + ") e (" +
        nfs(c.minPair[1].x, 0, 3).slice(1) + "," + nfs(height - c.minPair[1].y, 0, 3).slice(1) + ")";
}
function windowResized() {
    resizeCanvas(document.getElementById("canvas-container").clientWidth,
        document.getElementById("canvas-container").clientHeight);
    background(255);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////