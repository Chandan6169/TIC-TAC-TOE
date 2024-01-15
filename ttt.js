let boxes = document.querySelectorAll('.box');
let button = document.querySelector('#reset-btn');
let para = document.createElement('p');
document.querySelector('main').prepend(para);
let resetButton = document.querySelector('#reset-btn');
let newButton = document.querySelector('#new-btn');

let turnO = true;

const winningPatterns  = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       
        if(turnO){
            box.innerHTML='O'
            console.log('O');
            para.innerHTML = 'Player X turn now'
            turnO = false;
        } else{
            box.innerHTML='X'
            console.log('X');
            para.innerHTML = 'Player O turn now'
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = ()=>{
    for(let pattern of winningPatterns){
        
        let posVal1 = boxes[pattern[0]].innerHTML;
        let posVal2 = boxes[pattern[1]].innerHTML;
        let posVal3 = boxes[pattern[2]].innerHTML;
       
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1==posVal2 && posVal2==posVal3){
                console.log('Winner is ',posVal1)
                afterWinning();
                announceWinning(posVal1);
            }
        }
    }
}

const announceWinning = (winner)=>{
    para.classList.add('hide');
    document.querySelector('.winnerDisplay').innerHTML = `Winner is ${winner}`;
}

const afterWinning = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const resetGame = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }
}

resetButton.addEventListener('click',resetGame);
newButton.addEventListener('click',resetGame);
