// set up canvas to be window's size

let canvasRunningCircles = document.getElementsByTagName('canvas')[0];
canvasRunningCircles.width = window.innerWidth;
canvasRunningCircles.height = window.innerHeight;

// set up one large background to be black

let cRc = canvasRunningCircles.getContext('2d');

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  // random color
  let r = Math.random () * 255;
  let g = Math.random () * 255;
  let b = Math.random () * 255;
  let a = Math.abs(Math.random () - 0.5);
  

  this.draw = function() {
    let grd = cRc.createLinearGradient(155, 50, 5, 90, 60, 50);
    grd.addColorStop(1, `white`);
    grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
  
    cRc.beginPath();
    cRc.lineWidth = 4;
    cRc.shadowColor = `rgba(${r}, ${g}, ${b}, 1)`;
    cRc.shadowBlur = 60;
    cRc.shadowOffsetX = 10;
    cRc.shadowOffsetY = 25;
    cRc.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    cRc.strokeStyle = 'transparent';
    cRc.stroke(); 
    cRc.fillStyle = grd;
    cRc.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
  
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

}

let circleArray = [];

for (let i = 0; i < 20; i++) {
  let radius = Math.random() * (70) + 10;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  cRc.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();