function createGrid(num1, num2) {
	numDivs = num1 * num2;
	const container = document.querySelector('#container');

	for (x = 0; x < numDivs; x++) {
		const grid = document.createElement('div');
		grid.classList.add('box');
		container.appendChild(grid);
	}

    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.innerText = 'Paradise Woodwork'
    })



}

createGrid(4, 3);