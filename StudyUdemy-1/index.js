function singSong(){
    console.log("ド");
    console.log("レ");
    console.log("ミ");
}

function greet(firstName){
    console.log(`firstName: ${firstName}`);
}


const text = document.getElementById("text");
const color = document.getElementById("colorPicker");

const changeBackgroundColor = ()  => {
    document.body.style.backgroundColor = color.value;

    text.textContent = `カラーピッカー：${color.value}`;
}


color.addEventListener("input", changeBackgroundColor);