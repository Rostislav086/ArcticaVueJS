import { swiper } from './swiper-bundle';

swiper();

const mySwiper = new Swiper('.swiper-container', {
  speed: 1900,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

const projectSwiper = new Swiper('.project-swiper__container', {
  containerModifierClass: 'project-swiper__container',
  slideClass: 'project-slide',
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-project-next',
    prevEl: '.swiper-project-prev',
    clickable: true,
  },
});
