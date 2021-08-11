All_is_found_song = "";
Harry_Potter_Theme_Song = "";

function preload()
{
    All_is_found_song = loadSound("Frozen.mp3");
    Harry_Potter_Theme_Song = loadSound("Hedwig.mp3");
}

function setup()
{
 canvas = createCanvas(300, 300);
 canvas.center(); 
 video = createCapture(VIDEO);
 video.hide();     

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        score_LeftWrist = results[0].pose.keypoints[9].score;    
        console.log(score_LeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "LeftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + "RightWristY = " + rightWristY);
    }
}
