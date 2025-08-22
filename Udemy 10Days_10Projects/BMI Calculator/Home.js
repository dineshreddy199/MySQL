document.getElementById("bmiform").addEventListener('submit',function (e){
   e.preventDefault();
   
   const gender=document.getElementById("gender").value;
   const age=parseInt(document.getElementById("age").value);
   const heightFeet=parseInt(document.getElementById("height-feet").value);
   const heightInches=parseInt(document.getElementById("height-inches").value);
   const weight=parseInt(document.getElementById("weight").value);

    if(gender&&age&&heightFeet&&heightInches&&weight){
        const heightInMeters=((heightFeet*12)+heightInches)*0.0254;
        const bmi=weight/(heightInMeters*heightInMeters);
        const resultElement= document.getElementById("result");

        let category="";
        if(bmi<18.5){
            category="Under Weight";
        }
        else if(bmi>=18.5&&bmi<25){
            category="Normal weight"
        }
        else if(bmi>=25&&bmi<30){
            category="over weight"
        }
        else{
            category="Error Weight";
        }

        let resultMessage='your BMI:' +bmi.toFixed(2)+'<br>';
        resultMessage+='category :' +category;
        resultElement.innerHTML=resultMessage;
    }
})