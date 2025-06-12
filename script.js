function colorBackground(event) {
    this.style.background = "blue";
}

function createGrid(size) {
    const etchGrid = document.querySelector(".etch-grid");

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