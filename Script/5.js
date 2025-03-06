//Плавный скролл к разделу "Каталог кухонь" 
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.navigation p').addEventListener('click', () => {
    document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth' });
  });
});
