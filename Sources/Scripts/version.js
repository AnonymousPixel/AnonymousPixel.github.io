var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://api.github.com/repos/WeeScottishPuffin/WeeScottishPuffin.github.io/branches/main", false ); // false for synchronous request
xmlHttp.send( null );
respData=JSON.parse(xmlHttp.responseText);
date=respData.commit.commit.author.date.replaceAll("-","").replaceAll(":","")
console.log(respData);
console.log(date);

var elem = 0
while(elem == 0){
  if (document.getElementsByClassName("version")[0]){
    elem=document.getElementsByClassName("version")[0]
    break
  }
}

elem.innerHTML=date