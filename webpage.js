let body = document.getElementsByTagName("body");
window.console.log(body);
window.console.log("HELLO");
let element = document.getElementById("display-style");
element.innerHTML = "Changed"

let text = ["Taste", "Smell", "Sound", "Feel", "Hear",]
let i = 0;

document.getElementById("button").addEventListener("click",myFunction);

function myFunction (){

   if ( i < text.length){
    element.innerHTML = text[i]; 
    i ++;
    window.console.log(i);
   }else {
        i = 0; 
        element.innerHTML = text[i];
   } 
}