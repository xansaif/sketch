container = document.querySelector(".container");
let lineDiv = document.createElement("div");
let inlineDiv = document.createElement("div");
let SizeBtn = document.getElementById("buttonSize")
let rainbowBtn = document.getElementById("buttonRainbow")
lineDiv.classList.add("line");
inlineDiv.classList.add("squre")

inlineDivCss = `border-style:solid;
                border-width: 0.2px;
                flex-shrink: 1;
                flex-basis: 100%;`

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
        //inlineDiv.textContent = "a";
        inlineDiv.addEventListener("mouseover",() => inlineDiv.style.cssText = `background-color: black;`);
        lineDiv.appendChild(inlineDiv);
        console.log("inline")
    }    
}
}

function creatGridRgb(num)
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
        colors = ["red","green","blue"];

        let userColor = colors[Math.floor(Math.random()*3)];
        let inlineDiv = document.createElement("div");
        inlineDiv.setAttribute(`id`,`squre${i}`);
        //inlineDiv.textContent = "a";
        inlineDiv.style.cssText = inlineDivCss;
        inlineDiv.addEventListener("mouseover",() => inlineDiv.style.cssText = `background-color: ${userColor};`);
        console.log(userColor);
        lineDiv.appendChild(inlineDiv);
        console.log("inline")
    }    
}
}
//let grid_size = alert("Enter gride size");
let userInput = 16
creatGrid(userInput)

function setRainbow ()
{

    if(userInput>100)
    {
        alert("too high enter number lower then 100");
    }
    
    else creatGridRgb(userInput);
}

function setGriidSize ()
{
    
    if(userInput>100)
    {
        alert("too high enter number lower then 100");
    }
    
    else creatGrid(userInput);
}


SizeBtn.addEventListener("click",() => 

    {
        userInput = prompt("Enter the grid size");
        setGriidSize();
    });

rainbowBtn.addEventListener("click",() => setRainbow());



