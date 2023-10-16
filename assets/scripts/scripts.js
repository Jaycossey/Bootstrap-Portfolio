// Globals
const toggleButton = document.getElementById('toggleButton');
const dropdownList = document.getElementById('dropdownNav');

// Toggle class function
function toggleDropdown() {
    dropdownList.classList.toggle("collapse");
}

toggleButton.addEventListener('click', toggleDropdown);