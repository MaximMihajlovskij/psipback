document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', function() {
      menu.classList.toggle('open');
  });

  // Закрыть меню при клике вне его
  document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && !burger.contains(event.target)) {
          menu.classList.remove('open');
      }
  });
});
