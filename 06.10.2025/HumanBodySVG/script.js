// Add an event listener to the SVG
document.querySelector('svg').addEventListener('click', function(event) {
  // Check if the clicked element is a path
  if (event.target.tagName === 'path') {
    // Get the name attribute of the path
    const pathName = event.target.getAttribute('name');
    
    // Open a link based on the name attribute
    if (pathName === 'brain') {
      window.open('https://en.wikipedia.org/wiki/Brain', '_blank'); // Opens in a new tab
    }
  }
});