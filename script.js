container = document.querySelector(".container");
let lineDiv = document.createElement("div");
let inlineDiv = document.createElement("div");

lineDiv.classList.add("line");
inlineDiv.classList.add("squre")

function creatGrid(num)
{
for (let i = 1; i<=num; i++)
{
    
    let lineDiv = document.createElement("div");
    lineDiv.classList.add("line");
    container.appendChild(lineDiv);
    console.log("line")
    for (let i=1;i<=num;i++)
    {   
        
        let inlineDiv = document.createElement("div");
        inlineDiv.classList.add("squre");
        inlineDiv.textContent = "a"
        lineDiv.appendChild(inlineDiv);
        console.log("inline")
    }    
}
}

//let grid_size = alert("Enter gride size");

creatGrid(16);

console.log("works")