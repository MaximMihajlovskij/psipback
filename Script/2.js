//Показать всплывающее окно при нажатии на кнопку "Заказать обратный звонок"
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.navigation button').addEventListener('click', () => {
    alert('Спасибо за ваш запрос! Мы скоро свяжемся с вами.');
  });
});
