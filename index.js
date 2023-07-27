var randomNumber1=Math.floor(Math.random()*6)+1;
var val="images/dice"+randomNumber1+".png"
document.querySelector("img").setAttribute("src",val)

var randomNumber2=Math.floor(Math.random()*6)+1;
var vals="images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",vals)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else{
    console.log("ok")
}