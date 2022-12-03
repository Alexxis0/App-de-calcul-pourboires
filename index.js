let bill = document.querySelector(".dollar");
let peopleNumber = document.querySelector(".people_number");
let pourcent = document.querySelector(".pourcent");
let pourcent5 = document.querySelector("input[value='5%']");
let pourcent10 = document.querySelector("input[value='10%']");
let pourcent15 = document.querySelector("input[value='15%']");
let pourcent25 = document.querySelector("input[value='25%']");
let pourcent50 = document.querySelector("input[value='50%']");
let pourcentNumber = [pourcent5, pourcent10, pourcent15, pourcent25, pourcent50];


bill.addEventListener("change", () => {
    let billValue = bill.value;
    console.log(billValue);
});
peopleNumber.addEventListener("change", () => {
    let peopleValue = peopleNumber.value;
    console.log(peopleValue);
});

function stylePourcent() {
    pourcentNumber.forEach((element) => {
        element.addEventListener("click", () => {
            pourcentNumber.forEach(element => {
                element.classList.remove("pourcentStyle")
            });
            element.classList.add("pourcentStyle"); // ajouter focus en js pour debug
        });
    });
}
stylePourcent();
