//Валидация телефонного номера в форме
document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.querySelector('.btnn input[type="tel"]');
  const submitButton = document.querySelector('.btnn button');

  submitButton.addEventListener('click', () => {
    const phoneNumber = phoneInput.value;
    const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

    if (!phonePattern.test(phoneNumber)) {
      alert('Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX');
    } else {
      alert('Номер телефона корректен!');
    }
  });
});
