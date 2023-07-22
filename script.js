container = document.querySelector(".container");
let lineDiv = document.createElement("div");
let inlineDiv = document.createElement("div");
let SizeBtn = document.getElementById("buttonSize")
let rainbowBtn = document.getElementById("buttonRainbow")
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
    for (let i=1;i<=num;i++)
    {   
        let inlineDiv = document.createElement("div");
        inlineDiv.classList.add("squre");
        inlineDiv.addEventListener("mouseover",() => inlineDiv.style.cssText = `background-color: black;`);
        lineDiv.appendChild(inlineDiv);
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
        let userColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}); 
        let inlineDiv = document.createElement("div");
        inlineDiv.setAttribute(`id`,`squre${i}`);
        inlineDiv.addEventListener("mouseover",() => inlineDiv.style.cssText = `background-color: ${userColor};`);
        console.log(userColor);
        lineDiv.appendChild(inlineDiv);
        console.log("inline")
    }    
}
}


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

let userInput = 16;
creatGrid(userInput);

SizeBtn.addEventListener("click",() => 
{
    userInput = prompt("Enter the grid size");
    setGriidSize();
});

rainbowBtn.addEventListener("click",() => setRainbow());

let randomColor = 5
console.log(randomColor)

