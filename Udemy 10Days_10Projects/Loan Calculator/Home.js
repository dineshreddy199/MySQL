function EmiCalculator() {
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const intrestRate = parseFloat(document.getElementById('intrestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTerm)) {
        alert("Please enter valid data");
        return;
    }
    let monthlyAmount=0;
    for(let i=1;i<=loanTerm;i++){
    if(monthlyAmount==0){
         monthlyAmount=loanAmount*(1+1*(loanTerm*intrestRate/1200));
    }else{
  monthlyAmount= monthlyAmount*(1+1*(loanTerm*intrestRate/1200));
    }
    console.log(i +`Month Amount :`+monthlyAmount);
}
    let  totalPayment=monthlyAmount;
    let emi = totalPayment / loanTerm;

    resultDiv.innerHTML = `<p>Hello</p>
         <p>Total Payment : ${totalPayment.toFixed(2)}</p>
         <p>Monthly EMI : ${emi.toFixed(2)}</p>
        `
    ;
}

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const intrestRate = parseFloat(document.getElementById('intrestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTerm)) {
        alert("Please enter valid data");
        return;
    }

    const monthlyInterest = intrestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyInterest) / 
                           (1 - Math.pow(1 + monthlyInterest, -loanTerm));
    const totalInterest = (monthlyPayment * loanTerm) - loanAmount;
    const totalPayment = monthlyPayment * loanTerm;

    resultDiv.innerHTML = `
        <p><strong>Total Payment:</strong> ${totalPayment.toFixed(2)}</p>
        <p><strong>Monthly Payment:</strong> ${monthlyPayment.toFixed(2)}</p>
        <p><strong>Total Interest:</strong> ${totalInterest.toFixed(2)}</p>
    `;
}
