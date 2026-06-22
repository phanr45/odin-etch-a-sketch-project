const divContainer = document.querySelector("#container");
const generateButton = document.querySelector("#generateGrid");
const gridSize = document.querySelector("#gridSize");






generateButton.addEventListener("click",function () {
    divContainer.innerHTML=""
    let userInput = prompt("please enter a grid size")
        for (let i = 0; i< userInput * userInput ;i++) {
        const div = document.createElement("div");
        const cellsize = 800 / userInput;
        div.classList.add("div")
        div.style.height = `${cellsize}px`
        div.style.width = `${cellsize}px`
        div.style.backgroundColor = "red"
        gridSize.textContent = `grid size: ${userInput} x ${userInput}`
        divContainer.appendChild(div)
        
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black"
    })
    }

})

