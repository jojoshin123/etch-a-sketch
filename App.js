const container = document.querySelector(".container");

// Populate gridNum * gridNum grid
let gridNum = 32
for (let i = 0; i < gridNum * gridNum; i++) {
    const div = document.createElement('div');
    div.style.cssText = "background-color: rgb(230, 230, 230);";
    div.classList.add("cell");
    container.appendChild(div);
}


const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("mousemove", () => {
        cell.style.cssText = "background-color: black;";
        console.log("poopman");
    });
});