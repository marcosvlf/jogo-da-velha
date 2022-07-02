let boxes = document.getElementsByClassName('box');
let winnerAnounce = document.getElementById('winner');
let currentPlayer = 'X';
let playerTurn = document.getElementById('turn');
let playTurnXorO = playerTurn.innerHTML  = 'X';
let resetBtn = document.getElementById('reset');
let board = ['','','','','','','','',''];
let gameOn = true ;

let winningConditions = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],

]



for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i];

    function changePlayer () {
       
        element.innerHTML = currentPlayer;
        board[i] = currentPlayer;



        if (currentPlayer === 'X'){
            currentPlayer = 'O'
            playerTurn.innerHTML = 'O'
            
        }else {
            currentPlayer = 'X'
            playerTurn.innerHTML = 'X'
        }


        element.removeEventListener('click' , changePlayer)

        checkWinner();
        
    }

    function checkWinner () {
        let roundWon = false ;
       function winningMessage (){
           return ` ${board[i]} venceu! `;
        }

        for (let i = 0; i <= 7; i++){
            let winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
           
        }

        if (roundWon) {
            winnerAnounce.innerHTML = winningMessage ();
            gameOn = false ;
            return false;

        }

        if (winningMessage === 'X'){
            element.removeEventListener('click' , changePlayer ())
        }

        let roundDraw = !board.includes("");

        if(roundDraw) {
            winnerAnounce.innerHTML = 'Empatou';
           
            gameOn = false; 
            return;
        }

        
        
       
    }

    function handleRestartGame() {
        gameOn = true;
        currentPlayer = "X";
        board = ["", "", "", "", "", "", "", "", ""];
        element.innerHTML = '';
        playerTurn.innerHTML = ''
        winnerAnounce.innerHTML = ''

        document.querySelectorAll('box').forEach(box => box.innerHTML = "");

        
        element.addEventListener('click', changePlayer)


    }


    resetBtn.addEventListener('click' , handleRestartGame)
   
    
  element.addEventListener('click', changePlayer)
  

  
}