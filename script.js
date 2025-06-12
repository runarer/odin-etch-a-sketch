function colorBackground(event) {
    this.style.background = "blue";

    const currentOpacity = parseFloat(window.getComputedStyle(this).opacity);
    this.style.opacity = currentOpacity + 0.1
}

function askUserForSize() {
    const sizeFromUser = prompt("Please enter a size of the grid, between 1 and 100");
    const size = parseInt(sizeFromUser);
    if (size !== NaN && size !== null && size > 0 && size <= 100) {
        createGrid(size);        
    }
}

function createGrid(size) {
    const etchGrid = document.querySelector(".etch-grid");

    // Remove children if there are any, resets the grid.
    etchGrid.replaceChildren();

    for (let rowNr = 0; rowNr < size; rowNr++) {
        const etchRow = document.createElement("div")
        etchRow.classList.add("etch-row");
        
        for(let columnNr = 0; columnNr < size; columnNr++) {
            const etchSquare = document.createElement("div");
            etchSquare.classList.add("etch-square");            
            
            etchSquare.addEventListener("mouseenter",colorBackground);

            etchRow.appendChild(etchSquare);
        }
        etchGrid.appendChild(etchRow);
    }
}

createGrid(16);

const sizeSelection = document.querySelector("#size-selection");
sizeSelection.addEventListener("click",askUserForSize);