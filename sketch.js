function setup() {
  createCanvas(400, 400);
  background(random (0, 255), random (0, 255), random(0, 255));
  horizontal = random(0,400);
  vertical = random(0,400);
  cor = color (random (0, 255), random (0, 255), random (0, 255));
}

function draw() {
  fill (cor)
  circle(horizontal, vertical,32)
  
  if(mouseX < horizontal){
    horizontal = horizontal -1;
  }
  if(mouseX > horizontal){
    horizontal = horizontal +1;
  }
  if(mouseY < vertical){
    vertical = vertical -1;
  }
  if(mouseY > vertical){
    vertical = vertical +1;
  }
  
}
