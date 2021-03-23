var hr,hrAngle;
var mn,mnAngle;
var sc,scAngle;

function preload(){
  
}


function setup() {
  createCanvas(1000,700);
 angleMode(DEGREES)
  
}

function draw() {
  background(255,255,255);  

translate(500,350)
rotate(-90) 

hr= hour()
  mn=minute()
  sc=second()
  
  scAngle=map(sc,0,60,0,360)
 mnAngle=map(mn,0,60,0,360)
 hrAngle=map(hr%12,0,12,0,360)
 

 push() 
 fill("orange") 
 arc(0,0,450,450,0,scAngle);
  rotate(scAngle)
  
  pop()

  push() 
  fill("skyblue") 
  arc(0,0,300,300,0,mnAngle);
  rotate(mnAngle)
  pop()
 

  push() 
  fill("darkblue") 
  arc(0,0,150,150,0,hrAngle);
  rotate(hrAngle)
 
  pop()




}