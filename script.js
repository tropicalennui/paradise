const fonts = ['Caveat Brush', 'Berkshire Swash', 'Sansita', 'Aclonica', 'Norican', 'Rancho', 'Satisfy', 'Oleo Script', 'Lobster', 'Pacifico', 'Acme', 'Lobster Two', 'Sacramento'];
createGrid(4, 3);

function createGrid(num1, num2) {
	const numDivs = num1 * num2;
    const container = document.getElementById('container');
    let count = 0;

	for (x = 0; x < numDivs; x++) {
        let fontClass = 'font' + (x+1);
        const grid = document.createElement('div');
        grid.classList.add('cell');
        grid.classList.add(fontClass);
		container.appendChild(grid);
	}

    let boxes = document.querySelectorAll('.cell')
    boxes.forEach(box => {
        box.innerText = 'Paradise Woodcraft';
        const fontName = document.createElement('div');
        fontName.classList.add('plain');
        fontName.innerText = fonts[count];
        box.appendChild(fontName);
        count++;
    })



}