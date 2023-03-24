function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.bottom >= document.getElementById('header').getBoundingClientRect().height &&
      rect.top <= window.innerHeight
  );
}

addEventListener("load", (event) => {
  setInterval(loadFunction,10);
});
function loadFunction(){
  if (isInViewport(document.getElementById("se5"))){
    document.getElementById("s1").style.color = "White";
    document.getElementById("s2").style.color = "White";
    document.getElementById("s3").style.color = "White";
    document.getElementById("s4").style.color = "White";
    document.getElementById("s5").style.color = "#73AB84";
  } else if(isInViewport(document.getElementById("se4"))){
    document.getElementById("s1").style.color = "White";
    document.getElementById("s2").style.color = "White";
    document.getElementById("s3").style.color = "White";
    document.getElementById("s4").style.color = "#73AB84";
    document.getElementById("s5").style.color = "White";
  } else if(isInViewport(document.getElementById("se3"))){
    document.getElementById("s1").style.color = "White";
    document.getElementById("s2").style.color = "White";
    document.getElementById("s3").style.color = "#73AB84";
    document.getElementById("s4").style.color = "White";
    document.getElementById("s5").style.color = "White";
  } else if(isInViewport(document.getElementById("se2"))){
    document.getElementById("s1").style.color = "White";
    document.getElementById("s2").style.color = "#73AB84";
    document.getElementById("s3").style.color = "White";
    document.getElementById("s4").style.color = "White";
    document.getElementById("s5").style.color = "White";
  } else if(isInViewport(document.getElementById("se1"))){
    document.getElementById("s1").style.color = "#73AB84";
    document.getElementById("s2").style.color = "White";
    document.getElementById("s3").style.color = "White";
    document.getElementById("s4").style.color = "White";
    document.getElementById("s5").style.color = "White";
  }
};