var ms = 0, ss = 0, mm = 0, hh = 0;
var timerResult, firstMs, secondMs;

var stopWatchMS = document.querySelector('.milliseconds');
var stopWatchSS = document.querySelector('.seconds');
var stopWatchMM = document.querySelector('.minutes');
var stopWatchHH = document.querySelector('.hours');


firstMs = new Date;

//function returnes () {
	//secondMs = new Date;
	//return (secondMs);
//};

//secondMs = setInterval(returnes, 1);
//returnes();


function calculateTime () {

	secondMs = new Date;

	ms = secondMs.getTime() - firstMs.getTime();
	if (ms > 999) {
		ss += 1;
		ms = 0;
		firstMs = new Date;
		secondMs = new Date;
		ms = (secondMs.getTime() - firstMs.getTime());
    }

    if (ms > 99) {
        stopWatchMS.innerHTML = ms;
	} else if (ms > 9) {      
        stopWatchMS.innerHTML = '0' + ms;
	} else {
		stopWatchMS.innerHTML = '0' + '0' + ms;
	}


	if (ss === 60) {
        ss = 0;
        mm += 1;
    }

    if (ss > 9) {
    	stopWatchSS.innerHTML = ss;
	} else {
		stopWatchSS.innerHTML = '0' + ss;
	}


    if (mm === 60) {
        mm = 0;
        hh += 1;
    }

    if (mm > 9) {
    	stopWatchMM.innerHTML = mm;
	} else {
		stopWatchMM.innerHTML = '0' + mm;
	}


	if (hh === 24) {
        hh = 0;
    }

    if (hh > 9) {
    	stopWatchHH.innerHTML = hh;
	} else {
		stopWatchHH.innerHTML = '0' + hh;
	}

};



var inputs = document.getElementsByTagName('input');

inputs[0].addEventListener('click', startTimer);

function startTimer () {
    timerResult = setInterval (calculateTime, 1);
    inputs[0].removeEventListener('click', startTimer);
    inputs[0].setAttribute('value','Stop');
    inputs[0].addEventListener('click', stopTimer);
    //inputs[0].addEventListener('click', addStop);
    inputs[1].addEventListener('click', addSplit);
    inputs[2].addEventListener('click', addReset);
};

function stopTimer () {
	clearInterval(timerResult);
	inputs[0].removeEventListener('click', stopTimer);
	inputs[0].setAttribute('value','Start');
	inputs[0].addEventListener('click', startTimer);
	addStop ();
	inputs[0].removeEventListener('click', addStop);
	inputs[1].removeEventListener('click', addSplit);
};

var p = document.querySelector('.timer');

var wrapCell = document.querySelector('.wrapCell');

var count = document.querySelector('.counter');

var i = 1;


function addStop () {
	var p_1 = p.textContent;
	var p_2 = count.cloneNode(true);
	wrapCell.appendChild(p_2);
	p_2.textContent = i + ' ' + 'Stop' + ':' + p_1;
	p_2.className = 'clones';
	i++;
};

function addSplit () {
	var p_1 = p.textContent;
	var p_2 = count.cloneNode(true);
	wrapCell.appendChild(p_2);
	p_2.textContent = i + ' ' + 'Split' + ':' + p_1;
	p_2.className = 'clones';
	i++;
};


function addReset () {

    var addedClones = document.getElementsByTagName('p');

	var j = 2;
    while (j < addedClones.length) {
    	wrapCell.removeChild(addedClones[j]);
    };
	stopWatchMS.innerHTML = '0' + '0' + '0';
	stopWatchSS.innerHTML = '0' + '0';
	stopWatchMM.innerHTML = '0' + '0';
	stopWatchHH.innerHTML = '0' + '0';
	clearInterval(timerResult);
	inputs[0].setAttribute('value','Start');
	inputs[2].removeEventListener('click', addReset);
	inputs[0].addEventListener('click', startTimer);
	inputs[0].removeEventListener('click', stopTimer);
	inputs[1].removeEventListener('click', addSplit);
	inputs[1].removeEventListener('click', addStop);
	i = 1;
	ms = 0;
	ss= 0;
	mm = 0;
	hh = 0;
};

var sizesColors = document.querySelectorAll ('a');

sizesColors[0].addEventListener('click', setSmall);
sizesColors[1].addEventListener('click', setMedium);
sizesColors[2].addEventListener('click', setLarge);
sizesColors[3].addEventListener('click', setXLarge);
sizesColors[4].addEventListener('click', setBlue);
sizesColors[5].addEventListener('click', setBlack);
sizesColors[6].addEventListener('click', setSilver);
sizesColors[7].addEventListener('click', setGreen);
sizesColors[8].addEventListener('click', setOrange);


var milli = document.querySelectorAll('span');


function setSmall () {
	sizesColors[0].className = 'underline';
	sizesColors[1].classList.remove('underline');
	sizesColors[2].classList.remove('underline');
	sizesColors[3].classList.remove('underline');
	p.className = 'timer small';
	milli[6].className = 'milliseconds_small';
};

function setMedium () {
    sizesColors[1].className = 'underline';
    sizesColors[0].classList.remove('underline');
    sizesColors[2].classList.remove('underline');
    sizesColors[3].classList.remove('underline');
    p.className = 'timer medium';
    milli[6].className = 'milliseconds_medium';
};

function setLarge () {
    sizesColors[2].className = 'underline';
    sizesColors[0].classList.remove('underline');
    sizesColors[1].classList.remove('underline');
    sizesColors[3].classList.remove('underline');
    p.className = 'timer large';
    milli[6].className = 'milliseconds_large';
};

function setXLarge () {
    sizesColors[3].className = 'underline';
    sizesColors[0].classList.remove('underline');
    sizesColors[1].classList.remove('underline');
    sizesColors[2].classList.remove('underline');
    p.className = 'timer x_large';
    milli[6].className = 'milliseconds';
};

var bodyColor = document.querySelector('body');

function setBlue () {
    sizesColors[4].className = 'underline';
    sizesColors[5].classList.remove('underline');
    sizesColors[6].classList.remove('underline');
    sizesColors[7].classList.remove('underline');
    sizesColors[8].classList.remove('underline');
    bodyColor.className = 'blue';
};

function setBlack () {
    sizesColors[5].className = 'underline';
    sizesColors[6].classList.remove('underline');
    sizesColors[7].classList.remove('underline');
    sizesColors[8].classList.remove('underline');
    sizesColors[4].classList.remove('underline');
    bodyColor.className = 'black';
};

function setSilver () {
    sizesColors[6].className = 'underline';
    sizesColors[7].classList.remove('underline');
    sizesColors[8].classList.remove('underline');
    sizesColors[4].classList.remove('underline');
    sizesColors[5].classList.remove('underline');
    bodyColor.className = 'silver';
};

function setGreen () {
    sizesColors[7].className = 'underline';
    sizesColors[8].classList.remove('underline');
    sizesColors[4].classList.remove('underline');
    sizesColors[5].classList.remove('underline');
    sizesColors[6].classList.remove('underline');
    bodyColor.className = 'green';
};

function setOrange () {
    sizesColors[8].className = 'underline';
    sizesColors[4].classList.remove('underline');
    sizesColors[5].classList.remove('underline');
    sizesColors[6].classList.remove('underline');
    sizesColors[7].classList.remove('underline');
    bodyColor.className = 'orange';
};
