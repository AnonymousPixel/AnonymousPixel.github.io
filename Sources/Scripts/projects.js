class Project {
  constructor(name,type,image,descriptionSmall,descriptionMedium,descriptionLarge) {
    this.name = name
    this.type = type
    this.image = image
    this.descriptions = [descriptionSmall,descriptionMedium,descriptionLarge]
  }
}

var elem = 0
while(elem == 0){
  if (document.getElementsByClassName("flexcontainer")[0]){
    elem=document.getElementsByClassName("flexcontainer")[0]
    break
  }
}
alpha=true
function addProj(proj)
{
  var element = document.createElement("div")
  element.innerHTML = "<p class=\"description\">" + proj.descriptions[0] +"</p><img src=\"Sources/Images/" + proj.image + "\"/><p><b>" + proj.name + "</b><br>" + proj.type + "</p>"
  element.classList.add("project");
  if(alpha){alpha=false;element.style.display="block"}
  elem.appendChild(element)
}

const projList = [
  new Project("CRT Portfolio site","Site","crt_portfolio.webp","A simple terminal-esque program which I made using HTML, CSS and Javascript.","A simple terminal-esque program which I made using HTML, CSS and Javascript. It emulates an old crt display but lacks in functionality.","A simple terminal-esque program which I made using HTML, CSS and Javascript. It emulates an old crt display but lacks in functionality. It isn't really user friendly, and is more of a silly project of mine."),
  new Project("VibeDotCheck","Flask webapp","vibedotcheck.webp","A small project I made to familiarise me with the use of API's and flask. It is not very functional but I did learn quite a lot making it.","A small project I made to familiarise me with the use of API's and flask. It is not very functional but I did learn quite a lot making it.","A small project I made to familiarise me with the use of API's and flask. It is not very functional but I did learn quite a lot making it."),
  new Project("SpaceGaem","Game","spacegaem.webp","A simple JS game using the 'Kaboom.js' library.","A simple JS game using the 'Kaboom.js' library.","A simple JS game using the 'Kaboom.js' library."),
  new Project("Saturated","BetterDiscord Theme","placeholder.webp","A BetterDiscord theme that increase satuaration and makes discord easier on the eye.","A BetterDiscord theme that increase satuaration and makes discord easier on the eye.","A BetterDiscord theme that increase satuaration and makes discord easier on the eye."),
]

projList.forEach(e => addProj(e))
e=document.createElement("a")
e.classList.add("next")
e.setAttribute("onclick","plusSlides(1)");
e.innerHTML="&#10095"
elem.appendChild(e)