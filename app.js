//Grid creation
let grid = document.getElementById("gridContainer");
let resetBtn = document.getElementById('resetBtn');

resetBtn.onclick = () => reloadGrid();

function generateGrid(rows, columns) {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      const div = document.createElement('div');
      div.classList.add('grid-square');
      grid.appendChild(div);
      
    }
  }
}

generateGrid(16, 16);

let gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'red';
  });
});

//Insert reset button function
function reloadGrid() {
  clearGrid();
  generateGrid(16, 16);
}

function clearGrid() {
  grid.innerHTML = '';
}

