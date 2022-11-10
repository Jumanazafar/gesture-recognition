nosex=0 ;
nosey=0 ;
difference=0 ;
leftWristX=0 ;
rightWristX=0 ;

function setup(){
canvas=createCanvas(500,500);
canvas.position(560,150);

video=createCapture(VIDEO);
video.size(550,500);

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotResults);


}
function modelLoaded (){
    console.log("model is loaded");
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);


    }
        
        
}
function draw(){
    background("lightcoral");
    fill("yellow");
    stroke("lightblue");
    strokeWeight(5);
    square(nosex,nosey,difference);
    document.getElementById("squareSide").innerHTML="width and height of a  square will be = "+difference+"px";


    
}