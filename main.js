clickMeBtn = document.querySelector('.clickMeBtn');
body = document.querySelector('body');
const arrayOfColors = [
	'green',
	'orange',
	'purple',
	'darkred',
	'blue',
	'lightblue',
	'grey',
	'lightgreen',
	'darkgreen',
	'darkgrey',
	'AliceBlue',
	'Aqua',
	'BlueViolet',
	'Coral',
	'Crimson',
	'Cornsilk'
	];

clickMeBtn.addEventListener('click', function() {
	  body.style.backgroundColor =  arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];	

})