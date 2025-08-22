const redSlider =document.getElementById("redSlider");
const greenSlider =document.getElementById("greenSlider");
const blueSlider =document.getElementById("blueSlider");

const redValueSpan =document.getElementById("redValue");
const greenValueSpan =document.getElementById("greenValue");
const blueValueSpan =document.getElementById("blueValue");

const colorBox =document.getElementById("copy-box");
const copyButton =document.getElementById("copyButton");
const inputTypeRGBvalue =document.getElementById("inputType");

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('input',updateColor);

function updateColor(){
    const redValue=redSlider.value;
    const blueValue=blueSlider.value;
    const greenValue=greenSlider.value;

    const rbgColor=`rbg(${redVAlue},${blueValue},${greenValue})`;

    redValueSpan.textContent=redValue;
    blueValueSpan.textContent=blueValue;
    greenValueSpan.textContent=greenValue;

    inputTypeRGBvalue.textContent=rbgColor;
}
 
updateColor();

function copyRGBValues() {
    const redValue=redSlider.value;
    const blueValue=blueSlider.value;
    const greenValue=greenSlider.value;

    const rbgColor=`rbg(${redVAlue},${blueValue},${greenValue})`;

        navigator.clipboard.writeText(rbgColor)
            .then(()=>{
                alert("Copied successfully")
            })
            .catch((Error)=>{
                
            })
}