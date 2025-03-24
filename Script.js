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

for(let i = 0; i < 16 *16; i++){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');


}




//using javscript you have to make 6 grid layout on the html file 