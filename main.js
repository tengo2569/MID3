let btn = document.querySelectorAll(".btn1");
let percent = document.querySelectorAll(".lb1 p");
let costum = document.querySelector(".inp5");
let bill = document.querySelector(".inp1");
let amount = document.querySelector(".inp2");
let tip = document.querySelector(".h61");
let all = document.querySelector(".h62");
let error= document.querySelector(".showerror");
let btn2= document.querySelector(".btn2");
let percent1 = 0;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        btn[i].classList.toggle("blue");
        percent[i].classList.toggle("color");
        for (let j = 0; j < btn.length; j++) {
            if (j !== i) {
                btn[j].classList.remove("blue");
                percent[j].classList.remove("color");
            }
        }
        costum.value = ""
        percent1 = parseInt(percent[i].innerText);
       
        calculateboth();
        console.log(percent1)
    });
}

bill.addEventListener("focus", function () {
    bill.classList.toggle("border")
})

costum.addEventListener("focus", function () {
    costum.classList.toggle("border1")
})

bill.addEventListener("input", function () {
    calculateboth();
});

amount.addEventListener("focus", function () {
    amount.classList.toggle("border1")
})

bill.addEventListener("blur", function () {
    bill.classList.remove("border")
})

costum.addEventListener("blur", function () {
    costum.classList.remove("border")
})

amount.addEventListener("blur", function () {
    amount.classList.remove("border1")
})


function calculateboth() {
    if (amount.value === "0") {
        error.innerHTML = "Can't Be Zero"
        tip.innerHTML = "$0.00"
        all.innerHTML = "$0.00"
    } else if (amount.value.trim() === "") {
        tip.innerHTML = "$0.00"
        all.innerHTML = "$0.00"
        error.innerHTML = ""
    } else if (amount.value < "0") {
        error.innerHTML = "Can't Be Zero"
    } else {
          if (costum.value) {
                percent1 = Number(costum.value)
            }
            error.innerHTML = ""
            const tipAmount = Number(bill.value * percent1 / 100) / Number(amount.value);
            tip.innerHTML = "$" + tipAmount.toFixed(2);

            const totalAmount = Number(bill.value * percent1/ 100) + Number(bill.value) / Number(amount.value);
            all.innerHTML = "$" + totalAmount.toFixed(2);
        
    }
}

amount.addEventListener("input", function () {
    calculateboth();
});


costum.addEventListener("focus", function () {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("blue");
        percent[i].classList.remove("color");
    }
    
})

costum.addEventListener("input", function () {
    calculateboth();
})
 

