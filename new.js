const expBitHolder = document.getElementById('exp-bits');
const mantBitHolder = document.getElementById('mant-bits');
const expBitViewer = document.getElementById('exp-bit-num');
const mantBitViewer = document.getElementById('mant-bit-num');

var expBits = 0;
var mantBits = 0;

function AddSetupBits(type) {
	const newElem = document.createElement('p');

	if (type === 'exp') {
		newElem.onclick = function(){ FlipBit(this, type, expBitHolder.childElementCount) };
		newElem.textContent = (expBits === 0) ? '0' : expBitHolder.lastElementChild.textContent;

		expBitHolder.appendChild(newElem);
		expBits++; expBitViewer.textContent = expBits;
	}
	else {
		newElem.onclick = function(){ FlipBit(this, type, mantBitHolder.childElementCount) };
		newElem.textContent = (mantBits === 0) ? '0' : mantBitHolder.lastElementChild.textContent;

		mantBitHolder.appendChild(newElem);
		mantBits++; mantBitViewer.textContent = mantBits;
	}
}

function RemoveSetupBits(type) {
	if (type === 'exp') {
		if (expBits <= 1) { return; }

		expBitHolder.lastElementChild.remove();
		expBits--; expBitViewer.textContent = expBits;
	}
	else {
		if (mantBits <= 1) { return; }
		
		mantBitHolder.lastElementChild.remove();
		mantBits--; mantBitViewer.textContent = mantBits;
	}
}

function FlipBit(elem, type, id) {
	if (elem.textContent === '1') { elem.textContent = '0'; }
	else { elem.textContent = '1'; }
}


for (let i = 0; i < 1; i++) { AddSetupBits('exp'); }
for (let i = 0; i < 1; i++) { AddSetupBits('mant'); }