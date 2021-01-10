const container = document.querySelector(".container");

console.log(container);

// Populate 32x32 grid
for (let i = 0; i < 1024; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 2px solid black;";
    container.appendChild(div);
}