let blocks = [];
let cols;
let rows;
let size = 12; // 4 times smaller square size
let offset = 1;
let d = 30; // Reduced hover distance
let img;

function preload() {
  img = loadImage('assets/violet(1946)_original.jpg');
}

function setup() {
  createCanvas(900, 600);
  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
    }
  }
  rectMode(CENTER);
}

function draw() {
  background(img);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].display(offset, d);
    }
  }
}

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.color = color(random(255), random(255), random(255)); // Random initial color
  }

  display(offset, d) {
    push();
    noFill();
    stroke(this.color);
    translate(this.x, this.y);
    this.mouseHover(d);
    rotate(this.angle);
    rect(0, 0, size - offset, size - offset);
    pop();
  }

  mouseHover(d) {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < d) {
      this.angle += 0.1;
      this.color = color(random(255), random(255), random(255)); // Change color on hover
    } else {
      if (this.angle > 0 && this.angle <= 10) {
        this.angle += 0.1;
      } else if (this.angle > 10) {
        this.angle = 0;
      }
    }
  }
}
