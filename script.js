function colorBackground(event) {
    this.style.background = "blue";
}

function askUserForSize() {
    const sizeFromUser = prompt("Please enter a size of the grid, between 1 and 100");
    const size = parseInt(sizeFromUser);
    if (size !== NaN && size !== null && size > 0 && size <= 100) {
        // const etchGrid  = document.querySelector(".etch-row");
        createGrid(size);        
    }
}

function createGrid(size) {
    const etchGrid = document.querySelector(".etch-grid");

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