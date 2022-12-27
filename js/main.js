new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true
});

const headerEl = document.querySelector('header');
const mainMenuEl = document.querySelector('.main-menu');
const subMenuEls = document.querySelectorAll('.item__contents');

mainMenuEl.addEventListener('mouseover', function () {
    headerEl.style.height = '380px';

    subMenuEls.forEach(function (subMenuEl) {
        subMenuEl.style.opacity = '1';
        subMenuEl.style.visibility = 'visible';
    });
});

headerEl.addEventListener('mouseleave', function () {
    headerEl.style.height = '150px';

    subMenuEls.forEach(function (subMenuEl) {
        subMenuEl.style.opacity = '0';
        subMenuEl.style.visibility = 'hidden';
    });
});

const iconsEls = document.querySelectorAll('.icons-group');
const guideEls = document.querySelectorAll('.guide-group');

// 반복되게 만들기
iconsEls.forEach(function(iconsEl){
iconsEl.addEventListener('click',function(){
    guideEls.forEach(function(guideEl){
        guideEl.classList.remove('active');
    });
    iconsEl.nextElementSibling.classList.add('active');
    iconsEl.addEventListener('click',function(){
        guideEls.forEach(function(guideEl){
            guideEl.classList.remove('hide');
        });
        iconsEl.nextElementSibling.classList.add('hide');
    });
});
});

const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({triggerElement: spyEl, triggerHook: 0.8})
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});