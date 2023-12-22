let slider;

function setup() {
    let c = createCanvas(900, 600);
    c.parent("canvasContainer");
//VI BRUGER : fill(hue,saturation,brightness)
    colorMode(HSB);
    noStroke();

//Slider 1
    slider = createSlider(0, 360);
    slider.position(660, 735);
    slider.size(100);
    slider.style('-webkit-appearance: none;')

//slider 2
    slider2 = createSlider(0, 100);
    slider2.position(770, 735);
    slider2.size(100);
    slider2.style('-webkit-appearance: none;')

//slider 3
    slider3 = createSlider(0, 100);
    slider3.position(880, 735);
    slider3.size(100);
    slider3.style('-webkit-appearance: none;')

}

//bruger modulo-operatoren (%) til at få slideren til at gå tilbage til 0 efter den har nået 100 eller 360
function draw() {
// Use the slider as a grayscale value.
    let h = slider.value();
    let s = slider2.value();
    let b = slider3.value();
    background(0, 0, 100);  
//console.log((h+80) % 360);

    
//asymetrisk firkant
    fill(h, s, b);
    quad(200, 100, 80, 40, 40, 30, 30, 40);
//firkanter
    rect(300, 100, 400, 20);
    rect(10, 20, 350, 30);
    rect(700, 500, 100, 90);
    fill((h+150) % 360, (s+10) % 100, (b+75) % 100);
    rect(10, 20, 50, 550);
    rect(100, 310, 20, 255);
    fill((h+350) % 360, (s+10) % 100, (b+75) % 100);
    rect(200, 20, 60, 255);
    rect(400, 40, 40, 255);
    fill((h+280) % 360, (s+70) % 100, (b+54) % 100);
    rect(500, 20, 40, 20);
    rect(589, 20, 30, 100);
    rect(450, 20, 40, 20);
    rect(225, 300, 5, 260);
    fill((h+10) % 360, (s+20) % 100, (b+10) % 100);
    rect(150, 40, 5,200);
    rect(650, 0, 55, 250);
    rect(350, 0, 20, 350);
//Streger
    fill((h+110) % 360, (s+80) % 100, (b+25) % 100);
    rect(90, 90, 1, 100);
    rect(95, 90, 1, 100);
    rect(100, 90, 1, 100);
    rect(105, 90, 1, 100);
    rect(110, 90, 1, 100);
    rect(115, 90, 1, 100);
    rect(120, 90, 1, 100);
    rect(125, 90, 1, 100);
    rect(130, 90, 1, 100);
    rect(135, 250, 5, 50);
    rect(150, 250, 5, 50);
    rect(165, 250, 5, 50);
//Streger
    fill((h+80) % 360, (s+40) % 100, (b+40) % 100);
    rect(545, 100, 1, 300);
    rect(550, 100, 1, 300);
    rect(555, 100, 1, 300);
    rect(560, 100, 1, 300);
    rect(565, 100, 1, 300);
    rect(570, 100, 1, 300);
    rect(575, 100, 1, 300);
    rect(580, 100, 1, 300);
    rect(585, 100, 1, 300);
    rect(590, 100, 1, 300);
    rect(595, 100, 1, 300);
    fill((h +160) % 360, (s+80) % 100, (b+20) % 100);
    rect(400, 400, 10, 300);
    rect(595, 400, 10, 300);
    rect(430, 400, 10, 300);
    rect(560, 400, 10, 300);
    rect(300, 100, 40, 90);
    rect(700, 300, 80, 30);
    rect(700, 0, 300, 40);
//halv cirkel
    fill((h +160) % 360, (s+80) % 100, (b+20) % 100);
    arc(500, 450, 280, 280, PI, TWO_PI);
//cirkler    
    ellipse(550, 200, 100, 20);
    fill((h+85) % 360, (s+60) % 100, (b+11) % 100); 
    ellipse(500, 540, 100, 100); 
    ellipse(230, 350, 100, 10);
    fill((h +245) % 360, (s+80) % 100, (b+60) % 100);
    ellipse(230, 440, 150, 10);
    fill((h +350) % 360, (s+50) % 100, (b+50) % 100);
    ellipse(230, 500, 200, 10);
    ellipse(800, 70, 60, 60);
//Trekant
    triangle(800, 100, 870, 600, 750, 600);

}
