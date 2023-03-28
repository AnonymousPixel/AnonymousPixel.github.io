const m = 0.005
var elem = 0
while(elem == 0){
  if (document.getElementsByClassName("background-image")[0]){
    elem=document.getElementsByClassName("background-image")[0]
    console.log("t")
    break
  }
}
document.addEventListener("mousemove", parallax);

function parallax(e) {
  let _w = window.innerWidth/2;
  let _h = window.innerHeight/2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * m}% ${50 - (_mouseY - _h) * m}%`;
  let x = `${_depth1}`;
  elem.style.backgroundPosition = x;
}