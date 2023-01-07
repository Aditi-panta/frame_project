function preload(){
    img=loadImage("download.jpeg");
}
function setup(){
canvas=createCanvas(600,600);
canvas.position(110,250);
}
function draw(){
    image(img,200,200,300,300);
    fill("red");
    stroke("blue");
    circle(150,200,50);
    circle(500,200,50);
    circle(150,500,50);
    circle(500,500,50);
}
function take_snapshot(){
    save("aditi.png");
}
