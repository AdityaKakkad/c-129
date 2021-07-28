gummy_bear = "";
rick = "";

gummy_status = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload(){
gummy_bear = loadSound("Gummy.mp3");
rick = loadSound("Rick.mp3");


}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill('#eb4034');
    stroke('#000000');
    gummy_status = gummy_bear.isPlaying()

    if(scoreLeftWrist > 0.2){
      circle(leftWristX, leftWristY, 20);
    }

    if(gummy_status = false){
      gummy_bear.play();
    }
}

function modelLoaded(){
    console.log("DJ ourofftheheezyOrder on the beat");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
console.log(results);
scoreLeftWrist = results[0].pose.keypoints[9].score;

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
  }
  }