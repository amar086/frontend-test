function toggleSpinning(){
  var spinningBox = document.getElementsByClassName('spinning-box')[0];
  spinningBox.style.animationPlayState = spinningBox.style.animationPlayState == "paused" ? "running": "paused";
}
