var fixedrect
var movingrect

function setup() {
createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(200,200,20,60)
 movingrect.shapeColor = "blue"
 fixedrect.shapeColor = "green"
 movingrect.debug = true
 fixedrect.debug = true
}

function draw() {
  background(255,255,255);  
  drawSprites();
movingrect.y = World.mouseY
movingrect.x = World.mouseX

if (movingrect.x - fixedrect.x < fixedrect.width / 2 + movingrect.width / 2 && fixedrect.x - movingrect.x < fixedrect.width / 2 + movingrect.width / 2 && movingrect.y - fixedrect.y < fixedrect.height / 2 + movingrect.height / 2 && fixedrect.y - movingrect.y < fixedrect.height / 2 + movingrect.height / 2) {
  movingrect.shapeColor = "red"
  fixedrect.shapeColor = "red"
}
else {
  movingrect.shapeColor = "blue"
  fixedrect.shapeColor = "green"
}
}