//Показать всплывающее окно при нажатии на кнопку "Расчет стоимости кухни"
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('second').addEventListener('click', () => {
    alert('Запрос на расчет стоимости кухни отправлен!');
  });
});
