document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('myButton');

  // Проверяем ширину экрана перед запуском анимации
  if (window.innerWidth <= 575.98) {
    // Показываем кнопку
    button.style.display = 'block';
  } else {
    const fillText = document.querySelector(".textContainer");
    const content = document.getElementById('content');
    const header = document.getElementById('header');
    const sections = [
      document.getElementById('ourmission'),
      document.getElementById('services'),
      document.getElementById('comingsoon'),
      document.getElementById('building'),
      document.getElementById('achievements'),
      document.getElementById('projects'),
      document.getElementById('key'),
      document.getElementById('faqs')
    ];
    const footer = document.getElementById('footer');

    // Скрываем header, секции и футер при загрузке страницы
    header.classList.add('hidden');
    sections.forEach(section => section.classList.add('hidden'));
    footer.classList.add('hidden');

    // Блокируем прокрутку страницы
    document.body.classList.add('no-scroll');

    // Запускаем анимацию смены цвета при загрузке страницы
    gsap.to(fillText, {
      backgroundPosition: "100% 100%", // Анимация снизу вверх
      color: "#F8F8F8",
      duration: 1.6,
      ease: "none",
      onComplete: function () {
        // Добавляем класс "active" для последующих анимаций
        fillText.classList.add("active");

        // Показываем контент, header, секции и футер после 1 секунды
        setTimeout(function () {
          content.classList.add('visible');
          header.classList.remove('hidden');
          header.classList.add('visible');
          sections.forEach(section => {
            section.classList.remove('hidden');
            section.classList.add('visible');
          });
          footer.classList.remove('hidden');
          footer.classList.add('visible');

          // Разблокируем прокрутку страницы
          document.body.classList.remove('no-scroll');
        }, 1000);
      }
    });
  }
});









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

// Modal 1
const showBtn1 = document.querySelector(".show-modal1");
const maskModal1 = document.querySelector(".mask-modal1");
const modal1 = document.querySelector(".modal1");
const closeBtn1 = document.querySelector(".close-modal1");

showBtn1.addEventListener("click", () => {
  document.body.classList.add("modal-open");

  maskModal1.classList.add("active1");
  modal1.classList.add("modal-active1");
});
closeBtn1.addEventListener("click", closeModal1);
maskModal1.addEventListener("click", closeModal1);

function closeModal1() {
  maskModal1.classList.remove("active1");
  modal1.classList.remove("modal-active1");

  document.body.classList.remove("modal-open");
}


// Modal 2
const showBtn2 = document.querySelector(".show-modal2");
const maskModal2 = document.querySelector(".mask-modal2");
const modal2 = document.querySelector(".modal2");
const closeBtn2 = document.querySelector(".close-modal2");

showBtn2.addEventListener("click", () => {
  document.body.classList.add("modal-open");

  maskModal2.classList.add("active2");
  modal2.classList.add("modal-active2");
});
closeBtn2.addEventListener("click", closeModal2);
maskModal2.addEventListener("click", closeModal2);

function closeModal2() {
  maskModal2.classList.remove("active2");
  modal2.classList.remove("modal-active2");

  document.body.classList.remove("modal-open");
}

// Modal 3
const showBtn3 = document.querySelector(".show-modal3");
const maskModal3 = document.querySelector(".mask-modal3");
const modal3 = document.querySelector(".modal3");
const closeBtn3 = document.querySelector(".close-modal3");

showBtn3.addEventListener("click", () => {
  document.body.classList.add("modal-open");

  maskModal3.classList.add("active3");
  modal3.classList.add("modal-active3");
});
closeBtn3.addEventListener("click", closeModal3);
maskModal3.addEventListener("click", closeModal3);

function closeModal3() {
  maskModal3.classList.remove("active3");
  modal3.classList.remove("modal-active3");

  document.body.classList.remove("modal-open");
}

// Modal 4
const showBtn4 = document.querySelector(".show-modal4");
const maskModal4 = document.querySelector(".mask-modal4");
const modal4 = document.querySelector(".modal4");
const closeBtn4 = document.querySelector(".close-modal4");

showBtn4.addEventListener("click", () => {
  document.body.classList.add("modal-open");

  maskModal4.classList.add("active4");
  modal4.classList.add("modal-active4");
});
closeBtn4.addEventListener("click", closeModal4);
maskModal4.addEventListener("click", closeModal4);

function closeModal4() {
  maskModal4.classList.remove("active4");
  modal4.classList.remove("modal-active4");

  document.body.classList.remove("modal-open");
}

// Keyup event listener for closing modals
document.addEventListener("keyup", (e) => {
  if (e.keyCode == 27) { // Escape key
    closeModal1();
    closeModal2();
    closeModal3();
    closeModal4();
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

// Accordion toggle
function toggleAccordion(clickedAccordion) {
  const accordions = document.querySelectorAll(".accordion");
  const isOpen = clickedAccordion.classList.contains("open");

  // Close all accordions except the current one
  accordions.forEach(accordion => {
    if (accordion !== clickedAccordion) {
      accordion.classList.remove("open");
    }
  });

  // Toggle the current accordion's state
  if (isOpen) {
    clickedAccordion.classList.remove("open");
  } else {
    clickedAccordion.classList.add("open");
  }
}




































































