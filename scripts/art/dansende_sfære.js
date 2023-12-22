let x, y, b;

const orangeColor = `#973100`;
const redColor = `#BA3E2D`;
const greenColor = `#254945`;
const white = `#DAD1CB`;
const darkYellow = `#A07C13`;
const lightYellow = `#D5A818`;
const whiteColor = `#DAD1CB`;

let fanDarks = [];
let fanLights = [];

function setup() {
	let c = createCanvas(900, 600);
	c.parent("canvasContainer");
	b = new Ball(300, 500);
	fanLights.push(new FanLight(5, 30, 30, 35, 86, 150));
	fanLights.push(new FanLight(58, 20, 90, 35, 86, 150));
	fanLights.push(new FanLight(120, 20, 152, 38, 86, 150));
	fanLights.push(new FanLight(182, 32, 200, 45, 86, 150));

	fanDarks.push(new FanDark(30, 35, 58, 20, 86, 150));
	fanDarks.push(new FanDark(90, 35, 120, 20, 86, 150));
	fanDarks.push(new FanDark(152, 38, 182, 32, 86, 150));
	fanDarks.push(new FanDark(200, 45, 210, 48, 86, 150));
	fanDarks.push(new FanDark(-5, 35, 5, 30, 86, 150));
}

function draw() {
	background(`#ffffff11`);
	// Generer en tilfældig farve for hver firkant
	const red = Math.floor(Math.random() * 100);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const rgbColor = `rgb(${red}, ${green}, ${blue})`;

	//små firkanter som dpopper frem i forskellige farver
	fill(rgbColor);
	rect(x, y, 20, 30);
	x = random(0, width);
	y = random(0, height);

	//fjerner outline på alle elementer
	noStroke();

	//trapez i baggrunden
	fill(white);
	quad(500, 150, 600, 150, 700, 510, 400, 510);

	// firkanter og cikler
	noStroke();
	fill(orangeColor);
	rect(200, 220, 300, 200);
	fill(redColor);
	circle(400, 230, 70);
	fill(redColor);
	rect(220, 350, 100, 200, 20);
	rect(350, 300, 80, 100, 10);
	fill(`#CB8783`);
	rect(420, 300, 10, 100, 0);
	fill(`#DAD1CB22`);
	rect(100, 250, 150, 205, 20);

	//gul fan til højre dannes
	fanLights.forEach((fan) => {
		fan.gx = 450;
		fan.gy = 350;
		fan.drawFan();
	});
	fanDarks.forEach((fan) => {
		fan.gx = 450;
		fan.gy = 350;
		fan.drawFan();
	});
	//cirkel der bevæger sig
	b.drawCircle();
	b.moveCircle();
	b.checkBoundaroes();
}

// classes

class FanLight {
	constructor(x1, y1, x2, y2, x3, y3, gx, gy) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.gx = gx;
		this.gy = gy;
	}

	drawFan() {
		stroke(darkYellow);
		fill(lightYellow);
		triangle(
			this.x1 + this.gx,
			this.y1 + this.gy,
			this.x2 + this.gx,
			this.y2 + this.gy,
			this.x3 + this.gx,
			this.y3 + this.gy
		);
	}
}
class FanDark {
	constructor(x1, y1, x2, y2, x3, y3, gx, gy) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.gx = gx;
		this.gy = gy;
	}

	drawFan() {
		stroke(darkYellow);
		fill(darkYellow);
		triangle(
			this.x1 + this.gx,
			this.y1 + this.gy,
			this.x2 + this.gx,
			this.y2 + this.gy,
			this.x3 + this.gx,
			this.y3 + this.gy
		);
	}
}
class Trapez {
	constructor(x1, y1, x2, y2, x3, y3, gx, gy) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.gx = gx;
		this.gy = gy;
	}

	drawTrapez() {
		stroke(whiteColor);
		fill(whiteColor);
		quad(
			this.x1 + this.gx,
			this.y1 + this.gy,
			this.x2 + this.gx,
			this.y2 + this.gy,
			this.x3 + this.gx,
			this.y3 + this.gy
		);
	}
}
class Ball {
	constructor(u, v) {
		this.u = u;
		this.v = v;
		this.du = 2;
		this.dv = 3;
	}

	drawCircle() {
		fill(greenColor);
		ellipse(this.u, this.v, 100, 100);
	}
	moveCircle() {
		this.u = this.u + this.du;
		this.v = this.v + this.dv;
	}

	checkBoundaroes() {
		if (this.u > width - 50 || this.u < 0) {
			this.du = this.du * -1;
		}
		if (this.v > height - 50 || this.v < 300) {
			this.dv = this.dv * -1;
		}
	}
}
