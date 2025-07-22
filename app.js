const main = document.querySelector("#main");

const url = "https://baconipsum.com/api/?type=all-meat&paras=1";
const hiddenInput = document.querySelector("#hiddenInput");


const typingPara = document.querySelector("#wordDisplay");
async function abc() {
    let response = await fetch(url);
    let data = await response.json();
    typingPara.innerText = data[0];
    return data[0];
}

let originalText = "";
(async function () {
    let index = 0;
    originalText = await abc();

    typingPara.innerHTML = "";
    for(let t of originalText){
        let el = document.createElement("span");
        el.innerText = t;
        typingPara.append(el);
    }
    

    hiddenInput.addEventListener(("input"), (event) => {
        console.log(event.target.value);
        spellCheck(event.target.value,index);
        console.log(event.target.value);
        index ++;
    });
    console.log("Index: "+index)

}());

const spellCheck = (chr, index) => {
    let inputChar = chr[index];
    const span = document.querySelectorAll("span");
    if (inputChar !== originalText[index]) {
        console.log(span[0].innerText);
        span[index].style.color = "red";
    }else{
        span[index].style.color = "white";
    }
}

