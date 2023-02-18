function isInViewport2(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

addEventListener("load", (event) => {load()});

var skillJava = null;
var skillPython = null;
var skillHTML = null;
var barJava = null;
var barPython = null;
var barHTML = null;
var wJava = 0;
var wPython = 0;
var wHTML = 0;
var t=null;

async function load(){  
  barJava = document.getElementById("Java");
  barPython = document.getElementById("Python");
  barHTML = document.getElementById("HTMLCSS");

  barJava.style.backgroundColor="red"
  barPython.style.backgroundColor="blue"
  barHTML.style.backgroundColor="yellow"
  
  skillJava = 10;
  skillPython = 70;
  skillHTML = 60;

  t=setInterval(mainb,1);
  return "done";
}

async function mainb(){
  if (barJava && isInViewport2(barJava)){
    if (wJava<skillJava){
      wJava+=0.1;
      barJava.style.width=wJava.toString()+"%"
    }
  }
  if (barPython && isInViewport2(barPython)){
    if (wPython<skillPython){
      wPython+=0.1;
      barPython.style.width=wPython.toString()+"%"
    }
  }
  if (barHTML && isInViewport2(barHTML)){
    if (wHTML<skillHTML){
      wHTML+=0.1;
      barHTML.style.width=wHTML.toString()+"%"
    }
  }
}