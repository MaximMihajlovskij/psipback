//Изменение цвета текста при вводе в поле "Имя"
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('.btnn input[type="text"]');

  nameInput.addEventListener('input', () => {
    nameInput.style.color = 'blue';
  });
});
