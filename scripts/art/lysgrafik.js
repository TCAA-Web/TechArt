function setup() {
    let can = createCanvas(900, 600);
    can.parent("canvasContainer");
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
  
    // Lines
    stroke(98, 98, 98);
    strokeWeight(2);
    line(450, 0, 450, 600);
    line(150, 300, 750, 300);
  
    fill(255, 255, 255, 200);
  
    //big rectum
    rect(150, 0, 300, 300);
    rect(450, 0, 300, 300);
  
    rect(150, 300, 300, 300);
    rect(450, 300, 300, 300);
  
    //smol rectum
    rect(300, 150, 150, 150);
    rect(450, 150, 150, 150);
  
    rect(300, 300, 150, 150);
    rect(450, 300, 150, 150);
  
    //Circling rectum
    push();
    stroke(255);
    translate(300, 150);
    rotate(millis() / 11);
    rect(0, 0, 105, 105);
    pop();
  
    push();
    stroke(255);
    translate(600, 150);
    rotate(millis() / 12);
    rect(0, 0, 105, 105);
    pop();
  
    push();
    stroke(255);
    translate(300, 450);
    rotate(millis() / 15);
    rect(0, 0, 105, 105);
    pop();
  
    push();
    stroke(255);
    translate(600, 450);
    rotate(millis() / 10);
    rect(0, 0, 105, 105);
    pop();
  
    //Spinning rectum
    for (let i = 1; i <= 5; i++) {
      push();
      stroke(225);
      fill(255, 0, 0, 30);
      translate(300, 150);
      rotate((millis() / 20) * i);
      rectMode(CENTER);
      rect(0, 0, 135, 135);
      pop();
  
      push();
      stroke(225);
      fill(255, 0, 0, 30);
      translate(600, 150);
      rotate((millis() / 10) * i); 
      rectMode(CENTER);
      rect(0, 0, 135, 135);
      pop();
  
      push();
      stroke(225);
      fill(255, 0, 0, 30);
      translate(300, 450);
      rotate((millis() / 11) * i); 
      rectMode(CENTER);
      rect(0, 0, 135, 135);
      pop();
  
      push();
      stroke(225);
      fill(255, 0, 0, 30);
      translate(600, 450);
      rotate((millis() / 20) * i); 
      rectMode(CENTER);
      rect(0, 0, 135, 135);
      pop();
    }
  }
  