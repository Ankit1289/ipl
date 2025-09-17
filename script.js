
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('header');

  menuToggle.addEventListener('click', () => {
    header.classList.toggle('active');

    // Toggle icon between ☰ and ✖
    if (header.classList.contains('active')) {
      menuToggle.textContent = "✖";
    } else {
      menuToggle.textContent = "☰";
    }
  });


  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  
  





