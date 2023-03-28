function preload(){

}

function setup(){
canvas = createCanvas(400,400);
canvas.position(600,200);
video = createCapture(VIDEO);
video.size(400,400);
video.hide();
posenet = ml5.poseNet(video, modelReady);
posenet.on('pose',getPose);
}

function getPose(result){
    if (result.length > 0){
        console.log(result);
        console.log('x cordinate - '+ result[0].pose.nose.x);
        console.log('y cordinate - '+ result[0].pose.nose.y);
        NoseX = result[0].pose.nose.x;
        NoseY = result[0].pose.nose.y;
    }
}

function modelReady(){
    console.log("The model is working")
}

function draw(){

}

function takesnapshot(){

}

