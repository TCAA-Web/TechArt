const pointArray = [];
const flowX = 0.005;
const flowY = 0.005;
let img;
const showFps = false;
const shouldLerp = false;

//let startingPoint;
let particleArray = [];
let numFlows = 1000;
let speed = 0.005;

// Particle offsets
const xOffset = 0.2;
const yOffset = 1;
const zOffset = 0.1;

function preload() {
  img = loadImage("../assets/moonshine_original.png");
  img.loadPixels();
}

function setup() {
  let c = createCanvas(900, 600);
  c.parent("canvasContainer");
  for (let y = 0; y < window.innerWidth; y++) {
    if (y % 25 === 0) {
      for (let x = 0; x < window.innerHeight; x++) {
        if (x % 25 === 0) {
          pointArray.push(
            new GridLine(
              x,
              y,
              10,
              map(noise(flowX * x, flowY * y), xOffset, yOffset, zOffset, TAU)
            )
          );
        }
      }
    }
  }

  for (let i = 0; i < numFlows; i++) {
    particleArray.push(
      new Particle(
        Math.round(Math.random(0) * 900),
        Math.round(Math.random(0) * 600),
        0,
        0,
        speed
      )
    );
  }
  background(0);
}

function draw() {
  //image(img, 0, 0);
  if (showFps) {
    let fps = frameRate();
    fill(255);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
  }
  //image(img, 0, 0);
  //pointArray.forEach((point) => point.draw());
  particleArray.forEach((particle) => particle.draw());

  if (frameCount % 1000 == 0) {
    particleArray.length = 0;
  }
}

class GridLine {
  constructor(x, y, radius, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.radius = radius;
    this.v = createVector(
      x + radius * Math.cos(angle),
      y + radius * Math.sin(angle)
    );
  }

  draw() {
    line(this.x, this.y, this.v.x, this.v.y);
    stroke("white");
    strokeWeight(2);
  }
}

class Particle {
  constructor(x, y, angle, radius, speed) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.radius = radius;
    this.strokeSize = 2;
    this.speed = speed;
    this.alpha = 200;
    this.color = color(0);
    this.v = createVector(
      x + radius * Math.cos(angle),
      y + radius * Math.sin(angle)
    );
    this.lineArray = [
      [this.x, this.y],
      [this.x, this.y],
      [this.v.x, this.v.y],
      [this.v.x, this.v.y],
    ];
  }

  draw() {
    beginShape();
    this.lineArray.forEach((line) => {
      return curveVertex(line.x, line.y);
    });
    endShape();
    strokeWeight(this.strokeSize);
    this.color = color(img.get(this.x, this.y));
    this.color.setAlpha(this.alpha);
    stroke(this.color);
    this.update();
  }

  update() {
    pointArray.forEach((point, index) => {
      if (
        this.x >= point.x &&
        pointArray[index + 1] &&
        this.x <= pointArray[index + 1].x
      ) {
        if (this.y >= point.y && pointArray[index + 1]) {
          this.v = point.v.copy();
          this.angle = shouldLerp
            ? lerp(this.angle, point.angle, 0.005)
            : point.angle;
        }
      }
    });
    if (this.strokeSize >= 0) {
      this.strokeSize -= 0.001;
    }
    this.x += this.v.x * cos(this.angle) * speed;
    this.y += this.v.y * sin(this.angle) * speed;
    this.lineArray.shift();
    this.lineArray.push({ x: this.x, y: this.y });
    this.speed += 0.0005;
    this.alpha += 0.001;
  }
}
