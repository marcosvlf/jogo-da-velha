let boxes = document.getElementsByClassName('box')


for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i];

    function changePlayer () {
        if (element.innerHTML === 'X'){
            element.innerHTML = 'O'
        }else {
            element.innerHTML = 'X'
        }
    }

    
  element.addEventListener('click', changePlayer)
  
}