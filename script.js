const fonts = ['Sacramento',
'Dancing Script',
'Satisfy',
'Great Vibes',
'Cookie',
'Yellowtail',
'Marck Script',
'Mr Dafoe',
'Allura',
'Parisienne',
'Playball',
'Homemade Apple'];

fontLoader();
createGrid(4, 3);

function fontLoader() {
    const href = 'https://fonts.googleapis.com/css?family=';
    const style = document.createElement('style');
    let styleBuilder = '';

    for (x = 0; x < fonts.length; x++) {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet'
        link.href = href+fonts[x];
        document.head.appendChild(link);
        styleBuilder += `
        .font` + x + ` {font-family: '` + fonts[x] + `', sans-serif;}`;
    }
    style.innerHTML = styleBuilder;
    document.head.appendChild(style);
}

function createGrid(num1, num2) {
	const numDivs = num1 * num2;
    const container = document.getElementById('container');
    let count = 0;

	for (x = 0; x < numDivs; x++) {
        let fontClass = 'font' + x;
        const grid = document.createElement('div');
        grid.classList.add('cell');
        grid.classList.add(fontClass);
		container.appendChild(grid);
	}

    let boxes = document.querySelectorAll('.cell')
    boxes.forEach(box => {
        box.innerText = 'Paradise Woodcraft';
        const fontNameDiv = document.createElement('div');
        fontNameDiv.classList.add('plain');
        fontNameDiv.innerText = fonts[count];
        box.appendChild(fontNameDiv);
        count++;
    })



}