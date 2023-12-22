let num = 4;
let img, prts, locs, w, h;
let dragging = false;
let completed = false;

function preload() {
  img = loadImage('assets/dragon.jpg');
}

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent("canvasContainer");

  locs = new Array(num);

  for (let j = 0; j < num; j++) {
    locs[j] = new Array(num);

    for (let i = 0; i < num; i++) {
      locs[j][i] = num * j + i;
    }
  }

  prts = new Array(num * num);
  w = int(width / num);
  h = int(height / num);

  for (let i = 0; i < num * num; i++) {
    let col = i % num;
    let theRow = int(i / num);
    prts[i] = img.get(col * img.width / num, theRow * img.height / num, img.width / num, img.height / num);
  }

  for (let i = 0; i < num * num; i++) {
    swap(locs, int(random(num)), int(random(num)), int(random(num)), int(random(num)));
  }
}

function draw() {
  background(0);

  for (let j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      image(prts[locs[j][i]], w * i, h * j, w - 1, h - 1);
    }
  }

  // Check if the puzzle is completed
  if (!dragging && puzzleCompleted()) {
    displayCompletionMessage();
  }
}

function mousePressed() {
  dragging = true;
}

function mouseReleased() {
  dragging = false;
}

function mouseMoved() {
  if (dragging) {
    cursor('grabbing');
  } else {
    cursor(HAND);
  }
}

function mouseDragged() {
  if (0 <= mouseX && mouseX < width && 0 <= mouseY && mouseY < height &&
    0 <= pmouseX && pmouseX < width && 0 <= pmouseY && pmouseY < height) {
    let mi = int(mouseX / w);
    let mj = int(mouseY / h);
    let pmi = int(pmouseX / w);
    let pmj = int(pmouseY / h);
    swap(locs, mi, mj, pmi, pmj);

    cursor('grabbing');
  }
}

function swap(a, i1, j1, i2, j2) {
  let t = a[j1][i1];
  a[j1][i1] = a[j2][i2];
  a[j2][i2] = t;
}

// Function to check if the puzzle is completed
function puzzleCompleted() {
  for (let j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      if (locs[j][i] !== num * j + i) {
        return false;
      }
    }
  }
  return true;
}

// Function to display the completion message
function displayCompletionMessage() {
  // Add a semi-transparent background
  fill(0, 128); // Change to green (R: 0, G: 128, B: 0) and set alpha to 128
  rect(0, 0, width, height);

  textSize(32);
  fill(0, 255, 0); // Change to green (R: 0, G: 255, B: 0)
  textAlign(CENTER, CENTER);
  text("Tillykke! Du udførte puslespillet!\nReload for at prøve igen.", width / 2, height / 2);
}
