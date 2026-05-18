// Set copyright year automatically
if (document.getElementById('yr')) {
  document.getElementById('yr').textContent = new Date().getFullYear();
}

// Mobile nav toggle
function toggleNav() {
  document.getElementById('navbar').classList.toggle('open');
}

function toggleSection(button) {
  const chevron = button.querySelector('.toggle-chevron');
  const content = button.nextElementSibling;
  const isOpen = content.style.display !== 'none';
  content.style.display = isOpen ? 'none' : 'block';
  chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
}

// Close mobile nav when a standard page link is clicked
document.querySelectorAll('#navLinks a').forEach(function (a) {
  a.addEventListener('click', function () {
    if (a.classList.contains('dropdown-toggle')) return;
    document.getElementById('navbar').classList.remove('open');
  });
});

/* ── Theme Implementation (Dark Default) ── */
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.getElementById('navLinks');
  
  if (navLinks && !document.getElementById('theme-toggle')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'theme-toggle';
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle theme');
    toggleBtn.setAttribute('title', 'Toggle light/dark mode');
    
    // Minimalist SVG Moon Icon
    toggleBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    navLinks.parentNode.appendChild(toggleBtn);

    // Toggle click binding
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // Read and apply persistent storage choice (Only apply if explicitly set to light)
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
});