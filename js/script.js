const container = document.querySelector('.container');
const play = document.getElementById('btn-play');
let n;
const bombArray = [];


play.addEventListener('click', function(){

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



	// for (let i = 1; i <= n*n; i++){
	// 	if (bombArray.includes(i)){
	// 		square.getElementById.('_squareID');
	// 		console.log('square: '+square);
	// 	}
	// }
});





/********************FUNCTIONS********************************/
// function verifyBombArray (num, array){
// 	for(let i = 0; i < array.length; i++)
// 	if (num === array[i]) ? num = randomIndex() : array.push;
	
// };


function insertBombArray (){
	
};



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
		square.classList.add(difficulty);
	
		square.addEventListener('click', function(){
			this.classList.toggle('clicked');
			console.log('_squareID: '+this._squareID);
			if (bombArray.includes(this._squareID)){
						this.classList.add('bomb');
						console.log('square: '+this);
					}
		})
		container.append(square);

		
		
	}
	// const bombArray = [];
	// while (bombArray.length < 16) {
	// 	bomb = randomIndex(1, n);
	// 	if (!bombArray.includes(bomb)){
	// 		bombArray.push(bomb);
	// 		this.classList.add('bomb');
	// 	} 
	// }

	// console.log(bombArray);

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