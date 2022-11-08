function createGrid(num) {
	numDivs = num * num;
	const container = document.querySelector('.container');

	for (x = 0; x < numDivs; x++) {
		const box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}

}

createGrid(4);