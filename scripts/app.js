/*const btnsOpen = document.querySelectorAll('.course-btn-open');
const courseBlock = document.querySelectorAll('.course-block');


btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => alert(5))
});*/

const courseBtns = document.querySelectorAll('.course-btn-open');
const courseContentBlocks = document.querySelectorAll('.course-content-block');

courseBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    courseContentBlocks[index].classList.toggle('open');
    btn.textContent = courseContentBlocks[index].classList.contains('open') ? '-' : '+';
  });
});

// Открытие/закрытие бонуса
document.querySelector('.bonus-btn').addEventListener('click', (event) => {
    const bonusContent = document.querySelector('.bonus-content');
    if (bonusContent.style.display === 'none' || bonusContent.style.display === '') {
      bonusContent.style.display = 'flex';
      bonusContent.style.justifyContent = 'center';
      bonusContent.style.alignItems = 'center';
      bonusContent.style.flexDirection = 'column';
      event.target.textContent = 'Скрыть бонус';
    } else {
      bonusContent.style.display = 'none';
      event.target.textContent = 'Показать бонус';
    }
  });
  window.addEventListener('scroll', function() {
    const mainQuote = document.querySelector('.main-quote');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const triggerPosition = mainQuote.offsetTop - (window.innerHeight * 0.8); // Можете отрегулировать коэффициент 0.8 для изменения точки срабатывания

    if (scrollPosition > triggerPosition) {
      mainQuote.classList.add('visible');
    }
  });
