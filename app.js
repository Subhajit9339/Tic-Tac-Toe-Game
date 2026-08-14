let boxes=document.querySelectorAll(".box");
let button=document.querySelectorAll("#reset-btn")
let newGrambtn=document.querySelector("#new-btn");
let msgContiner=document.querySelector(".msg-continer");
let msg=document.querySelector("#msg");

let trueO= true;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGame=()=>{
    trueO=true;
    enableBoxes();
    msgContiner.classList.add("hide")
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click ");
        if(trueO){
            box.innerText="0";
            trueO=false;
        }else{
            box.innerText="X";
            trueO=true;
        }
        box.disabled=true;
        checkwinner();
});
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disableBoxes();
};
 const checkwinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner is:", pos1Val);
                showWinner(pos1Val);
            }
        }
    
}
};
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// newGrambtn.addEventListener("click",resetGame);
// resetbtn.addEventListener("click",resetGame);

