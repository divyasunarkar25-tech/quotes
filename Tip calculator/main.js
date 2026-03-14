const btn = document.getElementById("calculate");
const result = document.getElementById("Result");
const inputs = document.querySelectorAll("input");

 btn.addEventListener("click", () =>{ 

    const persons = Number(inputs[0].value);
    const amount = Number(inputs[1].value);
    const tip = Number(inputs[2].value);

    if(persons <= 0 || amount <= 0 || tip <=0) {
        window.alert("Please enter values");
        return;
    }
    const tipA = amount * (tip / 100);
    const total = amount + tipA;
    const perPerson = total / persons;

    result.innerText =  " Tip: = " + tipA.toFixed(1) + " ,  Per Person: = " + perPerson.toFixed(1);
   
}); 