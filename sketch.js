var letters = ["z", "u", "k", "u", "n", "f", "t"];
var bar = [];
let font;

function preload() {
  font = loadFont('Helvetica-Now-font/HelveticaNowDisplay.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  let splitstring = split[bar];
  console.log(letters.length);
  for (let i = 0; i < letters.length*20; i++) {
    let x = random(-width / 2, width / 2);
    let y = random(-height / 2, height / 2);
    let z = random(-width*5, width/2);
    const zukunft = new barZukunft(letters[i%letters.length], x, y, z);
    console.log(zukunft);
    bar.push(new barZukunft(letters[i%letters.length], x, y, z));
  //   bar.push(new barZukunft(letters[i], x, y, z));
  }
}

function draw() {
  background(0,0,0);
	orbitControl();
  for (let i = 0; i < bar.length; i++) {
    bar[i].update();
    bar[i].display();
  }
}

class barZukunft {
  constructor(letters, x, y, z) {
    this.letters = letters;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  update() {
    this.z += 10;
    if(this.z > width/2){
      this.z = -width*5;
    }
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(200);
    fill(255, 255, 255);
    text(this.letters, 0, 0);
    pop();
  }
}