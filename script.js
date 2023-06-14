let l = document.getElementById("loan");
let y = document.getElementById("years");
let i = document.getElementById("interest-rate");
let calculateBtn = document.getElementById("calculate");
let resultDiv;
let createPaymentsP;

calculateBtn.addEventListener("click", function() {

    let eachMonth = 0;
    let lastMonth = 0;
    let toPayThisMonth = 0;
    let all = 0;
    loan = parseInt(l.value);
    years = parseInt(y.value);
    interestRate = parseInt(i.value);


    if (document.body.childElementCount === 27) {
        document.body.removeChild(resultDiv);
    }

    resultDiv = document.createElement("div");
    document.body.appendChild(resultDiv);
    while (toPayThisMonth >= 0) {
        all += toPayThisMonth;
        // toPayThisMonth = (loan - lastMonth + (interestRate * (loan - lastMonth) / 100)) / years / 12;

        toPayThisMonth = ((loan - lastMonth) + (((loan - lastMonth) * interestRate) / 100)) / ((years * 12) - eachMonth);
        lastMonth += toPayThisMonth;


        createPaymentsP = document.createElement("p");
        createPaymentsP.innerText = toPayThisMonth;
        resultDiv.appendChild(createPaymentsP);
        eachMonth++;
    }
    console.log(all)
    total = document.createElement("div");
    total.innerText = `Your Total Payment Is: ${all}`;
    document.body.appendChild(total)
    

    // parseInt(loan.value) + parseInt(years.value) + parseInt(interestRate.value);

    

})
