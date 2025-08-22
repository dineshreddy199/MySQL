const data=document.getElementById("counterDisplay")
let count=0;
const increment=()=>{
    count++;
    data.innerHTML=count;
}
const decrement=()=>{
    count--;
    data.innerHTML=count;
}
const reset=()=>{
    data.innerHTML=0;
}