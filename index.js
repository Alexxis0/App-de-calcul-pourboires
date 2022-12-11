let bill = document.querySelector(".dollar");
let people = document.querySelector(".people_number");
let billValue;
let peopleValue;
let pourcent = document.querySelectorAll(".pourcent");
let btnCustom = document.querySelector(".custom");
let tipAmount = document.querySelector(".person_price");
let totalTip = document.querySelector(".total_person_price");
let pourcentValue;

bill.addEventListener("input", (e) => {
    billValue = parseFloat(e.target.value);
    calculTip()
});
people.addEventListener("input", (e) => {
    peopleValue = parseFloat(e.target.value);
    calculTip()
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
            calculTip()
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
        })
    });
    
    btnCustom.addEventListener("input", (e) => {
        pourcentValue = parseFloat(e.target.value) / 100;
        calculTip()
    });
}
btnCustomChange();

function btnCustomReset() {
    btnCustom.value = "Custom";
    btnCustom.type = "button";
    btnCustom.classList.remove("custom_color");
}

function calculTip() {
    let tipAmountTotal = (billValue * pourcentValue) / peopleValue;
    console.log(tipAmountTotal);
    let totalTipTotal = billValue / peopleValue + tipAmountTotal;
    console.log(totalTipTotal);
    tipAmount.textContent = tipAmountTotal.toFixed(2);
    totalTip.textContent = totalTipTotal.toFixed(2);
}
