
let img;
let particles = [];

const PARTICLE_SIZE = 15;
const RESOLUTION = 20;

function preload() {
    img = loadImage("../../assets/krig2_original.jpg");
}

function setup() {
    let c = createCanvas(900, 600, WEBGL);
    c.parent("canvasContainer");

    orbitControl();

    spawnParticles();
}
  
function draw() {
    background(0);
    // rotateY(frameCount * 0.01);
    // image(img, 0, 0);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
}

function spawnParticles() {
    for (let i = 0; i < width; i += RESOLUTION) {
        for (let j = 0; j < height; j += RESOLUTION) {
            let x = i / width * img.width
            let y = j / height * img.height

            const color = img.get(x, y);
            particles.push(new Particle(i + PARTICLE_SIZE / 2, j + PARTICLE_SIZE / 2, color));
        }
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x - width / 2;
        this.y = y - height / 2;
        this.z = 0;
        this.color = color;
    }

    update() {

    }

    draw() {
        fill(this.color);
        noStroke();
        push();
        translate(this.x, this.y, this.z);

        for (let i = 0; i < 4; i++) {
            rotateY(HALF_PI);
            rotateX(frameCount * 0.01);
            box(PARTICLE_SIZE);
        }

        pop();
    }
}