const container = document.querySelector(".container");

// let gridNum = 64;
// let pixelPerDiv = 9;

function renderGrid(gridCount, pixelCount) {
    // Set limit to 100
    if (gridCount > 100) {
        alert("Grid count can't be over 100; the default 64x64 grid will be rendered instead.")
        gridCount = 64;
        pixelCount = 9;
    }

    // Set pixel dimensions
    container.style.cssText = null;
    container.style.cssText = `grid-template-columns: repeat(${gridCount}, ${pixelCount}px [col-start]); grid-template-rows: repeat(${gridCount}, ${pixelCount}px [row-start]);`

    container.innerHTML = "";

    // Populate gridNum * gridNum grid 
    for (let i = 0; i < gridCount * gridCount; i++) {
        const div = document.createElement('div');
        div.style.cssText = "background-color: rgb(230, 230, 230);";
        div.classList.add("cell");
        container.appendChild(div);
    }
}
renderGrid(64, 9);

const changePixelSize = document.querySelector("#change-size");
changePixelSize.addEventListener('click', () => {
    let x = parseInt(prompt("Enter a pixel size (no greater than 100):"));
    if (x != null) {
        if (!(Number.isInteger(x))) {
            alert("A non-integer was detected as input; the default 64x64 grid will be rendered instead.");
            x = 64;
        }
        clearCells();
        renderGrid(x, 576 / x);
        togglePen = false;
        assignCellListeners();
    }
});


let togglePen = false;
let colorVar = "black";


function assignCellListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            togglePen = !togglePen;
            container.classList.toggle("divCrosshairs");
            const penToggled = document.querySelector(".togglePen");
            if (togglePen) {
                penToggled.style.color = "green";
                penToggled.textContent = "Enabled";
            } else {
                penToggled.style.color = "red";
                penToggled.textContent = "Disabled";
            }

        });

        cell.addEventListener("mousemove", () => {
            if (togglePen) {
                cell.style.cssText = `background-color: ${colorVar}`;
            } else return;
        });
    });
}
assignCellListeners();

function clearCells() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.cssText = "background-color: rgb(230, 230, 230);";
    });
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => clearCells());

const colors = document.querySelectorAll(".colors");
colors.forEach((color) => {
    color.style.cssText = `background-color: ${color.id}`;
    color.addEventListener('click', () => {
        colorVar = color.id;
    });
});