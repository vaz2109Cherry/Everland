/*_____________________________________________Слайдер___________________________________________________*/

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].className += " active";
}
/*_______________________________________________________________________________________________________*/

/*______________________________________Открытие аккордиона______________________________________________*/

const accordion = document.getElementsByClassName('accordions__item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('accordions__active')
  })
}
/*_______________________________________________________________________________________________________*/