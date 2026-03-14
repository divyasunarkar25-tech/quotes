const quote = ["Perfection is not attainable but if we chase perfection we can catch excellence.",
"Let us make our future now and let us make our dreams tomorrows reality.",
    "The best way to get started is to quit talking and begin doing.",
    "No one can make you feel inferior without your consent.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
"For those to whom much is given, much is required.",
"Genius is one percent inspiration and ninety-nine percent perspiration."]


const display = document.getElementById("quotes")
const btn = document.getElementById("btn");
   

function generatequote(){
       const randomIndex = Math.floor(Math.random() * quote.length);
       display.innerText = quote[randomIndex];
}
btn.addEventListener("click", generatequote);
