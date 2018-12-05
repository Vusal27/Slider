//// Слайдер
const sliderLists = document.querySelectorAll(".slider__list");
const sliderItemWidth = document.querySelector(".slider__item").clientWidth;
const sliderNexts = document.querySelectorAll(".slider__btn_next");
const sliderPrevs = document.querySelectorAll(".slider__btn_prev");
const step = sliderItemWidth;
const maxSteps = step*2

for (var sliderNext of sliderNexts) {
    sliderNext.addEventListener('click', function(e) {
        target = event.target.parentNode.parentNode;
        for (var sliderList of sliderLists) {
            var data = target.getAttribute("data");
            const computed = getComputedStyle(sliderList);
            if (sliderList === sliderLists[data]) {
                var currentLeft = parseInt(computed.left);
                if (!currentLeft) {
                    currentLeft = 0;
                }
                if (currentLeft > -maxSteps) {
                    sliderList.style.left = currentLeft - step + "px";
                }
            }
        }
    });
}
for (var sliderPrev of sliderPrevs) {
    sliderPrev.addEventListener('click', function(e) {
        target = event.target.parentNode.parentNode;
        for (var sliderList of sliderLists) {
            var data = target.getAttribute("data");
            const computed = getComputedStyle(sliderList);
            if (sliderList === sliderLists[data]) {
                var currentLeft = parseInt(computed.left);
                if (!currentLeft) {
                    currentLeft = 0;
                }
                if (currentLeft < 0) {
                    sliderList.style.left = currentLeft + step + "px";
                }
            }
        }
    });
}

// Обработка кнопок галереи
const galleryBtns = document.querySelectorAll('.gallery__btn');
const sliders = document.querySelectorAll('.slider__wrap');
const backgrounds = document.querySelectorAll('.bg__img');
const more = document.querySelector('.gallery__more');
const close = document.querySelector('.gallery__close');
const secondGallery = document.querySelector('.second');


for (var gallBtn of galleryBtns) {
    gallBtn.addEventListener('click', openSlider);
    gallBtn.addEventListener('click', slider);
}
function slider() {
    target = event.target;
    target.classList.add('add');
}
function openSlider() {
    target = event.target.parentNode;
    var data = target.getAttribute("data");
    for (var gallBtn of galleryBtns) {
        if (gallBtn !== target) {
            gallBtn.classList.remove('_active');
            for (var slider of sliders) {
                if (slider !== sliders[data]) {
                    slider.classList.remove('slider__wrap_active');
                }
            }
            for (var bg of backgrounds) {
                if (bg !== backgrounds[data]) {
                    bg.classList.remove('bg__img_active');
                }
            }
        } else {
            target.classList.add('_active');
            sliders[data].classList.add('slider__wrap_active');
            backgrounds[data].classList.add('bg__img_active');
        }
    }
}
more.addEventListener('click', toggleClass);
close.addEventListener('click', toggleClass);
function toggleClass() {
    more.classList.toggle('hidden');
    close.classList.toggle('hidden');
    secondGallery.classList.toggle('hidden');
}