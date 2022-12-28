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

const iconsEls = document.querySelectorAll('.icons-group');
const guideEls = document.querySelectorAll('.guide-group');

iconsEls.forEach(function(iconsEl, clickIndex){
    iconsEl.addEventListener('click',function(){
        guideEls.forEach(function(guideEl, index){
            if(clickIndex !== index){
                guideEl.classList.remove('active');
            }
        });
        iconsEl.nextElementSibling.classList.toggle('active');
    });
});

const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({triggerElement: spyEl, triggerHook: 0.8})
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});