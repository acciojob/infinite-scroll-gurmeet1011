// Get the ordered list (ol) element
const list = document.getElementById('infi-list');

// Function to add list items
function addListItems(numItems) {
    const currentItemCount = list.children.length; // Get the current count of list items
    for (let i = 1; i <= numItems; i++) {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = `Item ${currentItemCount + i}`; // Set the text content correctly using template literals
        list.appendChild(li); // Append the new item to the list
    }
}

// Initially add 10 list items
addListItems(10);

// Using a flag to prevent multiple additions during rapid scrolling
let isLoading = false;

// Function to detect when the user has scrolled to the bottom
function checkScroll() {
    const scrollableHeight = document.documentElement.scrollHeight; // Total height of the document
    const scrolledFromTop = window.innerHeight + window.scrollY; // Current scroll position

    // When the user reaches the bottom of the page, add more list items
    if (scrolledFromTop >= scrollableHeight - 1) {
        if (!isLoading) { // Check if we are already loading
            isLoading = true; // Set loading flag to true
            addListItems(2); // Add 2 more list items
            isLoading = false; // Reset loading flag
        }
    }
}

// Listen for scroll events and call the checkScroll function
window.addEventListener('scroll', () => {
    requestAnimationFrame(checkScroll); // Use requestAnimationFrame for smoother performance
});



