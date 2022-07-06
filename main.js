let boxes = document.getElementsByClassName('box'); // variável que seleciona todas as divs com a classe 'box' transformando a em um HTML collection 
let winnerAnnouce = document.getElementById('winner'); // variável que seleciona o id 'winner' para acessa-lo com o DOM.
let currentPlayer = 'X'; // variável que atribui uma string com o valor 'x' para o current player
let playerTurn = document.getElementById('turn'); //  variável que seleciona o id 'turn' para acess
let resetBtn = document.getElementById('reset'); // variável que armazena o DOM do botão reset
let board = ['','','','','','','','','']; // variavel que representa uma
let gameOn = true;


let winningConditions = [  // variavel onde é atribuida um array com 7 arrays dentro ,onde cada array representa a posição para que possa haver um vencedor.

    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],

]

for (let i = 0; i < boxes.length; i++) {  // loop for que faz uma iteração para cada vez que houver um clique nos boxes.
    let element = boxes[i];  // variável element onde é atribuida o valor da variavel boxes que é um HTML collection.
  
    function changePlayer () {
        element.innerHTML = currentPlayer;  // adiciona no HTML o valor do currentPlayer 
        board[i] = currentPlayer;  // atribui para cada posição do array 'board' o valor do currentPlayer

        if (currentPlayer === 'X'){   // condição que verifica se o currentPlayer é igual a 'X'
            currentPlayer = 'O'       // caso seja satisfeita é reatribuído o valor 'O' para a variavel currentPlayer
            playerTurn.innerHTML = 'O' // atualiza no HTML que a vez é de 'O'
            
        }else {                         // Se a primeira condição não for satisfeita então essa é satisfeita
            currentPlayer = 'X'         // o valor da variável currentPlayer é reatribuído com o valor 'X'
            playerTurn.innerHTML = 'X'  // atualiza no HTML que a vez é de 'X'
            
        }
        
        checkWinner();   // chamada da função checkWinner() que verifica se houve vencedor ou empate. Caso haja vencedor retorna o vencedor e se houve empate retorna que empatou.
        
       
    }

    function checkWinner () {  // função que verifica se houve vencedor ou empate.
        
        let roundWon = false ; // variavel

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
                playing = false
                break
            }
            
        }

        function winner () {
            let roundDraw = !board.includes("");

            if (roundWon) {                 //condição que retorna uma mensagem com o vencedor da partida.
                winnerAnnouce.innerHTML = `${board[i]} venceu !`;
                playerTurn.innerHTML = '' ;
                gameOn = false;
                return ;
                
            }else if (roundDraw) {      //condição que verifica se houve empate e retorna uma mensagem.
                winnerAnnouce.innerHTML = 'Empatou' ;
                playerTurn.innerHTML = ''
                gameOn = false ;
                return;
                
            }

        }
       
        winner(); // chamada da funcão winner que retorna se houve vencedor ou empate.

       
    

    }

    
      
    
    function restartGame() {   // função que reinicia o jogo transformando-o para o seu estado inicial.
        
        currentPlayer = "X";
        board = ["", "", "", "", "", "", "", "", ""];
        element.innerHTML = '';
        playerTurn.innerHTML = 'X'
        winnerAnnouce.innerHTML = ''
        element.addEventListener('click', changePlayer , {once: true})

    }

  resetBtn.addEventListener('click' , restartGame);
  element.addEventListener('click', changePlayer , {once: true})  // 
  
}



