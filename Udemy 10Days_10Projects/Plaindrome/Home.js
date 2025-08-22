function isPlaindrome(str){
    const cleanStr=str.toLowerCase();
    // console.log(cleanStr);

    const revStr=cleanStr.split('').reverse().join('');
    // console.log(revStr);
 
    return cleanStr===revStr;
}

function plaindrome() {
    const inputText=document.getElementById("inputText");
    const result=document.getElementById("result");

    if (isPlaindrome(inputText.value)) {
        result.textContent=`"${inputText.value}"  is plaindrome`
    }
    else{
        result.textContent=`"${inputText.value}"  is Not plaindrome`
    }

    result.classList.add('fadeIn')
    inputText.value="";
}

document.getElementById('checkButton').addEventListener('click',plaindrome);
