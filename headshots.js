let names;
let xspeeds = [];
let yspeeds = [];

function preload() {
    names = loadStrings('names.txt');
}


function setup() {

    let div_width = document.getElementById('assembly').offsetWidth;
    let div_height = document.getElementById('assembly').offsetHeight;

    let canvas = createCanvas(div_width, div_height);
    canvas.parent("assembly");
    canvas.id('headshots-gallery');


    for (let i = 0; i < names.length; i += 1) {

        let img = createImg("assets/headshots/" + names[i] + ".jpg", 'headshot of AI.Assembly participant');

        img.class("headshot");
        img.parent("assembly-headshots");
        img.position(random(width), random(height));
        img.style('max-width', '10%');
        img.style('-webkit-filter', 'grayscale(100%)');
        img.style('filter', 'grayscale(100%)');
        img.style('border', '1px solid white');
        img.style('padding', '0.5%');
        img.style('z-index', '20000');

        xspeeds.push(random(-1, 1));
        yspeeds.push(random(-1, 1));
    }

}

function draw() {
    let headshots = selectAll('.headshot');

    for (let i = 0; i < headshots.length; i += 1) {
        let pos = headshots[i].position();
        if (pos.x > width) {
            xspeeds[i] *= -1;
        }
        headshots[i].position(pos.x + xspeeds[i], pos.y + yspeeds[i]);
    }
}