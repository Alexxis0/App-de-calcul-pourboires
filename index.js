let container = document.querySelector(".container");
let bill = document.querySelector(".dollar");
let billValue = "";
let peopleNumber = document.querySelector(".people_number");
let peopleValue = "";
let pourcent = document.querySelectorAll(".pourcent");
let pourcent5 = document.querySelector("input[value='5%']");
let pourcent10 = document.querySelector("input[value='10%']");
let pourcent15 = document.querySelector("input[value='15%']");
let pourcent25 = document.querySelector("input[value='25%']");
let pourcent50 = document.querySelector("input[value='50%']");
let customPourcent = document.querySelector(".custom");
let personPrice = document.querySelector(".person_price");
let totalPersonPrice = document.querySelector(".total_person_price");
let pourcentValue = "";
let btnReset = document.querySelector("input[value='Reset']");
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
            tablePourcent.forEach((element2) => {
                element2.pourcentVar.classList.remove("pourcentStyle");
                element2.pourcentVar.checked = false;
            });
            element.pourcentVar.classList.add("pourcentStyle");
            element.pourcentVar.checked = true;
        });
    });
}
stylePourcent();

function billTest() {
    return new Promise((resolve) => {
        bill.addEventListener("change", () => {
            billValue = bill.value;
            resolve();
        });
    });
}

function pourcentClick() {
    return new Promise((resolve) => {
        tablePourcent.forEach((element) => {
            element.pourcentVar.addEventListener("click", () => {
                pourcentValue = element.pourcentNumber;
            });
        });
        resolve();
    });
}
function btnCustom() {
    customPourcent.type = `text`;
    customPourcent.value = "";
    customPourcent.classList.add("custom_color");

    tablePourcent.forEach((element) => {
        element.pourcentVar.classList.remove("pourcentStyle");
        element.pourcentVar.checked = false;
    });
}
function btnCustomValue() {
    customPourcent.addEventListener('change', () => {
        customPourcent.checked = true;
        pourcentValue = customPourcent.value
        console.log(pourcentValue);
    })
}

function btnCustomDelete() {
    tablePourcent.forEach((element) => {
        element.pourcentVar.addEventListener("click", () => {
            customPourcent.type = "button";
            customPourcent.value = "Custom";
            customPourcent.classList.remove("custom_color");
        });
    });
}
btnCustomDelete();

function peopleNumberTest() {
    return new Promise((resolve) => {
        peopleNumber.addEventListener("change", () => {
            peopleValue = peopleNumber.value;
            resolve();
        });
    });
}
function calculTipResponse() {
    container.addEventListener("change", () => {
        let tipAmount = (billValue * pourcentValue) / 100 / peopleValue;
        tipAmount = parseFloat(tipAmount.toFixed(2));
        personPrice.textContent = `$` + tipAmount;

        let totalPerson = billValue / peopleValue + tipAmount;
        totalPerson = totalPerson.toFixed(2);
        totalPersonPrice.textContent = `$` + totalPerson;
    });
    tablePourcent.forEach((element) => {
        element.pourcentVar.addEventListener("click", () => {
            let tipAmount = (billValue * pourcentValue) / 100 / peopleValue;
            tipAmount = parseFloat(tipAmount.toFixed(2));
            personPrice.textContent = `$` + tipAmount;
            
            let totalPerson = billValue / peopleValue + tipAmount;
            totalPerson = totalPerson.toFixed(2);
            totalPersonPrice.textContent = `$` + totalPerson;
        });
    });
}

async function calculTip() {
    billTest();
    pourcentClick();
    btnCustomValue()
    await peopleNumberTest();
    calculTipResponse();
}
calculTip();

function reset() {
    btnReset.addEventListener("click", () => {
        tablePourcent.forEach((element) => {
            element.pourcentVar.classList.remove("pourcentStyle");
            element.pourcentVar.checked = false;
            personPrice.textContent = `$0.00`;
            totalPersonPrice.textContent = `$0.00`;
        });
    });
}
reset();

