
document.getElementById('burger-button').addEventListener('click', function () {
  const headerMenu = document.getElementById('header-menu');
  this.classList.toggle('active');
  headerMenu.classList.toggle('active');

  if (headerMenu.classList.contains('active')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});



function updateTextContent() {
  const element = document.querySelector('.text-card__text__big');
  const span = element.querySelector('span');

  if (window.matchMedia('(max-width: 990.98px)').matches) {
    // Если ширина экрана меньше 991px, изменяем содержимое
    element.innerHTML = 'WITH<br><span>STANDARD<br>BUD.</span>';
  } else {
    // Если ширина экрана больше 991px, восстанавливаем исходное содержимое
    element.innerHTML = 'WITH<br><span>STANDARDBUD.</span>';
  }
}

// Добавляем слушатель на изменение размера окна
window.addEventListener('resize', updateTextContent);

// Вызываем функцию для установки начального состояния
updateTextContent();






