function playBloop(){
    var bloop = new Audio();
    bloop.src="bloop_x.wav";
    bloop.play();
}
document.getElementById("Bloop").onclick = playBloop;