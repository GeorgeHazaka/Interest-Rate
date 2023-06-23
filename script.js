let lo = document.getElementById("loan");
let ye = document.getElementById("years");
let ir = document.getElementById("interest-rate");
let calculateBtn = document.getElementById("calculate");
let resultDiv = document.getElementById("result-div");
let createPaymentParagraph;
let total;

let num = (100000 / 10) + ((100000 - (15000 - (100000 * 5 / 100))) * 5 / 100);


calculateBtn.addEventListener("click", function() {

    let amountOfYears = 1;
    let NumberOfPaidMonths = 0;
    let lastMonth = 0;
    let toPayThisMonth = 0;
    let paidMoney = 0;
    loan = parseInt(lo.value);
    years = parseInt(ye.value);
    interestRate = ir.value;

    if (resultDiv.innerHTML.length > 0) {
        resultDiv.innerHTML = "";
    }

    if (total) {
        if (total.innerText.length > 0) {
            total.innerHTML = "";
        }
    }



    thisYearTotalPayment = (loan / years) + (loan * interestRate / 100);


    for (let i = 0; i < years * 12; i++) {

        toPayThisMonth = thisYearTotalPayment / 12;

        paidMoney += toPayThisMonth;
        lastMonth += toPayThisMonth;

        NumberOfPaidMonths++;

        if (NumberOfPaidMonths !== 12) {

            createPaymentParagraph = document.createElement("p");
            createPaymentParagraph.innerHTML = `<p>Månad (${i + 1}), Att betala: ${toPayThisMonth.toFixed(2)}</p>`;
            resultDiv.appendChild(createPaymentParagraph);

        }


        // Check paid Money position, and check interestRate

        if (NumberOfPaidMonths === 12) {

            amountOfYears++
            
            thisYearTotalPayment = (loan / years) + ((loan - (paidMoney - (loan * interestRate / 100))) * interestRate / 100);
            // (100000 / 5) + ((100000 - (15000 - (100000 / 5))) / 5)



            createPaymentParagraph = document.createElement("p");
            createPaymentParagraph.innerHTML = `
                <p>Månad (${i + 1}), Att betala: ${toPayThisMonth.toFixed(2)}</p>
                <p>År ${amountOfYears}</p>
            `;
            resultDiv.appendChild(createPaymentParagraph);

            NumberOfPaidMonths = 0;
        }

    }
    total = document.createElement("div");
    total.innerText = `Totala beloppet att betala tillbaka blir: ${paidMoney.toFixed(2)}`;
    document.body.appendChild(total)
    

    // parseInt(loan.value) + parseInt(years.value) + parseInt(interestRate.value);

    

})
