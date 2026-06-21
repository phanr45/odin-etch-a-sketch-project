const divContainer = document.querySelector("#container");
const generateButton = document.querySelector("#generateGrid");



for (i = 0; i<256;i++) {
    const div = document.createElement("div");
    div.classList.add("div")
    div.style.height = '50px'
    div.style.width = '50px'
    div.style.border = '1px solid black'
    divContainer.appendChild(div)
    
    div.addEventListener("mouseenter", (e) => {
        div.style.backgroundColor = "red"
    })

    



}



generateButton.addEventListener("click",function () {
    let userInput = prompt("please enter a grid size")
    for (i = 0; i< userInput ;i++) {
    const div = document.createElement("div");
    div.classList.add("div")
    div.style.height = '50px'
    div.style.width = '50px'
    div.style.border = '1px solid black'
    divContainer.appendChild(div)
    
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "red"
    })
    }

})

