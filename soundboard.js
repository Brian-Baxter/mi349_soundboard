
var bloopButton = document.getElementById("Bloop");
bloopButton.addEventListener("click",playBloop());

var clickButton = document.getElementById("Click");
clickButton.addEventListener("click",function(){
    audio.play(click);
})

function playBlip(){
    var blip = new Audio("blip.wav");
    audio.play();
}

function playBloop(){
    var bloop = new Audio("bloop_x.wav");
    audio.play();
}

function playClick(){
    var click = new Audio("click_x.wav");
    audio.play();
}
