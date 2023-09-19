const container = document.querySelector('.container');
const play = document.getElementById('btn-play');
let n;
const bombArray = [];
let points = 0;
const punteggio = document.getElementById('punteggio');


play.addEventListener('click', function(){
	container.classList.remove('disable-div');
	points = 0; 
	punteggio.innerHTML = 'Punteggio: ' + points
	reset();
	start();
	const square = document.querySelector('.square');
	while (bombArray.length < 16) {
		bomb = randomIndex(1, n);
		if (!bombArray.includes(bomb)){
			bombArray.push(bomb);
		} 
	}
	console.log(bombArray);



	
});





/********************FUNCTIONS********************************/







function randomIndex(min, max){
	result = Math.floor(Math.random() * ((max*max) - min + 1) + min);
	return result;
};

function start (){
	inputDifficulty = document.getElementById('input-difficulty');
	const difficulty = inputDifficulty.value;
	n = difficultyLevel(difficulty);

	console.log('n: '+n);
	console.log('difficulty: '+difficulty);


	for (let i = 1; i <= n*n; i++){
		const square = squareCreation(i);
		const esito = document.getElementById('esito');
		square.classList.add(difficulty);
		let message;
		esito.classList.add('d-none');

		square.addEventListener('click', function(){
			this.removeEventListener('click', square);
			this.classList.add('clicked');
			console.log('_squareID: '+this._squareID);
			if (bombArray.includes(this._squareID)){
				this.classList.add('bomb');
				console.log('square: '+this);
				console.log('Hai perso!');
				container.classList.add('disable-div');
				message = 'Hai perso!';
				esito.classList.remove('d-none');

			} else points++;
			console.log('points: '+points);
			punteggio.innerHTML = "Punteggio: "+points;
			esito.innerHTML = message;
		})
		container.append(square);
		
	}


}

function difficultyLevel(level){
	let result;
	switch (level){
		case "easy":
		result = 10;
		break;
		case "normal":
		result = 9;
		break;
		case "hard":
			result = 7;
		break;
		default:
			result = 0;
	}
	return result;
}
/**
 * 
 * @returns l'elemento creato
 */
function squareCreation (index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare._squareID = index;
  // newSquare.innerHTML = index;

  return newSquare;
}

function reset() {
  container.innerHTML = '';
}