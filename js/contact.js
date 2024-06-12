
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








