<template>
  <header class="header">
    <!-- =================================== -->
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper-container header-slider">
        <swiper-slide class="swiper-slide">
          <img src="../assets/header/1.png" alt />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="../assets/header/2.png" alt />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="../assets/header/3.png" alt />
        </swiper-slide>
    </swiper>
    <!-- =================================== -->
    <div class="container header-container">
      <div class="header-nav">
        <nav class="navigation">
          <div class="navigation-menu">
            <router-link to="/">
            <img class="navigation-logo" src="../assets/logo.png" alt="logo" />
            </router-link>
            <router-link to="/arctica" class="navigation-link">Об арктике
            </router-link>
            <a href="#" class="navigation-link">Инвестору</a>
            <a href="#" class="navigation-link">Проекты</a>
            <a href="#" class="navigation-link">Новости</a>
            <a href="#" class="navigation-link">Севморпуть</a>
            <a href="#" class="navigation-link">Туризм</a>
          </div>
          <button class="navigation-button" @click="showModal = true">Личный кабинет</button>
        </nav>
      </div>
      <div class="header-content">
        <span class="header-content__title content-title__arctic">Арктика</span>
        <br />
        <span class="header-content__title">это мощь</span>
        <p class="header-content__subtitle">Север бережёт свои богатства под слоем льда и снега</p>
      </div>
      <div class="header-modal" v-if="showModal" @close="showModal = false">
        <div class="modal-container">
          <h1 class="header-modal__title">
            Авторизация
          </h1>
          <p class="header-modal__text">
            Добрый день. <br>
            Данное модельно окно предназначено в качестве демонстрации и подтверждения
            работоспособности кнопки, а так же умения реализовать это с помощью JS или VueJs.
          </p>
          <form action="" class="form-authorization">
            <label for="email" class="form-label__email">Email:</label>
            <input type="email" class="form-authorization__input __email"
            placeholder="Введите свой email" name="email">
            <label for="password" class="form-label__password">Password:</label>
            <input type="text"
            class="form-authorization__input __password"
            placeholder="Введите пароль" name="password">
          </form>
          <span class="modal-close" @click='showModal = false'><i class="fas fa-times"></i></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import swiper from '../scripts/swiper-bundle.min.js';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showModal: false,
      swiperOptions: {
        spaceBetween: 0,
        speed: 3000,
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../style/_header.scss";
@import "../style/swiper-bundle.min.css";
@import "../style/modelWindow.scss";

body {
  font-family: "PT Sans";
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 95%;
}
</style>
