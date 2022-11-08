function createGrid(num1, num2) {
	numDivs = num * num;
	const container = document.querySelector('#container');

	for (x = 0; x < numDivs; x++) {
		const box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}

    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.innerText = 'Paradise Woodwork'
    })



}

createGrid(4, 3);