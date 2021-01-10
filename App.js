const container = document.querySelector(".container");

// Populate gridNum * gridNum grid
let gridNum = 64;
for (let i = 0; i < gridNum * gridNum; i++) {
    const div = document.createElement('div');
    div.style.cssText = "background-color: rgb(230, 230, 230);";
    div.classList.add("cell");
    container.appendChild(div);
}

let togglePen = false;
let colorVar = "black";

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

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.cssText = "background-color: rgb(230, 230, 230);";
    });
});

const colors = document.querySelectorAll(".colors");
colors.forEach((color) => {
    color.style.cssText = `background-color: ${color.id}`;
    color.addEventListener('click', () => {
        colorVar = color.id;
    });
});