var noiseScale = 0.009;
var scl = 10;
var move = 0.01;
var deepWater;
var shallowWater;
var beach;
var lightGrass;
var darkGrass;
var mountains;
var snow;


function setup() {
    createCanvas(800, 800);
    deepWater = color(10, 29, 108);
    shallowWater = color(29, 68, 173);
    beach = color(255, 231, 214);
    lightGrass = color(153, 171, 129);
    darkGrass = color(119, 126, 94);
    mountains = color(77, 76, 74);
    snow = color(247, 246, 247);
}

function draw() {
    background(51);
    for (var x = 0; x < width; x += scl) {
        for (var y = 0; y < height; y += scl) {
            // noStroke();
            var n = noise(x * noiseScale + move, y * noiseScale + move);
            // console.log(n);
            switch (true) {
                case (n < 0.3):
                    fill(deepWater);
                    break;
                case (n < 0.35):
                    fill(shallowWater);
                    break;
                case (n < 0.45):
                    fill(beach);
                    break;
                case (n < 0.6):
                    fill(lightGrass);
                    break;
                case (n < 0.7):
                    fill(darkGrass);
                    break;
                case (n < 0.8):
                    fill(mountains);
                    break;
                    // case (n >= 0.85):
                    //     fill(snow);
                    //     break;
                default:
                    fill(snow);
            }
            // fill(n * 255); // RGB
            // fill(n * 255, 100, 100); // HSB
            rect(x, y, scl, scl);
        }
    }
    move += noiseScale * noise(move) * 2;
}
