const container = document.querySelector('.container');
const n = document.getElementById('input-number');









for (let i = 1; i <= n; i++){
  const square = squareCreation(i);

  square.addEventListener('click', function(){
    this.classList.toggle('clicked');
  })
  container.append(square);
}

/********************FUNCTIONS********************************/

function oddEven (id){
  if(id % 2) return 'odd';
  return 'even';
}
/**
 * 
 * @returns l'elemento creato
 */
function squareCreation (index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare._squareID = index;
  newSquare.innerHTML = `<span>${index}</span>`;

  return newSquare;
}

function reset() {
  container.innerHTML = '';
}