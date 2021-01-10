const container = document.querySelector(".container");

// Populate gridNum * gridNum grid
let gridNum = 32
for (let i = 0; i < gridNum * gridNum; i++) {
    const div = document.createElement('div');
    div.style.cssText = "background-color: rgb(230, 230, 230);";
    div.classList.add("cell");
    container.appendChild(div);
}

let togglePen = false;

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        togglePen = !togglePen;
        container.classList.toggle("divCrosshairs");
    });

    cell.addEventListener("mousemove", () => {
        if (togglePen) {
            cell.style.cssText = "background-color: black;";
        } else return;
    });
});