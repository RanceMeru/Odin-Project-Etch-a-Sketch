const container = document.querySelector("#container");
const gridContainer = document.getElementById('grid-container');


// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);



// //exercise from DOM manipulation
// //makes red text in the <p>
// const paragraph = document.createElement("p");
// paragraph.textContent="Hey Im red";
// paragraph.style.color = "red";
// container.appendChild(paragraph);



function populateBoard(size = 16){

    //this will clear the html code 
    gridContainer.innerHTML = '';

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //create a 16x16 div grid
//make a for loop to constantly make a grid up to 16x16

//make the 256 a variable so it can be changed
for(let i = 0; i < size * size; i++){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');


    //create an eventlistener to add a hover effect
gridDiv.addEventListener("mouseover",() =>{
    gridDiv.style.backgroundColor = "green";
});
    gridContainer.appendChild(gridDiv);
}

}


populateBoard();

// Change grid size function
function changeGridSize() {
    const resetButton = document.getElementById('changeGridSize');
    
    resetButton.addEventListener("click", () => {
        let newSize = prompt('Enter the number of squares per side (max 100):');
        
        // Validate input
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
            alert('Please enter a valid number between 1 and 100');
            return;
        }
        
        populateBoard(newSize);
    });
}

// Call the grid changer function
changeGridSize();

    
















