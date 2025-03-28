const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//exercise from DOM manipulation
//makes red text in the <p>


const paragraph = document.createElement("p");
paragraph.textContent="Hey Im red";
paragraph.style.color = "red";
container.appendChild(paragraph);


//create a 16x16 div grid
//make a for loop to constantly make a grid up to 16x16
const gridContainer = document.getElementById('grid-container');

for(let i = 0; i < 256; i++){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');


    //create an eventlistener to add a hover effect
gridDiv.addEventListener("mouseover",() =>{
    gridDiv.style.backgroundColor = "green";
});
    gridContainer.appendChild(gridDiv);
}


//create a function called size that will change 
//eventlistener for the reset button

const resetButton = document.getElementById('changeSize');

resetButton.addEventListener("click",()=>{
    let changeGrid = confirm('Would you like to change the grid size');
    if(changeGrid === true){
        let changeGrid = prompt('what size would you like the grid to be ex: 16.')
        //place a function her//if user presesses change grid e 
    
    }
});
//limit the grid max to be 100x100 or 960px wide
//use changeGrid to change as its being used and it will go based off what was put in







