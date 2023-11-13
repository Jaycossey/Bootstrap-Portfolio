// Globals
const toggleButton = document.getElementById('toggleButton');
const dropdownList = document.getElementById('dropdownNav');

// Toggle class function
function toggleDropdown() {
    dropdownList.classList.toggle("collapse");
}

toggleButton.addEventListener('click', toggleDropdown);

// Add event listener to pointer,
// track clientX, clientY
// create transparent circle div, position should auto update and be on that mouse
// have the background for that div be a fixed position code image.

// Mousemove code image function 
const maskDiv = document.createElement('div');
maskDiv.id = "mask";
maskDiv.style.border = "2px solid red";
maskDiv.style.height = "200px";
maskDiv.style.height = "200px";

// "animate" div on mouse position
function divAnimate() {
    maskDiv.positionX = MouseEvent.clientX;
    maskDiv.positionY = MouseEvent.clientY;
    
}