function playBloop(){
    var bloop = new Audio();
    bloop.src="bloop_x.wav";
    bloop.play();
}
document.getElementById("Bloop").onclick = playBloop;

function playBlip(){
    var blip = new Audio();
    blip.src="blip.wav";
    blip.play();
}
document.getElementById("Blip").onclick = playBlip;

function playClick(){
    var click = new Audio();
    click.src="click_x.wav";
    click.play();
}
document.getElementById("Click").onclick = playClick;