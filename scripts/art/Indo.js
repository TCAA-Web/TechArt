
let img;
let particles = [];

const PARTICLE_SIZE = 15;
const RESOLUTION = 25;
const easing = 0.01;

function preload() {
    img = loadImage("../../assets/krig2_original.jpg");
}

function setup() {
    // Create a canvas with WEBGL renderer
    let c = createCanvas(900, 600, WEBGL);
    c.parent("canvasContainer");

    // Enable orbit control for easy 3D navigation if needed(zoom, orbit rundt om model..)
    orbitControl();

    spawnParticles();
}
  
function draw() {
    background(0);
    // rotateY(frameCount * 0.01);
    // image(img, 0, 0);
    // Update and draw each particle
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
}

// Function to spawn particles based on image pixels
function spawnParticles() {
    for (let i = 0; i < width; i += RESOLUTION) {
        for (let j = 0; j < height; j += RESOLUTION) {
            // Map particle positions to image coordinates
            let x = i / width * img.width
            let y = j / height * img.height

            // Get color from image at current position
            const color = img.get(x, y);

            // Center the particles in the grid
            let xOffset = (img.width * (RESOLUTION / width)) / 5;
            let yOffset = (img.height * (RESOLUTION / height)) / 5;

            // Create a new particle with the calculated position and color
            particles.push(new Particle(i + xOffset + PARTICLE_SIZE / 2, j + yOffset + PARTICLE_SIZE / 2, color));
        }
    }
}

class Particle {
    constructor(x, y, color) {
        // Set initial position relative to canvas center
        this.x = x - width / 2;
        this.y = y - height / 2;
        this.z = 0;

        // Store the color of the particle
        this.color = color;

        // Store the original positions for smooth transitions
        this.originalX = this.x;
        this.originalY = this.y;
    }

    update() {
        
        if (mouseIsPressed) {
            // Move particles away from the mouse cursor
            let distanceToMouse = dist(this.x, this.y, mouseX - width / 2, mouseY - height / 2);
            if (distanceToMouse < 50) {
                // Calculate force vector away from the mouse
                let force = createVector(this.x - mouseX + width / 2, this.y - mouseY + height / 2);
                force.normalize();
                force.mult(10);

                // Apply frce to particle position
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
        // Disable stroke for a cleaner look
        noStroke();
        // Push and translate to the particle's position
        push();
        translate(this.x, this.y, this.z);

        // Create a box at the particle's position with rotation for visual effects
        for (let i = 0; i < 4; i++) {
            rotateY(frameCount * 0.01);
            rotateX(frameCount * 0.01);
            box(PARTICLE_SIZE);
        }

        // Pop to revert transformation
        pop();
    }
}