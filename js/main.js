// Set copyright year automatically
document.getElementById('yr').textContent = new Date().getFullYear();

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

// Close mobile nav when any link is clicked
document.querySelectorAll('#navLinks a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navbar').classList.remove('open');
  });
});

// Ctrl+K / Cmd+K search shortcut hint
document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    alert('Search not implemented — add your own search integration here!');
  }
});
