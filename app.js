console.log("Hello World");
alert("All you have to do is find your number from 1 to 15 !")
let input = document.getElementById("input");
let body = document.getElementById("body");
let diver = document.getElementById("diver");
function btn(){
if(input.value === "13"){
    alert("Congratulations you have found your number");
    input.value = "" 
} 
else if(input.value > "13"){
    alert("You are going up your number");
}
else if(input.value < "13"){
   alert("You are going down your number");
}else{
    alert("You found your number wrong")
}
}