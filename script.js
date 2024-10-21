// Get the ordered list (ol) element
const list = document.getElementById('infi-list');

// Function to add list items
function addListItems(numItems) {
  const currentItemCount = list.children.length;
  for (let i = 1; i <= numItems; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${currentItemCount + i}`;
    list.appendChild(li);
  }
}

// Initially add 10 list items
addListItems(10);

// Function to detect when the user has scrolled to the bottom
function checkScroll() {
  const scrollableHeight = document.documentElement.scrollHeight;
  const scrolledFromTop = window.innerHeight + window.scrollY;

  // When user reaches the bottom of the page, add more list items
  if (scrolledFromTop >= scrollableHeight - 1) {
    addListItems(2); // Add 2 more list items
  }
}

// Using a flag to prevent multiple additions
let isLoading = false;

// Listen for scroll events and call the checkScroll function
window.addEventListener('scroll', () => {
  if (!isLoading) {
    isLoading = true;
    requestAnimationFrame(() => {
      checkScroll();
      isLoading = false;
    });
  }
});




