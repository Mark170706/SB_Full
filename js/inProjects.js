
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









// Scroll animation
const scrollContainer = document.getElementById("scrollContainer");
let isScrolling = false;

scrollContainer.addEventListener("wheel", function (e) {
  e.preventDefault(); // Prevent default scrolling behavior

  if (isScrolling) {
    return; // Ignore if scrolling is already in process
  }

  const scrollDistance = 630; // Scroll distance in pixels

  isScrolling = true;

  let startScrollLeft = scrollContainer.scrollLeft;
  let endScrollLeft = startScrollLeft + scrollDistance * Math.sign(e.deltaY); // Consider scroll direction
  let startTime = null;

  const scrollAnimation = (timestamp) => {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTime;
    const duration = 500; // Animation duration in milliseconds

    const progress = Math.min(elapsedTime / duration, 1);

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const newScrollLeft = startScrollLeft + (endScrollLeft - startScrollLeft) * easeInOutQuad(progress);

    scrollContainer.scrollLeft = newScrollLeft;

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    } else {
      isScrolling = false; // Scrolling completed
    }
  };

  requestAnimationFrame(scrollAnimation);
});
