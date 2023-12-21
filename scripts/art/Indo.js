
let img;
let particles = [];

const PARTICLE_SIZE = 15;
const RESOLUTION = 20;
const easing = 0.01;

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
        this.originalX = this.x; // Store the original positions
        this.originalY = this.y;
    }

    update() {
        // Example: Change particle color when the mouse is clicked
        if (mouseIsPressed) {
            // Example: Move particles away from the mouse cursor
            let distanceToMouse = dist(this.x, this.y, mouseX - width / 2, mouseY - height / 2);
            if (distanceToMouse < 50) {
                let force = createVector(this.x - mouseX + width / 2, this.y - mouseY + height / 2);
                force.normalize();
                force.mult(10);
                this.x += force.x;
                this.y += force.y;
            }        
        } else {
            // Smoothly revert back to original positions
            this.x += (this.originalX - this.x) * easing;
            this.y += (this.originalY - this.y) * easing;            
        }
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