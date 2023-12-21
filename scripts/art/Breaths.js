let c;
let angle = 0;
let sound;
let isPlaying = true; // Variable to track the sound state
let isAnimating = true; // Variable to track the animation state
let circles = []; // Array to store circle data

function preload() {
  soundFormats('mp3', 'ogg');
  sound = loadSound('./assets/sound/Breathing_Sound_Effect.mp3');
}

function setup() {
  c = createCanvas(900, 600);
  centerCanvas();

  // Start the sound loop
  sound.loop();
}

function draw() {
    background(255); // White background
  
    // Rotate the entire scene 90 degrees to the left
    translate(width, 0);
    rotate(HALF_PI);
  
    // Draw the left white rectangle
    fill(255);
    noStroke();
    rect(0, 0, height / 2, width);
  
    // Draw the right black rectangle
    fill(0);
    rect(height / 2, 0, height / 2, width);
  
    // Draw the first color (RGB: 222, 184, 135)
    stroke(222, 184, 135);
    strokeWeight(80);
    noFill();
    rect(0, 0, height, width);
  
    // Draw the second color (RGB: 205, 170, 125)
    stroke(205, 170, 125);
    rect(0, 0, height, width);
  
    // Draw the circles only when animating or paused
    drawNestedCircles(height / 2, width / 1.5, 4, 300, 90, 40);
  
    // Update the angle for animation
    if (isAnimating) {
      angle += 0.02;
    }
  }
  
  
function drawNestedCircles(x, y, numCircles, startingDiameter, gap, fourthCircleSize) {
  for (let i = 0; i < numCircles; i++) {
    let currentDiameter;

    if (i === 1) {
      currentDiameter = startingDiameter - i * gap * 1.2 + sin(angle) * 20;
      fill(0, 150);
      drawYinYang(x, y, currentDiameter);
      continue;
    } else {
      currentDiameter = startingDiameter - i * gap;
    }

    noStroke();

    if (i === 0 || i === 2) {
      fill(222, 184, 135);
    } else if (i === 3) {
      fill(0, 150);
      drawReverseYinYang(x, y, fourthCircleSize);
      continue;
    } else {
      fill(0, 0);
    }

    ellipse(x, y, currentDiameter, currentDiameter);

    if (i % 2 === 1) {
      if (i !== 3) {
        drawYinYang(x, y, currentDiameter);
      }
    }

    // Store circle data for redrawing when paused
    circles[i] = { x, y, diameter: currentDiameter };
  }
}

function drawYinYang(x, y, diameter) {
  let radius = diameter / 2;

  fill(0);
  arc(x, y, diameter, diameter, PI / 2, -PI / 2, CHORD);

  fill(255);
  arc(x, y, diameter, diameter, -PI / 2, PI / 2, CHORD);

  fill(0);
  ellipse(x - diameter * 0.25, y, diameter * 0.2);

  fill(255);
  ellipse(x + diameter * 0.25, y, diameter * 0.2);
}

function drawReverseYinYang(x, y, diameter) {
  let radius = diameter / 2;

  fill(255);
  arc(x, y, diameter, diameter, PI / 2, -PI / 2, CHORD);

  fill(0);
  arc(x, y, diameter, diameter, -PI / 2, PI / 2, CHORD);

  fill(255);
  ellipse(x - diameter * 0.25, y, diameter * 0.2);

  fill(0);
  ellipse(x + diameter * 0.25, y, diameter * 0.2);
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  c.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function mousePressed() {
  // Toggle pause/play when the mouse is pressed
  if (isPlaying) {
    sound.pause();
    noLoop(); // Stop the animation loop
  } else {
    sound.loop();
    loop(); // Resume the animation loop
  }
  isPlaying = !isPlaying;

  // Toggle animation pause/resume when the mouse is pressed
  isAnimating = !isAnimating;

  // Redraw circles when paused
  if (!isAnimating) {
    for (let i = 0; i < circles.length; i++) {
      let { x, y, diameter } = circles[i];
      if (i === 1 || i === 3) {
        fill(i === 1 ? 0 : 255, 150);
        if (i === 1) {
          drawYinYang(x, y, diameter);
        } else {
          drawReverseYinYang(x, y, diameter);
        }
      } else {
        fill(0, 0);
        ellipse(x, y, diameter, diameter);
      }
    }
  }
}
