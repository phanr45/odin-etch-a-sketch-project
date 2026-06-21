const divContainer = document.querySelector("#container");

for (i = 0; i<256;i++) {
    const div = document.createElement("div");
    div.classList.add("div")
    divContainer.appendChild(div)
    
    div.addEventListener("mouseenter", (e) => {
        div.style.backgroundColor = "red"
    })



}

