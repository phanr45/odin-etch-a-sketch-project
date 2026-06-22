const divContainer = document.querySelector("#container");
const generateButton = document.querySelector("#generateGrid");
const gridSize = document.querySelector("#gridSize");


//default grid
for (i = 1; i < 257; i++) {
    gridSize.textContent = "default grid size is 16x16"
    const div = document.createElement("div");
    div.classList.add("div")
    div.style.height = '50px'
    div.style.width = '50px'
    div.style.backgroundColor = "grey"
    divContainer.appendChild(div)
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black"
    })

}

//generate a grid with a prompt
generateButton.addEventListener("click", function () {
    divContainer.innerHTML = ""
    let userInput = prompt("please enter a grid size: ex. 16, 32, 64")
    if (userInput >=100) {
        gridSize.textContent = "grid size too large, will cause problem";
        gridSize.style.color = "red";
    } else {
    for (let i = 0; i < userInput * userInput; i++) {

        const div = document.createElement("div");
        const cellsize = 800 / userInput;
        div.classList.add("div")
        div.style.height = `${cellsize}px`
        div.style.width = `${cellsize}px`
        div.style.backgroundColor = "grey"
        gridSize.textContent = `grid size is now  ${userInput} x ${userInput}`
        divContainer.appendChild(div)

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black"
        })


    }

    }



})

