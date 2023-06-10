var alarmClock,time,button,alarmClockimg,topscore
// top score  img x & y is 314,80

function preload(){
    alarmClockimg = loadImage("xedited.png");

}
function setup (){
    canvas = createCanvas(400,400);
    
    alarmClock = createSprite(200,200,20,50);
  
  alarmClock.addAnimation("xedited", alarmClockimg)
  alarmClock.scale = 1.0
}
function draw(){
    background("#00FA9A")
  
    drawSprites()
}

