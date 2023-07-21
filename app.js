function createGrid() {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
}

window.addEventListener('load', createGrid);

function pixelFunc(){
    prompt("Enter number of pixels here:")
};