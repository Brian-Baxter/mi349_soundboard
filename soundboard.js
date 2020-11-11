
var bloopButton = document.getElementById("Bloop");
bloopButton.addEventListener("click",playBloop());

var clickButton = document.getElementById("Click");
clickButton.addEventListener("click",function(){
    audio.play(click);
})

let playBlip = function(){document.getElementById("Blip").play()}

function playBloop(){
    var bloop = new Audio("bloop_x.wav");
    audio.play(bloop);
}

function playClick(){
    var click = new Audio("click_x.wav");
    audio.play();
}
