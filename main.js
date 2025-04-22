const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const emoji = document.getElementById('themeEmoji');     

// Load saved mode on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggle.checked = true;
  emoji.textContent = '🌙';
}

// Toggle switch logic
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    emoji.textContent = '🌙';
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    emoji.textContent = '🌞';
  }
});
