const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 600 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

createGrid(16);

resetBtn.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"));
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid size! Please enter a number between 1 and 100.");
    return;
  }
  createGrid(newSize);
});
