function calculator(){
    const  name1=document.getElementById('userName1').value;
    const  name2=document.getElementById('userName2').value;
    
    if(name1===""||name2===""){
        alert(`please  Enter both names`);
    }
    else{
        const lovePercentage=Math.floor(Math.random()*101);
        const result=document.getElementById("result");

        result.innerHTML=`${name1} and ${name2}'s  love percentage :${lovePercentage}`;

        if (lovePercentage<30) {
            result.innerHTML +="<br>Not a Great Match. Keep  looking";
        } 
        else if (lovePercentage>=30 && lovePercentage<70) {
            result.innerHTML +="<br>Not much bad!,There is a potential. Give it a try";
        }
        else{
            result.innerHTML +="<br>Perfect Match.Congurations";
        }

    // }



//     if(name1===""||name2===""){
//         alert(`please  Enter both names`);
//     }
//     else{
//         const lovePercentage=Math.floor(Math.random()*101);
//         const result=document.getElementById("result");

// console.log(`${name1} and ${name2}'s  love percentage :${lovePercentage}`);

//         if (lovePercentage<30) {
//             console.log("<br>Not a Great Match. Keep  looking");
//         }
//         else if (lovePercentage>=30 && lovePercentage<70) {
//             console.log("<br>Not much bad!,There is a potential. Give it a try");
//         }
//         else{
//             console.log("<br>Perfect Match.Congurations");
//         }

    }
}