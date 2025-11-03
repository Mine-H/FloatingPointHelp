function AddSetupBit(parent) {
	const newElem = document.createElement('button');
	newElem.textContent = '0';
	newElem.onclick = function() { RemoveSetupBit(this) };
	parent.appendChild(newElem);
}

function RemoveSetupBit(bit) {
	const parent = bit.parentNode;
	if (parent.childElementCount > 2) { bit.parentNode.removeChild(bit); }
}