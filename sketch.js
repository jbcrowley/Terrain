var noiseScale = 0.009;
var scl = 20;
var move = 0.01;

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
}

function draw() {
    background(51);
    for (var x = 0; x < width; x += scl) {
        for (var y = 0; y < height; y += scl) {
            noStroke();
            // fill(noise(x * noiseScale + move, y * noiseScale + move) * 255);
            fill(noise(x * noiseScale + move, y * noiseScale + move) * 255, 100, 100);
            rect(x, y, scl, scl);
        }
    }
    move += noiseScale * noise(move) * 2;
}
