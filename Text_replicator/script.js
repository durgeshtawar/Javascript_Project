let text = document.getElementById("text");
let number = document.getElementById("number");
let output = document.getElementById("output");


function replicator(){
    let textvalue = " " + text.value;
    let replicatedText = textvalue.repeat(number.value);
    output.textContent = replicatedText

}

function copy(){
    navigator.clipboard.writeText(output.textContent)
}

function share(){
    let link = `whatsapp://send?text=${output.textContent}`
    let a = document.createElement("a")
    a.href = link
    a.click()
}