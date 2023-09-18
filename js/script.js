const container = document.querySelector('.container');
const play = document.getElementById('btn-play');
let n;


play.addEventListener('click', function(){

	reset();
	inputDifficulty = document.getElementById('input-difficulty');
	const difficulty = inputDifficulty.value;
	switch (difficulty){
		case "hard":
		n = 10;
		break;
		case "normal":
		n = 9;
		break;
		case "easy":
		n = 7;
		break;
		default:
		n = 0;
	}

	console.log('n: '+n);
	console.log('difficulty: '+difficulty);


	for (let i = 1; i <= n*n; i++){
		const square = squareCreation(i);
		square.classList.add(difficulty);
	
		square.addEventListener('click', function(){
			this.classList.toggle('clicked');
			console.log(this.innerHTML);
		})
		container.append(square);
	}
});





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