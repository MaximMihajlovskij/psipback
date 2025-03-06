//Смена изображения при наведении на логотип
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo img');
  const originalSrc = logo.src;

  logo.addEventListener('mouseover', () => {
    logo.src = '../Image/АВТОРСКИЕ.svg';
  });

  logo.addEventListener('mouseout', () => {
    logo.src = originalSrc;
  });
});
