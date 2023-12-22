//Qs1.Create a p tag on the page and set its text to “DesiCoders”, where Deltais bold.

let p=document.createElement("p"); 
p.innerHTML="Desi<b>Coders</b>Practice";
document.querySelector("body").append(p);
//Qs1.Create a button element on the page using JavaScript only .Set the text of button to “Clickme”;
let btn=document.createElement("button");
btn.innerText="Let's do that";
document.querySelector('body').append(btn);
//Qs3.Access the btn using the query Selector and button id.Change the button background color to blue and text color to white.

let btn2=document.querySelector('#change-title-btn');
btn.style.backgroundColor="blue"

//Qs4.Create an h1 element on the page and set its text to “DOMPractice” underlined.
//Change its color to purple.
let h1=document.createElement("h1");
h1.innerHTML="<u> DOM practice</u>";
document.querySelector("body").append(h1);
//Qs5. Create a new input and but to newe element on the page using JavaScript only.Set the text of button to “Click me”;
let button =document.createElement("button");
let input= document.createElement("input");
button.innerText="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button)
