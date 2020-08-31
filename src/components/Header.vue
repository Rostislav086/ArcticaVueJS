<template>
  <header class="header">
    <!-- =================================== -->
    <div class="swiper-container header-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/header/1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="/img/header/2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="/img/header/3.png" alt />
        </div>
      </div>
    </div>
    <!-- =================================== -->
    <div class="container header-container">
      <div class="header-nav">
        <nav class="navigation">
          <div class="navigation-menu">
            <img class="navigation-logo" src="../assets/logo.png" alt="logo" />
            <router-link to="/arctica" class="navigation-link">Об арктике
            </router-link>
            <a href="#" class="navigation-link">Инвестору</a>
            <a href="#" class="navigation-link">Проекты</a>
            <a href="#" class="navigation-link">Новости</a>
            <a href="#" class="navigation-link">Севморпуть</a>
            <a href="#" class="navigation-link">Туризм</a>
          </div>
          <button class="navigation-button">Личный кабинет</button>
        </nav>
      </div>
      <div class="header-content">
        <span class="header-content__title content-title__arctic">Арктика</span>
        <br />
        <span class="header-content__title">это мощь</span>
        <p class="header-content__subtitle">Север бережёт свои богатства под слоем льда и снега</p>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
@import "../style/_header.scss";
@import "../style/swiper-bundle.min.css";

body {
  font-family: "PT Sans";
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 95%;
}
</style>
