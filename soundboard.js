
let blip = new Audio();
blip.src = "blip.wav";
var bloop = new Audio();
bloop.src = "bloop_x.wav";
var click = new Audio("click_x.wav");

var blipButton = document.getElementById("Blip");
blipButton.addEventListener("click",()=>{
    audio.play(blip);
})

var bloopButton = document.getElementById("Bloop");
bloopButton.addEventListener("click",function(){
    audio.play(bloop);
})

var clickButton = document.getElementById("Click");
clickButton.addEventListener("click",function(){
    audio.play(click);
})
