song = "";
function preload()
{
 song = loadSound("music.mp3");
}


function setup()
{
  video = createCapture(VIDEO);
  video.hide();
  canvas = createCanvas(500,600);
  canvas.center();
}
function draw()
{
    image(video,0,0,500,600);
}
function playbutton()
{
    song.play();
}
