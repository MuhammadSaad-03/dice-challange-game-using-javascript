var randomnumber= Math.floor(Math.random()*6)+1;
var input= "Images/dice"+randomnumber + ".png";
var img1 = $("img")[0];
img1.setAttribute("src",input)


var randomnumber1= Math.floor(Math.random()*6)+1;
var input= "Images/dice"+randomnumber1 + ".png";
var img2 = $("img")[1];
img2.setAttribute("src",input)


if(randomnumber>randomnumber1){
    $("h1").text("player 1 wins 🚩 ");
}
else{
    $("h1").text("player 2 wins 🚩");
}