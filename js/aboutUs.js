

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










document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      cards.forEach(c => c.classList.remove('open')); // Close all cards
      card.classList.add('open'); // Open current card
    });
  });
});






const scrollContainer = document.getElementById("scrollContainer");
let isScrolling = false;

scrollContainer.addEventListener("wheel", function (e) {
  e.preventDefault(); // Предотвращаем стандартное поведение скроллинга

  if (isScrolling) {
    return; // Если скролл уже в процессе, игнорируем
  }

  const scrollDistance = 630; // Расстояние прокрутки в пикселях

  isScrolling = true;

  let startScrollLeft = scrollContainer.scrollLeft;
  let endScrollLeft = startScrollLeft + scrollDistance * Math.sign(e.deltaY); // Учитываем направление скролла
  let startTime = null;

  const scrollAnimation = (timestamp) => {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTime;
    const duration = 500; // Длительность анимации в миллисекундах

    const progress = Math.min(elapsedTime / duration, 1);

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const newScrollLeft = startScrollLeft + (endScrollLeft - startScrollLeft) * easeInOutQuad(progress);

    scrollContainer.scrollLeft = newScrollLeft;

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    } else {
      isScrolling = false; // Скролл завершен
    }
  };

  requestAnimationFrame(scrollAnimation);
});
