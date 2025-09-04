// 1. randomoor omikujigiin zurag gargaj ireh 
function getRandomImage(){
     const number = Math.floor(Math.random()*7) //0-7 hurtleh toonii butarhaig hayah 
     //const imagePath = "./images/omikuji-" + number.toString() + ".png";
     const imagePath = `./images/omikuji-${number.toString()}.png`;
     return imagePath;
}

// 2. tovchluur darhaar slot

function playOmikuji(){
   const timer = setInterval(function(){
        document.querySelector("#js-result").setAttribute("src",getRandomImage());
   },100);

   setTimeout(function(){
    clearInterval(timer);
   },3000);
}
document.querySelector("#js-button").addEventListener("click", playOmikuji);

// 3. hedn secundiin daraa slot zogsoh

