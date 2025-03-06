//Переключение видимости скрытого текста
document.addEventListener('DOMContentLoaded', () => {
  const hiddenText = document.getElementById('hidden');
  hiddenText.style.display = 'none';

  document.querySelector('.visit_left button').addEventListener('click', () => {
    hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
  });
});
