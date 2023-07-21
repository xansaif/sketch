container = document.querySelector(".container");
let lineDiv = document.createElement("div");
let inlineDiv = document.createElement("div");
let btn = document.getElementById("button")
lineDiv.classList.add("line");
inlineDiv.classList.add("squre")

function creatGrid(num,color)
{
    container.innerHTML = "";
for (let i = 1; i<=num; i++)
{
    let lineDiv = document.createElement("div");
    lineDiv.classList.add("line");
    container.appendChild(lineDiv);
    console.log("line")
    for (let i=1;i<=num;i++)
    {   
        let userColor = color;
        let inlineDiv = document.createElement("div");
        inlineDiv.classList.add("squre");
        //inlineDiv.textContent = "a";
        inlineDiv.addEventListener("mouseover",() => inlineDiv.style.cssText = `background-color: ${userColor};`);
        lineDiv.appendChild(inlineDiv);
        console.log("inline")
    }    
}
}



//let grid_size = alert("Enter gride size");
creatGrid(16,"black")

function setGriidSize ()
{
    let userInput = prompt("Enter the grid size");
    if(userInput>100)
    {
        alert("too high enter number lower then 100");
    }
    
    else creatGrid(userInput,randomColor());
}

function randomColor ()
{
    colors = ["red","green","blue"]
    let userColor = colors[Math.floor(Math.random()*3)];
    return userColor;
}
btn.addEventListener("click",() => setGriidSize());

//let squre = document.querySelector(".squre");


