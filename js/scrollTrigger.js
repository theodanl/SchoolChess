const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  const headerSection = document.querySelector('header');
  const headerOffset = headerSection.offsetTop;

  window.scrollTo({
    top: headerOffset,
    behavior: 'smooth'
  });
});