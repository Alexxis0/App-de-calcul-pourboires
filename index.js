let bill = document.querySelector(".dollar");
let people = document.querySelector(".people_number");
let billValue;
let peopleValue;
let pourcent = document.querySelectorAll(".pourcent");
let btnCustom = document.querySelector(".custom");
let tipAmount = document.querySelector(".person_price");
let totalTip = document.querySelector(".total_person_price");
let pourcentValue;
let errorInput = document.querySelector(".error_input");
let btnRestart = document.querySelector('input[value="Reset"]');

bill.addEventListener("input", (e) => {
    billValue = parseFloat(e.target.value);
    calculTip();
});
people.addEventListener("input", (e) => {
    peopleValue = parseFloat(e.target.value);
    errorInputZero();
    calculTip();
});

function stylePourcent() {
    pourcent.forEach((btn) => {
        btn.addEventListener("click", () => {
            pourcent.forEach((btnReset) => {
                btnReset.classList.remove("pourcentStyle");
            });
            btn.classList.add("pourcentStyle");
        });
    });
}
stylePourcent();

function btnPourcentValue() {
    pourcent.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            pourcentValue = parseFloat(e.target.value) / 100;
            btnCustomReset();
            calculTip();
        });
    });
}
btnPourcentValue();

function btnCustomChange() {
    btnCustom.addEventListener("click", () => {
        btnCustom.value = "";
        btnCustom.type = "text";
        btnCustom.classList.add("custom_color");
        pourcent.forEach((btn) => {
            btn.classList.remove("pourcentStyle");
        });
    });

    btnCustom.addEventListener("input", (e) => {
        pourcentValue = parseFloat(e.target.value) / 100;
        calculTip();
    });
}
btnCustomChange();

function btnCustomReset() {
    btnCustom.value = "Custom";
    btnCustom.type = "button";
    btnCustom.classList.remove("custom_color");
}

function calculTip() {
    if (billValue >= 1 && pourcentValue >= 0.001 && peopleValue >= 1) {
        let tipAmountTotal = (billValue * pourcentValue) / peopleValue;
        let totalTipTotal = billValue / peopleValue + tipAmountTotal;
        tipAmount.textContent = tipAmountTotal.toFixed(2);
        totalTip.textContent = totalTipTotal.toFixed(2);
    }
}
function errorInputZero() {
    if (peopleValue == 0) {
        errorInput.style.display = "flex";
        people.classList.add("error_focus");
    } else {
        errorInput.style.display = "none";
        people.classList.remove("error_focus");
    }
}
function btnReset() {
    btnRestart.addEventListener("click", () => {
        bill.value = "";
        pourcent.forEach((btn) => {
            btn.classList.remove("pourcentStyle");
        });
        btnCustom.value = "Custom";
        btnCustom.type = "button";
        btnCustom.classList.remove("custom_color");
        people.value = "";
        tipAmount.textContent = "$O.OO";
        totalTip.textContent = "$O.OO";
        billValue = "";
        peopleValue = "";
        pourcentValue = "";
        errorInput.style.display = "none";
        people.classList.remove("error_focus");
    });
}
btnReset();
