document.getElementById('calculatorBtn').addEventListener('click',function calculateLoan(){
    const loanAmount=parseFloat(document.getElementById('loanAmountInput').value)
    const intrestRate=parseFloat(document.getElementById('intrestRateInput').value)
    const loanTerm=parseFloat(document.getElementById('loanTermInput').value)

    if(isNaN(loanAmount)||isNaN(intrestRate)||isNaN(loanTerm)){
        alert("please Enter  Data")
    }
    
    const monthlyIntrest=(intrestRate)/(1200);
    const totalPayments= loanAmount*(1+1*(loanTerm*monthlyIntrest));
    
    const  monthlyPayment= totalPayments/12;
    const totalIntrest=loanAmount*loanTerm*monthlyIntrest;


//

   
// console.log("monthlyIntrest" +monthlyIntrest);
// console.log("monthlyPayment"+monthlyPayment);
// console.log("totalIntrest"+totalIntrest);
// console.log("totalPayments"+totalPayments);

//

    displayResult(monthlyPayment,totalIntrest);

   function displayResult(monthlyPayment,totalIntrest){
        const resultDiv=document.getElementById('result');

        resultDiv.innerHTML=`
            <p>Total Payment :${totalPayments.toFixed(2)}</p>
            <p>Monthly Payment :${monthlyPayment.toFixed(2)}</p>
            <p>Total Intrest :${totalIntrest.toFixed(2)}</p>
        `;
    }
}
);