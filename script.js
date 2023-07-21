container = document.querySelector(".container");
let lineDiv = document.createElement("div");
let inlineDiv = document.createElement("div");
let btn = document.getElementById("button")
lineDiv.classList.add("line");
inlineDiv.classList.add("squre")

function creatGrid(num)
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
        
        let inlineDiv = document.createElement("div");
        inlineDiv.classList.add("squre");

        inlineDiv.addEventListener("mouseover",() => inlineDiv.classList.add("hover"));
        //inlineDiv.textContent = "a";
        lineDiv.appendChild(inlineDiv);
        console.log("inline")
    }    
}
}

//let grid_size = alert("Enter gride size");
creatGrid(16)

function setGriidSize ()
{

    let userInput = prompt("Enter the grid size");
    if(userInput>100)
    {
        alert("too high enter number lower then 100");
    }
    
    else 
    {
    creatGrid(userInput);
    container.removeChild(btn);
    }
}

btn.addEventListener("click",() => setGriidSize());

//let squre = document.querySelector(".squre");


