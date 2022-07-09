let boxes = document.getElementsByClassName('box'); // variável que seleciona todas as divs com a classe 'box' transformando a em um HTML collection para poder acessá-lo no DOM.
let winnerAnnouce = document.getElementById('winner'); // variável que seleciona o id 'winner' para acessa-lo com o DOM.
let currentPlayer = 'X'; // variável que atribui uma string 'X' para o jogador atual. O jogador'X' será sempre o primeiro.
let playerTurn = document.getElementById('turn'); //  variável que é atribuída o valor correspondente ao elemento 'turn' para acessá-lo no DOM.
let resetBtn = document.getElementById('reset'); // variável que é atribuída o valor correspondente ao elemento 'reset' para poder acessá-lo no DOM.
let board = ['','','','','','','','','']; // variavel onde é atribuída um array com 9 posições vazias que receberão o valor do currentPlayer a cada iteração

let winningConditions = [  // variável onde é atribuida um array com 7 arrays dentro ,onde cada array representa a posição para que possa haver um vencedor.

    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],

]

for (let i = 0; i < boxes.length; i++) {  // loop for que faz com que a cada iteração.
    let element = boxes[i];  // variável element onde é atribuida o valor da variavel boxes que é um HTML collection.
    playerTurn.innerHTML = 'X' // insere no HTML qual é o jogador da vez X ou O.
    function changePlayer () {
        element.innerHTML = currentPlayer;  // adiciona no HTML (que corresponde ao box clicado) o valor do currentPlayer 
        board[i] = currentPlayer;  // atribui para cada posição do array 'board' o valor do currentPlayer

        if (currentPlayer === 'X'){   // condição que verifica se o currentPlayer é igual a 'X'
            currentPlayer = 'O';      // caso seja satisfeita é reatribuído o valor 'O' para a variavel currentPlayer
            playerTurn.innerHTML = 'O' // atualiza no HTML que a vez é de 'O'
            
        }else {                         // Se a primeira condição não for satisfeita então essa é satisfeita
            currentPlayer = 'X' ;        // o valor da variável currentPlayer é reatribuído com o valor 'X'
            playerTurn.innerHTML = 'X'  // atualiza no HTML que a vez é de 'X'
            
        }
        
        checkWinner();   // chamada da função checkWinner() que verifica se houve vencedor ou empate. Caso haja vencedor retorna o vencedor e se houve empate retorna que empatou.
        
       
    }

    function checkWinner () {  // função que verifica se houve vencedor ou empate.
        
        let roundWon = false ; // variável onde é atribuído um boolean para saber se ganhou no round atual. Caso haja vencedor na vez transforma em true.

        for (let i = 0; i <= 7; i++){
           
            let a = board[winningConditions[i][0]]; // a variavel 'a' ,'b' e 'c' recebe o valor de board  correspondente cada posição no array winnigConditions. 
            let b = board[winningConditions[i][1]]; // Através de winnigConditios[i] em cada iteração e selecionado em cada array um indice. No caso 'a' recebe o valor do indice [0] de cada array de winninConditios;
            let c = board[winningConditions[i][2]];  // 'b' recebe o valor do indice [1] de cada array de winnigConditions e 'c' recebe o valor do indice [2] de cada array de winningConditions.
            
             if (a === '' || b === '' || c === '') { //condição que verifica se alguma das três posições vencedoras estão vazias.
                                                     //caso estejam vazias o código continua verificando a próxima condição.
                continue;
            }
            if (a === b && b === c) {  //condição que verifica se o valor que está na posição 'a' é igual ao de 'b' e se o de 'b' é igual ao de 'c';
                roundWon = true;       // caso os valores de a , b e c sejam iguais siginifica que houve um vencedor . Assim roundWon se torna true
                break   // encerra a execução do loop.
            }
            
        }
        

        function winner () {  // função que verifica qual jogador ('x' ou 'o') ganhou ou se houve empate, retornando  uma mensagem.
            let roundDraw = !board.includes(""); // variável que armazena a negação do metodo includes usado em board. Esse metodo procura no array 'board' se há algum elemento "" (vazio);
                                                 // Como é a negação então verifica se todos os boxes estão preenchidos resultando disso um empate.
                                                 
            if (roundWon) {   //condição que retorna uma mensagem com o vencedor da partida.
                winnerAnnouce.innerHTML = `${board[i]} venceu !`;  // é inserido no HTML que corresponde a winnerAnnouce a mensagem que o jogador que fez a última jogada venceu.
                playerTurn.innerHTML = '' ; //atribui um valor vazio ao proximo jogador no HTML (A vez é de :)
                
            }else if (roundDraw) {      //condição que verifica se houve empate e retorna a mensagem 'Empatou'
                winnerAnnouce.innerHTML = 'Empatou' ; 
                playerTurn.innerHTML = '' // atribui um valor vazio ao próximo jogador no HTML (A vez é de:)
                
            }

        }

        winner(); // chamada da funcão winner que retorna uma mensagem no HTML do vencedor ou do empate.

    }
    
    function restartGame () {   // função que reinicia o jogo transformando-o para o seu estado inicial.
        
        currentPlayer = "X";
        board = ["", "", "", "", "", "", "", "", ""];
        element.innerHTML = '';
        playerTurn.innerHTML = 'X'
        winnerAnnouce.innerHTML = ''
        element.addEventListener('click', changePlayer , {once: true})

    }

  resetBtn.addEventListener('click' , restartGame);
  element.addEventListener('click', changePlayer , {once: true})  // adiciona para cada box um evento de 'click' que chama a função changePlayer responsável pela mudança do jogador
                                                                  //once : true faz com que seja adicionado apenas uma vez o evento de click em cada box.
}



