let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#resetbtn");
// let games = document.querySelectorAll(".game");
let newGameBtn = document.querySelector("#newgame");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX playerO

const winPatterns = [
    [0,1,2],
    [0.3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>{
turnO = true;
enableBox();
msgConatiner.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener('clcik', ()=>{
        console.log("Box was clicked");
        // box.innerHTML = "Hello ji";
        if(turnO){
            box.innerHTML = "O";
            turnO = false;

        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};
const showWinner = (Winner)=>{
   msg.innerHTML = `Congratulation , Winner is ${Winner}`;
   msgConatiner.classList.remove("hide");
   disableBox();

}

const checkWinner=()=>{
    for(let pattern of winPatterns){

     let pos1Val =  boxes[pattern[0]].innerHTML; 
     let pos2Val =  box[pattern[1]].innerHTML;
     let pos3Val = boxes[pattern[2]].innerHTML;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
        }
    }
    }
};

newGameBtn.addEventListener('clcik', resetGame);
reset_btn.addEventListener('click', resetGame);
