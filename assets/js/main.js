console.log("it works");

const alter = document.getElementById("number1");
const output = document.querySelector("p");

function pruefung(){
    // console.log (alter.value);

    let age = alter.value >= 18;

    age ? output.innerHTML = "Volljährig" : output.innerHTML = "Minderjährig";
}