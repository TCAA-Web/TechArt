let angle = 0;

function setup() {
    let c = createCanvas(900, 600)
    c.parent("canvasContainer");
}

function draw() {
    background(0);
    fill(255, 255, 255);
    rect(150, 0, 600, 600);

    // First Row
    fill(180, 180, 180)
    ellipse(170, 20, 40, 40);
    ellipse(210, 20, 40, 40);
    ellipse(250, 20, 40, 40);
    ellipse(290, 20, 40, 40);
    ellipse(330, 20, 40, 40);
    ellipse(370, 20, 40, 40);
    ellipse(410, 20, 40, 40);

    ellipse(450, 20, 40, 40);
    ellipse(490, 20, 40, 40);
    ellipse(530, 20, 40, 40);
    ellipse(570, 20, 40, 40);
    ellipse(610, 20, 40, 40);
    ellipse(650, 20, 40, 40);
    ellipse(690, 20, 40, 40);
    ellipse(730, 20, 40, 40);

    // Second Row
    fill(180, 180, 180);
    ellipse(170, 60, 40, 40);
    ellipse(210, 60, 40, 40);
    ellipse(250, 60, 40, 40);
    ellipse(290, 60, 40, 40);
    ellipse(330, 60, 40, 40);
    ellipse(370, 60, 40, 40);
    ellipse(410, 60, 40, 40);
    ellipse(450, 60, 40, 40);
    ellipse(490, 60, 40, 40);
    ellipse(530, 60, 40, 40);
    ellipse(570, 60, 40, 40);
    ellipse(610, 60, 40, 40);
    ellipse(650, 60, 40, 40);
    ellipse(690, 60, 40, 40);
    ellipse(730, 60, 40, 40);

    // Third Row
    fill(180, 180, 180);
    ellipse(170, 100, 40, 40);
    ellipse(210, 100, 40, 40);
    ellipse(250, 100, 40, 40);
    ellipse(290, 100, 40, 40);
    ellipse(330, 100, 40, 40);
    ellipse(370, 100, 40, 40);
    ellipse(410, 100, 40, 40);
    ellipse(450, 100, 40, 40);
    ellipse(490, 100, 40, 40);
    ellipse(530, 100, 40, 40);
    ellipse(570, 100, 40, 40);
    ellipse(610, 100, 40, 40);
    ellipse(650, 100, 40, 40);
    ellipse(690, 100, 40, 40);
    ellipse(730, 100, 40, 40);

    // Fourth Row
    fill(180, 180, 180);
    ellipse(170, 140, 40, 40);
    ellipse(210, 140, 40, 40);
    ellipse(250, 140, 40, 40);
    ellipse(290, 140, 40, 40);
    ellipse(330, 140, 40, 40);
    ellipse(370, 140, 40, 40);
    ellipse(410, 140, 40, 40);
    ellipse(450, 140, 40, 40);
    ellipse(490, 140, 40, 40);
    ellipse(530, 140, 40, 40);
    ellipse(570, 140, 40, 40);
    ellipse(610, 140, 40, 40);
    ellipse(650, 140, 40, 40);
    ellipse(690, 140, 40, 40);
    ellipse(730, 140, 40, 40);

    // Fifth Row
    fill(180, 180, 180);
    ellipse(170, 180, 40, 40);
    ellipse(210, 180, 40, 40);
    ellipse(250, 180, 40, 40);
    ellipse(290, 180, 40, 40);
    ellipse(330, 180, 40, 40);
    ellipse(370, 180, 40, 40);
    ellipse(410, 180, 40, 40);
    ellipse(450, 180, 40, 40);
    ellipse(490, 180, 40, 40);
    ellipse(530, 180, 40, 40);
    ellipse(570, 180, 40, 40);
    ellipse(610, 180, 40, 40);
    ellipse(650, 180, 40, 40);
    ellipse(690, 180, 40, 40);
    ellipse(730, 180, 40, 40);

    // Sixth Row
    fill(180, 180, 180);
    ellipse(170, 220, 40, 40);
    ellipse(210, 220, 40, 40);
    ellipse(250, 220, 40, 40);
    ellipse(290, 220, 40, 40);
    ellipse(330, 220, 40, 40);
    ellipse(370, 220, 40, 40);
    ellipse(410, 220, 40, 40);
    ellipse(450, 220, 40, 40);
    ellipse(490, 220, 40, 40);
    ellipse(530, 220, 40, 40);
    ellipse(570, 220, 40, 40);
    ellipse(610, 220, 40, 40);
    ellipse(650, 220, 40, 40);
    ellipse(690, 220, 40, 40);
    ellipse(730, 220, 40, 40);

    // Seventh Row
    fill(180, 180, 180);
    ellipse(170, 260, 40, 40);
    ellipse(210, 260, 40, 40);
    ellipse(250, 260, 40, 40);
    ellipse(290, 260, 40, 40);
    ellipse(330, 260, 40, 40);
    ellipse(370, 260, 40, 40);
    ellipse(410, 260, 40, 40);
    ellipse(450, 260, 40, 40);
    ellipse(490, 260, 40, 40);
    ellipse(530, 260, 40, 40);
    ellipse(570, 260, 40, 40);
    ellipse(610, 260, 40, 40);
    ellipse(650, 260, 40, 40);
    ellipse(690, 260, 40, 40);
    ellipse(730, 260, 40, 40);

    // Eight Row
    fill(180, 180, 180);
    ellipse(170, 300, 40, 40);
    ellipse(210, 300, 40, 40);
    ellipse(250, 300, 40, 40);
    ellipse(290, 300, 40, 40);
    ellipse(330, 300, 40, 40);
    ellipse(370, 300, 40, 40);
    ellipse(410, 300, 40, 40);
    ellipse(450, 300, 40, 40);
    ellipse(490, 300, 40, 40);
    ellipse(530, 300, 40, 40);
    ellipse(570, 300, 40, 40);
    ellipse(610, 300, 40, 40);
    ellipse(650, 300, 40, 40);
    ellipse(690, 300, 40, 40);
    ellipse(730, 300, 40, 40);

    // Ninth Row
    fill(180, 180, 180);
    ellipse(170, 340, 40, 40);
    ellipse(210, 340, 40, 40);
    ellipse(250, 340, 40, 40);
    ellipse(290, 340, 40, 40);
    ellipse(330, 340, 40, 40);
    ellipse(370, 340, 40, 40);
    ellipse(410, 340, 40, 40);
    ellipse(450, 340, 40, 40);
    ellipse(490, 340, 40, 40);
    ellipse(530, 340, 40, 40);
    ellipse(570, 340, 40, 40);
    ellipse(610, 340, 40, 40);
    ellipse(650, 340, 40, 40);
    ellipse(690, 340, 40, 40);
    ellipse(730, 340, 40, 40);

    // Tenth Row
    fill(180, 180, 180);
    ellipse(170, 380, 40, 40);
    ellipse(210, 380, 40, 40);
    ellipse(250, 380, 40, 40);
    ellipse(290, 380, 40, 40);
    ellipse(330, 380, 40, 40);
    ellipse(370, 380, 40, 40);
    ellipse(410, 380, 40, 40);
    ellipse(450, 380, 40, 40);
    ellipse(490, 380, 40, 40);
    ellipse(530, 380, 40, 40);
    ellipse(570, 380, 40, 40);
    ellipse(610, 380, 40, 40);
    ellipse(650, 380, 40, 40);
    ellipse(690, 380, 40, 40);
    ellipse(730, 380, 40, 40);

    // Eleventh Row
    fill(180, 180, 180);
    ellipse(170, 420, 40, 40);
    ellipse(210, 420, 40, 40);
    ellipse(250, 420, 40, 40);
    ellipse(290, 420, 40, 40);
    ellipse(330, 420, 40, 40);
    ellipse(370, 420, 40, 40);
    ellipse(410, 420, 40, 40);
    ellipse(450, 420, 40, 40);
    ellipse(490, 420, 40, 40);
    ellipse(530, 420, 40, 40);
    ellipse(570, 420, 40, 40);
    ellipse(610, 420, 40, 40);
    ellipse(650, 420, 40, 40);
    ellipse(690, 420, 40, 40);
    ellipse(730, 420, 40, 40);

    // Twelvth Row
    fill(180, 180, 180);
    ellipse(170, 460, 40, 40);
    ellipse(210, 460, 40, 40);
    ellipse(250, 460, 40, 40);
    ellipse(290, 460, 40, 40);
    ellipse(330, 460, 40, 40);
    ellipse(370, 460, 40, 40);
    ellipse(410, 460, 40, 40);
    ellipse(450, 460, 40, 40);
    ellipse(490, 460, 40, 40);
    ellipse(530, 460, 40, 40);
    ellipse(570, 460, 40, 40);
    ellipse(610, 460, 40, 40);
    ellipse(650, 460, 40, 40);
    ellipse(690, 460, 40, 40);
    ellipse(730, 460, 40, 40);

    // Thirteenth Row
    fill(180, 180, 180);
    ellipse(170, 500, 40, 40);
    ellipse(210, 500, 40, 40);
    ellipse(250, 500, 40, 40);
    ellipse(290, 500, 40, 40);
    ellipse(330, 500, 40, 40);
    ellipse(370, 500, 40, 40);
    ellipse(410, 500, 40, 40);
    ellipse(450, 500, 40, 40);
    ellipse(490, 500, 40, 40);
    ellipse(530, 500, 40, 40);
    ellipse(570, 500, 40, 40);
    ellipse(610, 500, 40, 40);
    ellipse(650, 500, 40, 40);
    ellipse(690, 500, 40, 40);
    ellipse(730, 500, 40, 40);

    // Fourteenth Row
    fill(180, 180, 180);
    ellipse(170, 540, 40, 40);
    ellipse(210, 540, 40, 40);
    ellipse(250, 540, 40, 40);
    ellipse(290, 540, 40, 40);
    ellipse(330, 540, 40, 40);
    ellipse(370, 540, 40, 40);
    ellipse(410, 540, 40, 40);
    ellipse(450, 540, 40, 40);
    ellipse(490, 540, 40, 40);
    ellipse(530, 540, 40, 40);
    ellipse(570, 540, 40, 40);
    ellipse(610, 540, 40, 40);
    ellipse(650, 540, 40, 40);
    ellipse(690, 540, 40, 40);
    ellipse(730, 540, 40, 40);

    // Fifteenth Row
    fill(180, 180, 180);
    ellipse(170, 580, 40, 40);
    ellipse(210, 580, 40, 40);
    ellipse(250, 580, 40, 40);
    ellipse(290, 580, 40, 40);
    ellipse(330, 580, 40, 40);
    ellipse(370, 580, 40, 40);
    ellipse(410, 580, 40, 40);
    ellipse(450, 580, 40, 40);
    ellipse(490, 580, 40, 40);
    ellipse(530, 580, 40, 40);
    ellipse(570, 580, 40, 40);
    ellipse(610, 580, 40, 40);
    ellipse(650, 580, 40, 40);
    ellipse(690, 580, 40, 40);
    ellipse(730, 580, 40, 40);

    // Cross
    fill(0, 0, 0);
    rect(150, 300, 600, 2);
    rect(450, 0, 2, 600);

    // First middle square
    fill(255, 255, 255);
    rect(300, 150, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(315, 165, 30, 30);
    ellipse(345, 165, 30, 30);
    ellipse(375, 165, 30, 30);
    ellipse(405, 165, 30, 30);
    ellipse(435, 165, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(315, 195, 30, 30);
    ellipse(345, 195, 30, 30);
    ellipse(375, 195, 30, 30);
    ellipse(405, 195, 30, 30);
    ellipse(435, 195, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(315, 225, 30, 30);
    ellipse(345, 225, 30, 30);
    ellipse(375, 225, 30, 30);
    ellipse(405, 225, 30, 30);
    ellipse(435, 225, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(315, 255, 30, 30);
    ellipse(345, 255, 30, 30);
    ellipse(375, 255, 30, 30);
    ellipse(405, 255, 30, 30);
    ellipse(435, 255, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(315, 285, 30, 30);
    ellipse(345, 285, 30, 30);
    ellipse(375, 285, 30, 30);
    ellipse(405, 285, 30, 30);
    ellipse(435, 285, 30, 30);

    // Second middle square
    fill(255, 255, 255);
    rect(452, 150, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(467, 165, 30, 30);
    ellipse(497, 165, 30, 30);
    ellipse(527, 165, 30, 30);
    ellipse(557, 165, 30, 30);
    ellipse(587, 165, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(467, 195, 30, 30);
    ellipse(497, 195, 30, 30);
    ellipse(527, 195, 30, 30);
    ellipse(557, 195, 30, 30);
    ellipse(587, 195, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(467, 225, 30, 30);
    ellipse(497, 225, 30, 30);
    ellipse(527, 225, 30, 30);
    ellipse(557, 225, 30, 30);
    ellipse(587, 225, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(467, 255, 30, 30);
    ellipse(497, 255, 30, 30);
    ellipse(527, 255, 30, 30);
    ellipse(557, 255, 30, 30);
    ellipse(587, 255, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(467, 285, 30, 30);
    ellipse(497, 285, 30, 30);
    ellipse(527, 285, 30, 30);
    ellipse(557, 285, 30, 30);
    ellipse(587, 285, 30, 30);

    // Third middle square
    fill(255, 255, 255);
    rect(300, 302, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(315, 317, 30, 30);
    ellipse(345, 317, 30, 30);
    ellipse(375, 317, 30, 30);
    ellipse(405, 317, 30, 30);
    ellipse(435, 317, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(315, 347, 30, 30);
    ellipse(345, 347, 30, 30);
    ellipse(375, 347, 30, 30);
    ellipse(405, 347, 30, 30);
    ellipse(435, 347, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(315, 377, 30, 30);
    ellipse(345, 377, 30, 30);
    ellipse(375, 377, 30, 30);
    ellipse(405, 377, 30, 30);
    ellipse(435, 377, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(315, 407, 30, 30);
    ellipse(345, 407, 30, 30);
    ellipse(375, 407, 30, 30);
    ellipse(405, 407, 30, 30);
    ellipse(435, 407, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(315, 437, 30, 30);
    ellipse(345, 437, 30, 30);
    ellipse(375, 437, 30, 30);
    ellipse(405, 437, 30, 30);
    ellipse(435, 437, 30, 30);

    // Fourth middle square
    fill(255, 255, 255);
    rect(452, 302, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(467, 317, 30, 30);
    ellipse(497, 317, 30, 30);
    ellipse(527, 317, 30, 30);
    ellipse(557, 317, 30, 30);
    ellipse(587, 317, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(467, 347, 30, 30);
    ellipse(497, 347, 30, 30);
    ellipse(527, 347, 30, 30);
    ellipse(557, 347, 30, 30);
    ellipse(587, 347, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(467, 377, 30, 30);
    ellipse(497, 377, 30, 30);
    ellipse(527, 377, 30, 30);
    ellipse(557, 377, 30, 30);
    ellipse(587, 377, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(467, 407, 30, 30);
    ellipse(497, 407, 30, 30);
    ellipse(527, 407, 30, 30);
    ellipse(557, 407, 30, 30);
    ellipse(587, 407, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(467, 437, 30, 30);
    ellipse(497, 437, 30, 30);
    ellipse(527, 437, 30, 30);
    ellipse(557, 437, 30, 30);
    ellipse(587, 437, 30, 30);

    // First rotated square
    translate(300, 0); // Move the origin to the center of the rectangle
    rotate(radians(45)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 105, 105);
    // First row
    fill(180, 180, 180);
    ellipse(10.5, 10.5, 21, 21);
    ellipse(10.5, 31.5, 21, 21);
    ellipse(10.5, 52.5, 21, 21);
    ellipse(10.5, 73, 21, 21);
    ellipse(10.5, 94, 21, 21);
    // Second row
    fill(180, 180, 180);
    ellipse(31.5, 10.5, 21, 21);
    ellipse(31.5, 31.5, 21, 21);
    ellipse(31.5, 52.5, 21, 21);
    ellipse(31.5, 73, 21, 21);
    ellipse(31.5, 94, 21, 21);
    // Third row
    fill(180, 180, 180);
    ellipse(52.5, 10.5, 21, 21);
    ellipse(52.5, 31.5, 21, 21);
    ellipse(52.5, 52.5, 21, 21);
    ellipse(52.5, 73, 21, 21);
    ellipse(52.5, 94, 21, 21);
    // Fourth row
    fill(180, 180, 180);
    ellipse(73, 10.5, 21, 21);
    ellipse(73, 31.5, 21, 21);
    ellipse(73, 52.5, 21, 21);
    ellipse(73, 73, 21, 21);
    ellipse(73, 94, 21, 21);
    // Fifth row
    fill(180, 180, 180);
    ellipse(94, 10.5, 21, 21);
    ellipse(94, 31.5, 21, 21);
    ellipse(94, 52.5, 21, 21);
    ellipse(94, 73, 21, 21);
    ellipse(94, 94, 21, 21);

    // Second rotated square
    translate(425, -210); // Move the origin to the center of the rectangle
    rotate(radians(90)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 105, 105);
    // First row
    fill(180, 180, 180);
    ellipse(10.5, 10.5, 21, 21);
    ellipse(10.5, 31.5, 21, 21);
    ellipse(10.5, 52.5, 21, 21);
    ellipse(10.5, 73, 21, 21);
    ellipse(10.5, 94, 21, 21);
    // Second row
    fill(180, 180, 180);
    ellipse(31.5, 10.5, 21, 21);
    ellipse(31.5, 31.5, 21, 21);
    ellipse(31.5, 52.5, 21, 21);
    ellipse(31.5, 73, 21, 21);
    ellipse(31.5, 94, 21, 21);
    // Third row
    fill(180, 180, 180);
    ellipse(52.5, 10.5, 21, 21);
    ellipse(52.5, 31.5, 21, 21);
    ellipse(52.5, 52.5, 21, 21);
    ellipse(52.5, 73, 21, 21);
    ellipse(52.5, 94, 21, 21);
    // Fourth row
    fill(180, 180, 180);
    ellipse(73, 10.5, 21, 21);
    ellipse(73, 31.5, 21, 21);
    ellipse(73, 52.5, 21, 21);
    ellipse(73, 73, 21, 21);
    ellipse(73, 94, 21, 21);
    // Fifth row
    fill(180, 180, 180);
    ellipse(94, 10.5, 21, 21);
    ellipse(94, 31.5, 21, 21);
    ellipse(94, 52.5, 21, 21);
    ellipse(94, 73, 21, 21);
    ellipse(94, 94, 21, 21);

    // Third rotated square
    translate(530, 105); // Move the origin to the center of the rectangle
    rotate(radians(90)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 105, 105);
    // First row
    fill(180, 180, 180);
    ellipse(10.5, 10.5, 21, 21);
    ellipse(10.5, 31.5, 21, 21);
    ellipse(10.5, 52.5, 21, 21);
    ellipse(10.5, 73, 21, 21);
    ellipse(10.5, 94, 21, 21);
    // Second row
    fill(180, 180, 180);
    ellipse(31.5, 10.5, 21, 21);
    ellipse(31.5, 31.5, 21, 21);
    ellipse(31.5, 52.5, 21, 21);
    ellipse(31.5, 73, 21, 21);
    ellipse(31.5, 94, 21, 21);
    // Third row
    fill(180, 180, 180);
    ellipse(52.5, 10.5, 21, 21);
    ellipse(52.5, 31.5, 21, 21);
    ellipse(52.5, 52.5, 21, 21);
    ellipse(52.5, 73, 21, 21);
    ellipse(52.5, 94, 21, 21);
    // Fourth row
    fill(180, 180, 180);
    ellipse(73, 10.5, 21, 21);
    ellipse(73, 31.5, 21, 21);
    ellipse(73, 52.5, 21, 21);
    ellipse(73, 73, 21, 21);
    ellipse(73, 94, 21, 21);
    // Fifth row
    fill(180, 180, 180);
    ellipse(94, 10.5, 21, 21);
    ellipse(94, 31.5, 21, 21);
    ellipse(94, 52.5, 21, 21);
    ellipse(94, 73, 21, 21);
    ellipse(94, 94, 21, 21);

    // Fourth rotated square
    translate(-105, 110); // Move the origin to the center of the rectangle
    rotate(radians(90)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 105, 105);
    // First row
    fill(180, 180, 180);
    ellipse(10.5, 10.5, 21, 21);
    ellipse(10.5, 31.5, 21, 21);
    ellipse(10.5, 52.5, 21, 21);
    ellipse(10.5, 73, 21, 21);
    ellipse(10.5, 94, 21, 21);
    // Second row
    fill(180, 180, 180);
    ellipse(31.5, 10.5, 21, 21);
    ellipse(31.5, 31.5, 21, 21);
    ellipse(31.5, 52.5, 21, 21);
    ellipse(31.5, 73, 21, 21);
    ellipse(31.5, 94, 21, 21);
    // Third row
    fill(180, 180, 180);
    ellipse(52.5, 10.5, 21, 21);
    ellipse(52.5, 31.5, 21, 21);
    ellipse(52.5, 52.5, 21, 21);
    ellipse(52.5, 73, 21, 21);
    ellipse(52.5, 94, 21, 21);
    // Fourth row
    fill(180, 180, 180);
    ellipse(73, 10.5, 21, 21);
    ellipse(73, 31.5, 21, 21);
    ellipse(73, 52.5, 21, 21);
    ellipse(73, 73, 21, 21);
    ellipse(73, 94, 21, 21);
    // Fifth row
    fill(180, 180, 180);
    ellipse(94, 10.5, 21, 21);
    ellipse(94, 31.5, 21, 21);
    ellipse(94, 52.5, 21, 21);
    ellipse(94, 73, 21, 21);
    ellipse(94, 94, 21, 21);

    // First middle rotated square
    translate(200, -360); // Move the origin to the center of the rectangle
    rotate(radians(110)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(15, 15, 30, 30);
    ellipse(15, 45, 30, 30);
    ellipse(15, 75, 30, 30);
    ellipse(15, 105, 30, 30);
    ellipse(15, 135, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(45, 15, 30, 30);
    ellipse(45, 45, 30, 30);
    ellipse(45, 75, 30, 30);
    ellipse(45, 105, 30, 30);
    ellipse(45, 135, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(75, 15, 30, 30);
    ellipse(75, 45, 30, 30);
    ellipse(75, 75, 30, 30);
    ellipse(75, 105, 30, 30);
    ellipse(75, 135, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(105, 15, 30, 30);
    ellipse(105, 45, 30, 30);
    ellipse(105, 75, 30, 30);
    ellipse(105, 105, 30, 30);
    ellipse(105, 135, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(135, 15, 30, 30);
    ellipse(135, 45, 30, 30);
    ellipse(135, 75, 30, 30);
    ellipse(135, 105, 30, 30);
    ellipse(135, 135, 30, 30);

    // Second middle rotated square
    translate(280, -275); // Move the origin to the center of the rectangle
    rotate(radians(90)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(15, 15, 30, 30);
    ellipse(15, 45, 30, 30);
    ellipse(15, 75, 30, 30);
    ellipse(15, 105, 30, 30);
    ellipse(15, 135, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(45, 15, 30, 30);
    ellipse(45, 45, 30, 30);
    ellipse(45, 75, 30, 30);
    ellipse(45, 105, 30, 30);
    ellipse(45, 135, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(75, 15, 30, 30);
    ellipse(75, 45, 30, 30);
    ellipse(75, 75, 30, 30);
    ellipse(75, 105, 30, 30);
    ellipse(75, 135, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(105, 15, 30, 30);
    ellipse(105, 45, 30, 30);
    ellipse(105, 75, 30, 30);
    ellipse(105, 105, 30, 30);
    ellipse(105, 135, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(135, 15, 30, 30);
    ellipse(135, 45, 30, 30);
    ellipse(135, 75, 30, 30);
    ellipse(135, 105, 30, 30);
    ellipse(135, 135, 30, 30);

    // Third middle rotated square
    translate(270, -260); // Move the origin to the center of the rectangle
    rotate(radians(90)); // Rotate by 45 degrees (you can change the angle)
    fill(255, 255, 255);
    rect(0, 0, 150, 150);
    // First row
    fill(180, 180, 180);
    ellipse(15, 15, 30, 30);
    ellipse(15, 45, 30, 30);
    ellipse(15, 75, 30, 30);
    ellipse(15, 105, 30, 30);
    ellipse(15, 135, 30, 30);
    // Second row
    fill(180, 180, 180);
    ellipse(45, 15, 30, 30);
    ellipse(45, 45, 30, 30);
    ellipse(45, 75, 30, 30);
    ellipse(45, 105, 30, 30);
    ellipse(45, 135, 30, 30);
    // Third row
    fill(180, 180, 180);
    ellipse(75, 15, 30, 30);
    ellipse(75, 45, 30, 30);
    ellipse(75, 75, 30, 30);
    ellipse(75, 105, 30, 30);
    ellipse(75, 135, 30, 30);
    // Fourth row
    fill(180, 180, 180);
    ellipse(105, 15, 30, 30);
    ellipse(105, 45, 30, 30);
    ellipse(105, 75, 30, 30);
    ellipse(105, 105, 30, 30);
    ellipse(105, 135, 30, 30);
    // Fifth row
    fill(180, 180, 180);
    ellipse(135, 15, 30, 30);
    ellipse(135, 45, 30, 30);
    ellipse(135, 75, 30, 30);
    ellipse(135, 105, 30, 30);
    ellipse(135, 135, 30, 30);

    // Fourth middle rotated square
    translate(0, 0);
    rotate(radians(45));
    fill(255, 255, 255);
    rect(-75, -345, 150, 150);
    // First row
    fill(180, 180, 180)
    ellipse(60, -330, 30, 30)
    ellipse(60, -300, 30, 30)
    ellipse(60, -270, 30, 30)
    ellipse(60, -240, 30, 30)
    ellipse(60, -210, 30, 30)
    // Second row
    fill(180, 180, 180)
    ellipse(30, -330, 30, 30)
    ellipse(30, -300, 30, 30)
    ellipse(30, -270, 30, 30)
    ellipse(30, -240, 30, 30)
    ellipse(30, -210, 30, 30)
    // Third row
    fill(180, 180, 180)
    ellipse(0, -330, 30, 30)
    ellipse(0, -300, 30, 30)
    ellipse(0, -270, 30, 30)
    ellipse(0, -240, 30, 30)
    ellipse(0, -210, 30, 30)
    // Fourth row
    fill(180, 180, 180)
    ellipse(-30, -330, 30, 30)
    ellipse(-30, -300, 30, 30)
    ellipse(-30, -270, 30, 30)
    ellipse(-30, -240, 30, 30)
    ellipse(-30, -210, 30, 30)
    // Fifth row
    fill(180, 180, 180)
    ellipse(-60, -330, 30, 30)
    ellipse(-60, -300, 30, 30)
    ellipse(-60, -270, 30, 30)
    ellipse(-60, -240, 30, 30)
    ellipse(-60, -210, 30, 30)
}