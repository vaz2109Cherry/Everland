/*_____________________________________________Слайдер___________________________________________________*/
//about
const aboutSlideTemplate = document.querySelector("#aboutSlideTemplate");
const btnAboutForward = document.querySelector("#aboutForward");
const btnAboutBackward = document.querySelector("#aboutBackward");
const counterAbout = document.querySelector("#counterAbout");
const aboutSlidesContainer = document.querySelector(".about");
let slideIndex = 0;
const aboutSlidesInformation = [
  {
    "header": `<span class="about__header-accent">Everland</span>&nbsp;—&nbsp;социальный
          предпринимательский проект`,
    "paragraph": `Мы работаем с 2016 года по России и СНГ и помогаем людям с инвалидностью устойчиво
            интегрироваться в открытый рынок труда`,
    "image": {
      "link": `images/carousel-man.png`,
      "alt": `Люди в Everland`
    }
  },
  {
    "header": `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    "paragraph": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at deserunt, dignissimos distinctio exercitationem expedita harum ipsum laborum libero minus nam, perspiciatis quaerat quam quidem repellat saepe sint voluptas voluptate.`,
    "image": {
      "link": `images/carousel-man.png`,
      "alt": `Люди в Everland`
    }
  },
]

//special
const specialSlideTemplate = document.querySelector("#specialSlideTemplate");
const btnSpecialForward = document.querySelector("#specialForward");
const btnSpecialBackward = document.querySelector("#specialBackward");
const specialSlidesContainer = document.querySelector("#special");
const specialSlidesInformation = [
  {
    "header": "Фотопроект «Семья как семья»",
    "paragraph": "Фотопроект Алексея Горшенина включает в себя восемь историй людей и семей, где один или оба супруга имеют инвалидность",
    "image": {
      "link": "./images/special-img.jpg",
      "alt": "Фотопроект «Семья как семья»"
    },
    "backgroundColor": "#E7F0FF"
  },
  {
    "header": "Фотопроект «Семья как семья»",
    "paragraph": "Фотопроект Алексея Горшенина включает в себя восемь историй людей и семей, где один или оба супруга имеют инвалидность",
    "image": {
      "link": "./images/special-img.jpg",
      "alt": "Фотопроект «Семья как семья»"
    },
    "backgroundColor": "#FEEFEA"
  },
  {
    "header": "Фотопроект «Семья как семья»",
    "paragraph": "Фотопроект Алексея Горшенина включает в себя восемь историй людей и семей, где один или оба супруга имеют инвалидность",
    "image": {
      "link": "./images/special-img.jpg",
      "alt": "Фотопроект «Семья как семья»"
    },
    "backgroundColor": "#DAEFD5"
  },
  {
    "header": "Фотопроект «Семья как семья»",
    "paragraph": "Фотопроект Алексея Горшенина включает в себя восемь историй людей и семей, где один или оба супруга имеют инвалидность",
    "image": {
      "link": "./images/special-img.jpg",
      "alt": "Фотопроект «Семья как семья»"
    },
    "backgroundColor": "#EAE6FF"
  },

]

/**
 * Возвращает список слайдов, построенных по объекту, данному на входе для about.
 * Генератор сделан на блок отдельно, т.к. разная структура.
 * @param template - шаблон, по которому строить слайд.
 * @param slideInfo - информация, которая должна быть размещена на слайде
 */
function getAboutSlides(template, slideInfo) {
  let temp = template.content.firstElementChild.cloneNode(true);
  temp.querySelector(".about__header").innerHTML = slideInfo.header;
  temp.querySelector(".about__paragraph").innerHTML = slideInfo.paragraph;
  temp.querySelector(".about__slide-image").link = slideInfo.image.link;
  temp.querySelector(".about__slide-image").alt = slideInfo.image.alt;

  return temp;
}

/**
 * Для счетчика в блоке about добавляет отображение количества слайдов и его номера.
 * @param counter - счетчик, отображающий текущий показанный слайд.
 * @param element - элемент, куда вставляем отображение.
 */
function setAboutCounter (counter, element){
  element.innerHTML = `${slideIndex} / ${aboutSlidesInformation.length}`
}

/**
 * Возвращает список слайдов, построенных по объекту, данному на входе для special.
 * Генератор сделан на блок отдельно, т.к. разная структура.
 * @param template - шаблон, по которому строить слайд.
 * @param slideInfo - информация, которая должна быть размещена на слайде
 */
function getSpecialSlides(template, slideInfo) {
  let temp = template.content.firstElementChild.cloneNode(true);
  temp.querySelector("h2").content = slideInfo.header;
  temp.querySelector(".special__text").content = slideInfo.paragraph;
  temp.querySelector(".special__img").src = slideInfo.image.link;
  temp.querySelector(".special__img").alt = slideInfo.image.alt;
  temp.querySelector(".special__container").style.backgroundColor = slideInfo.backgroundColor;

  return temp;
}

/**
 * Функция помещает сгенерированные по шаблону слайды в указанный контейнер.
 * @param slidesInformation - объект, содержащий информацию, которую надо разместить на слайдах.
 * @param slidesContainer - контейнер, в котором будут находиться слайды.
 * @param templateFunction - функция, которая генерирует по шаблону слайды.
 * @param template - шаблон для генерации слайда.
 */
function setSlidesIntoContainer(slidesInformation, slidesContainer, templateFunction, template) {
  //Помещаем элементы в контейнер
  slidesInformation.forEach(slide => {
    slidesContainer.prepend(templateFunction(template, slide))
  })
}

/**
 * Функция выполняет отрисовку показываемого слайда и скрывает неактивные слайды.
 * @param counter - счетчик, отображающий активный слайд.
 * @param classOfSlides - класс, по которому выбираем для список слайдов.
 * @param slidesContainer - контейнер, в который список слайдов должен быть помещен.
 */
function showSlide(counter, classOfSlides, slidesContainer) {
  const slides = document.querySelectorAll(classOfSlides);

  if (counter > slides.length) {
    slideIndex = 1
  }

  if (counter < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";

}

/**
 * Фукнкция, которая запускает слайдер на нужном элементе.
 * @param aboutSlidesInformation - объект с информацией, которую нужно добавить на слайды.
 * @param btnForward - кнопка для перемотки слайдов назад.
 * @param btnBackward - кнопка для перемотки слайдов вперед.
 * @param slidesContainer - контейнер, где должны находиться слайды.
 * @param templateFunction - функция, которая отрисовывает по нужному шаблону слайд.
 * @param template - шаблон, для слайда.
 * @param sliderId - класс или ID слайда, для его поиска в функции.
 */
function startCarousel(aboutSlidesInformation, btnForward, btnBackward, slidesContainer, templateFunction, template, sliderId) {
  setSlidesIntoContainer(aboutSlidesInformation, slidesContainer, templateFunction, template)

  showSlide(slideIndex, sliderId, slidesContainer);
  setAboutCounter(slideIndex ,counterAbout);

  btnForward.addEventListener("click", () => {
    showSlide(slideIndex += 1, sliderId, slidesContainer);
    setAboutCounter(slideIndex ,counterAbout);
  })

  btnBackward.addEventListener("click", () => {
    showSlide(slideIndex -= 1, sliderId, slidesContainer);
    setAboutCounter(slideIndex ,counterAbout);

  })

}

//about
startCarousel(aboutSlidesInformation, btnAboutForward, btnAboutBackward, aboutSlidesContainer, getAboutSlides, aboutSlideTemplate, ".about__slide");

//special
startCarousel(specialSlidesInformation, btnSpecialForward, btnSpecialBackward, specialSlidesContainer, getSpecialSlides, specialSlideTemplate, ".slide");


/*_______________________________________________________________________________________________________*/

/*______________________________________Открытие аккордиона______________________________________________*/

const accordion = document.getElementsByClassName('accordions__item');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('accordions__active')
  })
}
/*_______________________________________________________________________________________________________*/


/*_____________________________________________Меню заголовка___________________________________________________*/

//Инициация функции переключения состояния элемента
function changeElementVisibility(container) {
  container.classList.toggle('element_opened');
}

//"Вешаем" функцию переключения на кнопку меню и замену картинку на закрывающую при клике
const headerMenuContainer = document.querySelector('.header__menu');
const headerMenuImage = document.querySelector('.header__menu_buttom_image');

document.querySelector('.header__menu_button').addEventListener('click', function () {
  changeElementVisibility(headerMenuContainer);

  if (headerMenuContainer.classList.contains('element_opened') === true) {
    headerMenuImage.src = './images/header-menu-close.svg';
  } else {
    headerMenuImage.src = './images/header-menu-open.svg';
  }
  ;
});

//"Вешаем" функцию переключения на кнопки скроллов категорий меню на 320px, а также замену картинок при клике
const headerList = document.querySelectorAll('.header__menu_group_list');
const headerMenuGroupButtons = document.querySelectorAll('.header__menu_group_title_button');
const headerMenuGroupButtonsImg = document.querySelectorAll('.header__menu_group_title_button_img');

for (let i = 0; i < headerList.length; i++) {
  headerMenuGroupButtons[i].addEventListener('click', function () {
    changeElementVisibility(headerList[i]);

    if (headerList[i].classList.contains('element_opened') === true) {
      headerMenuGroupButtonsImg[i].src = './images/header_menu_icon_shevron_opened.png';
    } else {
      headerMenuGroupButtonsImg[i].src = './images/header_menu_icon_shevron_closed.png';
    }
    ;
  });
}
/*_______________________________________________________________________________________________________*/

//При нажатии на кнопку Поддержать в секции donation-buttons - выбор кнопки с таким же размером пожертвования в секции donation
const formDonationButtons = document.forms['donation_buttons_form'];
const buttonDonation = document.querySelector('.donation-buttons__button-send');
const formDonation = document.forms['donation-form'];
const radioDonationSize = formDonation.elements['pay-sum'];
buttonDonation.addEventListener('click', (event) => {
  formDonationButtons.donation_size.forEach((radio, index) => {
    if (radio.checked) {
      radioDonationSize[index].checked = true;
    }
  })
});

/*_______________________________________________________________________________________________________*/

function showInputForOtherPaySum(){
  const checkedOtherPaySum = document.querySelector("#donat_other");
  const inputOtherSum = document.querySelector("#payothersum");

  if (checkedOtherPaySum.checked) {
    inputOtherSum.style.display = "inline-block";
  } else {
    inputOtherSum.style.display = "none";
  }
}

const form = document.querySelector(".donation-form");
form.addEventListener("change", showInputForOtherPaySum)

showInputForOtherPaySum();
