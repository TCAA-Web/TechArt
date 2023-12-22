let imgUrl = "../../assets/urban_serenity_original.jpg";
let img;
let p;
let particles = [];

const RESOLUTION = 15;
const PARTICLE_SIZE = 15;
const MAX_FORCE = 20;
const MIN_FORCE = 0;

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  let c = createCanvas(900, 600);
  c.parent("canvasContainer");
  spawnParticles();
}

function draw() {
  background(40);
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
}

function spawnParticles() {
  for (let x = 0; x < img.width; x += RESOLUTION) {
    for (let y = 0; y < img.height; y += RESOLUTION) {
      let _x = (x / width) * img.width;
      let _y = (y / height) * img.height;
      const color = img.get(_x, _y);
      particles.push(
        new Particle(x + PARTICLE_SIZE / 2, y + PARTICLE_SIZE / 2, color)
      );
    }
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.targetX = x;
    this.targetY = y;
  }

  update() {
    let mouseVector = createVector(mouseX, mouseY);
    let currentVector = createVector(this.x, this.y);
    let targetVector = createVector(this.targetX, this.targetY);

    let fromMouseToParticle = p5.Vector.sub(currentVector, mouseVector);
    let distanceToMouse = fromMouseToParticle.mag();

    let fromParticleToTarget = p5.Vector.sub(targetVector, currentVector);
    let distanceToTarget = fromParticleToTarget.mag();

    let totalForce = createVector(0, 0);

    if (distanceToMouse < 100) {
      let repulsionForce = map(distanceToMouse, 0, 100, MAX_FORCE, MIN_FORCE);
      fromMouseToParticle.setMag(repulsionForce);
      totalForce.add(fromMouseToParticle);
    }

    if (distanceToMouse > 0) {
      let attractionForce = map(distanceToTarget, 0, 100, MIN_FORCE, MAX_FORCE);
      fromParticleToTarget.setMag(attractionForce);
      totalForce.add(fromParticleToTarget);
    }

    this.x += totalForce.x;
    this.y += totalForce.y;
  }

  draw() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, PARTICLE_SIZE);
  }
}
