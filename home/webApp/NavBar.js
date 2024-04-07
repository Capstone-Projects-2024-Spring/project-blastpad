document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.navbar .nav-item'); // Selects all navigation items within the navbar

  // Store the original sources in a map for easy reset
  const originalSrcMap = new Map(); // Creates a map to store original sources of nav items
  navItems.forEach(item => {
      originalSrcMap.set(item, item.getAttribute('src')); // Stores the original source of each nav item in the map
  });

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          // Reset all items to inactive state
          navItems.forEach(nav => {
              nav.classList.remove('active'); // Removes 'active' class from all nav items
              // Reset the source to the original non-active image
              nav.src = originalSrcMap.get(nav); // Restores the original source of each nav item
          });

          // Set the clicked item to the active state
          item.classList.add('active'); // Adds 'active' class to the clicked nav item
          const activeSrc = item.getAttribute('data-active-src'); // Retrieves the active source from data attribute
          item.src = activeSrc; // Sets the source of the clicked nav item to the active source
      });
  });

  // Function to update the clock
  function updateClock() {
      const now = new Date(); // Gets the current date and time
      const hours = String(now.getHours()).padStart(2, '0'); // Formats hours with leading zero
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Formats minutes with leading zero
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM'; // Determines AM or PM
      const twelveHourFormat = now.getHours() % 12 || 12; // Converts 24-hour format to 12-hour format
      const timeString = `${twelveHourFormat}:${minutes} ${ampm}`; // Constructs the time string
      document.getElementById('clock').textContent = timeString; // Updates the clock element with the current time
  }

  // Update the clock immediately to prevent delay
  updateClock();

  // Continue updating the clock every second
  setInterval(updateClock, 1000); // Calls updateClock function every second to update the clock
});
