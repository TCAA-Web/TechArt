
function setup() {
  createCanvas(900, 600);
  
  let c = createCanvas(900, 600)
  c.parent("canvasContainer");
}

function draw() {
  background(55, 70, 160);

  // landscape
  fill(255); 
  rect(0, 300, 1500, 1500);

  // snow
  filter(BLUR);
  fill(255);
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(2, 8);
    ellipse(x, y, size, size);
  }

  // snowman
  
   stroke(190)
  ellipse(300, 430, 155, 145);
  ellipse(300, 350, 130, 130);
  ellipse(300, 250, 110, 115);
  noStroke();
  
 
  // hat
  fill(0);
  rect(245, 180, 115, 40);
  rect(275, 120, 50, 60);
  

  // light 
  stroke(0);
  strokeWeight(15);
  line(600, 400, 600, 0);
  
  noStroke();


  // light
  let radius = 15;
  for (let i = 0; i < 11; i++) {
    let offset = map(i, 0, 5, 0, radius);
    fill(255, 255, 0, 50);
    ellipse(600, 0 - offset, radius * 22, radius * 22);
  }
}