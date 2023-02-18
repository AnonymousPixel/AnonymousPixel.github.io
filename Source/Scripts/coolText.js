async function main(Texts,delay=1000,coolText){
  console.log("coolText.js start");
  //const coolText = document.getElementById("coolText");
  //const termText = document.getElementById("term");  
  await new Promise(r => setTimeout(r, delay));
  for(let a = 0; a < Texts.length; a++){
    while (coolText.innerHTML.length>0) {
      coolText.innerHTML= coolText.innerHTML.slice(0,-1);
      await new Promise(r => setTimeout(r, 100));
    }
    await new Promise(r => setTimeout(r, 800));
    text=Texts[a]
    coolText.innerHTML=""
    for (let i = 0; i < text.length; i++) {
      coolText.innerHTML+=text[i];
      await new Promise(r => setTimeout(r, 100));
    }
    await new Promise(r => setTimeout(r, 1000));
  };
};