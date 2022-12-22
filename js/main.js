new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
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

const oneIcon = document.querySelector('.one-icons');
const oneGuideEl = document.querySelector('.one_guide');
const twoIcon = document.querySelector('.two-icons');
const twoGuideEl = document.querySelector('.two_guide');
const thrIcon = document.querySelector('.thr-icons');
const thrGuideEl = document.querySelector('.thr_guide');
const fouIcon = document.querySelector('.fou-icons');
const fouGuideEl = document.querySelector('.fou_guide');
const fivIcon = document.querySelector('.five-icons');
const fivGuideEl = document.querySelector('.fiv_guide');

oneIcon.addEventListener('click',function(){
oneGuideEl.classList.toggle('active');
});
twoIcon.addEventListener('click',function(){
  twoGuideEl.classList.toggle('active');
});
thrIcon.addEventListener('click',function(){
  thrGuideEl.classList.toggle('active');
});
fouIcon.addEventListener('click',function(){
  fouGuideEl.classList.toggle('active');
});
fivIcon.addEventListener('click',function(){
  fivGuideEl.classList.toggle('active');
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});