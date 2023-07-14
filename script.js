let input = document.querySelector("#input");
let form = document.querySelector("form");
let entrer = document.querySelector("#entrer");
let tableau = [];

entrer.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "" || isNaN(input.value)) {
        document.querySelector(".msg").innerHTML = "veuillez saisir un nombre"
    }
    else {
        tableau.push(parseFloat(input.value));
        document.querySelector(".msg").innerHTML = "";
        let firstCard = document.querySelector(".firstcard");
        firstCard.classList.remove("d-none");
        firstCard.classList.add("d-block");
        firstCard.innerHTML = `nombre(s) saisi(s) : ${tableau}`
    }
    input.value = "";
    console.log(tableau);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculMoyenne(tableau);
    tableau = [];
});
function calculMoyenne(tab) {
    if (tab.length === 0) {
        console.log("Le tableau est vide");
        return;
    }
    let total = tab.reduce((accumulator, element) => {
        accumulator = accumulator + element;
        return accumulator;
    }, 0)
    const moyenne = total / tab.length;
    console.log("la moyenne est :" + "" + moyenne);
    let secondCard = document.querySelector(".secondcard");
    secondCard.classList.remove("d-none");
    secondCard.classList.add("d-block");
    secondCard.innerHTML = ` la moyenne des nombres saisis est : ${moyenne} `;
}



