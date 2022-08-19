/*_____________________________________________Слайдер___________________________________________________*/

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
document.querySelector('.button__slide_left').addEventListener('click', function plusSlide() {
  showSlides(slideIndex += 1);
});

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
document.querySelector('.button__slide_right').addEventListener('click', function minusSlide() {
  showSlides(slideIndex -= 1);
});

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slide');

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
    slides[i].className = slides[i].className.replace("active", "");
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



/*_____________________________________________Меню заголовка___________________________________________________*/
//Инициация функции переключения состояния элемента
function changeElementVisibility(container) {
  container.classList.toggle ('element_opened');
}

//"Вешаем" функцию переключения на кнопку меню и замену картинку на закрывающую при клике
const headerMenuContainer = document.querySelector('.header__menu');
const headerMenuImage = document.querySelector('.header__menu_buttom_image');

document.querySelector('.header__menu_button').addEventListener('click', function() {
  changeElementVisibility(headerMenuContainer);

if (headerMenuContainer.classList.contains('element_opened') === true) {
  headerMenuImage.src='./images/header-menu-close.svg';
} else {
  headerMenuImage.src='./images/header-menu-open.svg';
};
});

//"Вешаем" функцию переключения на кнопки скроллов категорий меню на 320px, а также замену картинок при клике
const headerList = document.querySelectorAll('.header__menu_group_list');
const headerMenuGroupButtons = document.querySelectorAll('.header__menu_group_title_button');
const headerMenuGroupButtonsImg = document.querySelectorAll('.header__menu_group_title_button_img');

for (let i = 0; i < headerList.length; i++) {
  headerMenuGroupButtons[i].addEventListener('click', function() {
    changeElementVisibility(headerList[i]);

    if (headerList[i].classList.contains('element_opened') === true) {
      headerMenuGroupButtonsImg[i].src='./images/header_menu_icon_shevron_opened.png';
    } else {
      headerMenuGroupButtonsImg[i].src='./images/header_menu_icon_shevron_closed.png';
    };
  });
}
/*_______________________________________________________________________________________________________*/
