function createGrid() {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 8 * 8; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
}

window.addEventListener('load', createGrid);