let bill = document.querySelector(".dollar");
let peopleNumber = document.querySelector(".people_number");
let pourcent5 = document.querySelector("input[value='5%']");
let pourcent10 = document.querySelector("input[value='10%']");
let pourcent15 = document.querySelector("input[value='15%']");
let pourcent25 = document.querySelector("input[value='25%']");
let pourcent50 = document.querySelector("input[value='50%']");
let tablePourcent = [
    {
        pourcentNumber: 5,
        pourcentVar: pourcent5,
    },
    {
        pourcentNumber: 10,
        pourcentVar: pourcent10,
    },
    {
        pourcentNumber: 15,
        pourcentVar: pourcent15,
    },
    {
        pourcentNumber: 25,
        pourcentVar: pourcent25,
    },
    {
        pourcentNumber: 50,
        pourcentVar: pourcent50,
    },
];






function stylePourcent() {
    tablePourcent.forEach((element) => {
        element.pourcentVar.addEventListener("focus", () => {
            tablePourcent.forEach((element) => {
                element.pourcentVar.classList.remove("pourcentStyle");
                element.pourcentVar.checked = false;
            });
            element.pourcentVar.classList.add("pourcentStyle");
            element.pourcentVar.checked = true;
        });
    });
}
stylePourcent();


bill.addEventListener("change", () => {
    let billValue = bill.value;
    console.log(billValue);
});
peopleNumber.addEventListener("change", () => {
    let peopleValue = peopleNumber.value;
    console.log(peopleValue);
});

function calculPourcent () {

    



    // console.log(billValue * tablePourcent[0].pourcentNumber);
}
calculPourcent();
