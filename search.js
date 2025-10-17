document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.querySelector('.search-bar');
  
  if (searchBar) {
    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    searchBar.parentNode.appendChild(dropdown);
    
    // Dinosaur database
    const dinos = [
      { name: 'Dodo', url: 'dodo.html' },
      { name: 'Giganotosaurus', url: 'giga.html' },
      { name: 'Pteranodon', url: 'pteran.html' },
      { name: 'Rex', url: 'rex.html' }
    ];
    
    // Show dropdown when typing
    searchBar.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      dropdown.innerHTML = '';
      
      if (query === '') {
        dropdown.style.display = 'none';
        return;
      }
      
      // Filter dinosaurs based on search
      const matches = dinos.filter(dino => 
        dino.name.toLowerCase().includes(query)
      );
      
      if (matches.length > 0) {
        dropdown.style.display = 'block';
        matches.forEach(dino => {
          const item = document.createElement('div');
          item.className = 'dropdown-item';
          item.textContent = dino.name;
          item.addEventListener('click', function() {
            window.location.href = dino.url;
          });
          dropdown.appendChild(item);
        });
      } else {
        dropdown.style.display = 'none';
      }
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchBar.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
    
    // Show all options when clicking on search bar
    searchBar.addEventListener('focus', function() {
      if (this.value === '') {
        dropdown.innerHTML = '';
        dropdown.style.display = 'block';
        dinos.forEach(dino => {
          const item = document.createElement('div');
          item.className = 'dropdown-item';
          item.textContent = dino.name;
          item.addEventListener('click', function() {
            window.location.href = dino.url;
          });
          dropdown.appendChild(item);
        });
      }
    });
  }
});