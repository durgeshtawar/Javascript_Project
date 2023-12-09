let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector(".msg-Container");
let newGameBtn = document.querySelector("#new-btn");

let turnO = true;
let count = 0 ;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5,8],
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    
    turnO = true,
    count = 0;
    enableBoxes();
    // msg.innerHTML = "";
   msgContainer.classList.add('hide');
}
boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        // console.log("Box was clicked");
        if(turnO){
            //playerO
            box.innerHTML = "O";
            turnO = false;

        }else{
            //playerX
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

       let isWinner =  checkWinner();
       if(count === 9 && !isFinite){
        gameDraw();

       }
    })
})
const gameDraw = () => {
    msg.innerHTML = `Game is Dreaw.`
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const disableBoxes = () =>{
    for(let box of boxes){
    box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
    box.disabled = false;
     box.innerHTML = "";
    }
};

const showWinner = (winner)=>{
    msg.innerHTML = `You are winner is ${winner}`;
   disableBoxes();
//    resetGame();
//    gameDraw();
    
}

const checkWinner = ()=>{
    for(let pattern of win){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}
resetbtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);