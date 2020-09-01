<template>
  <div>
    <section class="zone">
      <div class="container zone-container">
        <h1 class="zone-title">Арктическая зона сегодня</h1>
        <div class="zone-content">
          <div class="zone-what">
            <h3 class="zone-what__subtitle">Что такое Арктическая Зона РФ?</h3>
            <p class="zone-what__description">
              Арктическая зона России — это северная оконечность Европейской и
              Азиатской частей РФ, расположена вдоль побережья морей Северного
              Ледовитого океана: Баренцева, Карского, Лаптевых,
              Восточно-Сибирского и Чукотского. Это самая протяженная морская
              граница России
            </p>
            <router-link to="/arctica" href="#" class="zone-what__link">
              Об Арктике
              <i class="fas fa-chevron-right"></i>
            </router-link>
            <a href="#" class="zone-what__link">
              Инвестору
              <i i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div class="zone-statistic">
            <div class="zone-statistic__block">
              <div class="zone-statistic__top">
                <p class="zone-statistic__first">2,5</p>
                <p class="zone-statistic__subtitle">миллиона человек</p>
              </div>
              <p class="zone-statistic__description">Население Арктической Зоны РФ</p>
            </div>
            <div class="zone-statistic__block">
              <div class="zone-statistic__top">
                <p class="zone-statistic__first">9</p>
                <p class="zone-statistic__subtitle">миллионов км</p>
              </div>
              <p class="zone-statistic__description">Общая площадь арктических владений России</p>
            </div>
            <div class="zone-statistic__block">
              <div class="zone-statistic__top">
                <p class="zone-statistic__first">9</p>
                <p class="zone-statistic__subtitle">регионов</p>
              </div>
              <p class="zone-statistic__description">Входят в Арктическую Зону РФ</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="video-block">
      <img class="video-block__img" src="../assets/main/lednik.png" alt="video" />
    </section>

    <section class="project">
      <div class="container project-container">
        <div class="project-top">
          <h1 class="project-title">Проекты</h1>
          <a href="#" class="project-link">Смотреть всё</a>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions" class='swiper-container'>
          <!-- Additional required wrapper -->
          <!-- <div class="swiper-wrapper project-wrapper">
            Slides -->
            <swiper-slide class="swiper-slide project-slide">
              <div class="project-block">
                <div class="project-content">
                  <p class="project-content__theme">Инфраструктура</p>
                  <h2 class="project-content__title">Уникальный животный мир Арктики</h2>
                  <p class="project-content__description">
                    Арктика остается одним из немногих уголков Земли,
                    сохранившихся в первозданном виде, и вопреки ожиданиям,
                    здесь кипит жизнь
                  </p>
                  <a href class="project-content__link">
                    Подробнее
                    <i i class="fas fa-chevron-right"></i>
                  </a>
                  <div class="swiper-project-prev" slot="button-prev">
                    <i class="fas fa-chevron-left button-prev__project"></i>
                    </div>
                  <div class="swiper-project-next" slot="button-next">
                    <i class="fas fa-chevron-right button-next__project"></i>
                    </div>
                </div>
                <img class="project-content__img" src="../assets/project/1.png" alt="white beare" />
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide project-slide">
              <div class="project-block">
                <div class="project-content">
                  <p class="project-content__theme">Нефть</p>
                  <h2 class="project-content__title">Добыча нефти на Арктическом шельфе</h2>
                  <p class="project-content__description">
                    Первое и единственное месторождение на российском шельфе,
                    где ведется добыча с морской ледостойкой платформы
                  </p>
                  <a href="#" class="project-content__link">
                    Подробнее
                    <i i class="fas fa-chevron-right"></i>
                  </a>
                  <div class="swiper-project-prev" slot="button-prev">
                    <i class="fas fa-chevron-left button-prev__project"></i>
                    </div>
                  <div class="swiper-project-next" slot="button-next">
                    <i class="fas fa-chevron-right button-next__project"></i>
                    </div>
                </div>
                <img class="project-content__img" src="../assets/project/2.png" alt="arctic sea" />
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide project-slide">
              <div class="project-block">
                <div class="project-content">
                  <p class="project-content__theme">Инфраструктура</p>
                  <h2 class="project-content__title">Новый Уренгой: Полёт в будущее</h2>
                  <p class="project-content__description">
                    В аэропорту Нового Уренгоя стартует масштабная модернизация.
                    В следующем году начнет работу новый пассажирский терминал.
                  </p>
                  <a href="#" class="project-content__link">
                    Подробнее
                    <i i class="fas fa-chevron-right"></i>
                  </a>
                  <div class="swiper-project-prev" slot="button-prev">
                    <i class="fas fa-chevron-left button-prev__project"></i>
                    </div>
                  <div class="swiper-project-next" slot="button-next">
                    <i class="fas fa-chevron-right button-next__project"></i>
                    </div>
                </div>
                <img class="project-content__img" src="../assets/project/3.png" alt="arctic sea" />
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide project-slide">
              <div class="project-block">
                <div class="project-content">
                  <p class="project-content__theme">Инфраструктура</p>
                  <h2 class="project-content__title">Уникальный животный мир Арктики</h2>
                  <p class="project-content__description">
                    Арктика остается одним из немногих уголков Земли,
                    сохранившихся в первозданном виде, и вопреки ожиданиям,
                    здесь кипит жизнь
                  </p>
                  <a href="#" class="project-content__link">
                    Подробнее
                    <i i class="fas fa-chevron-right"></i>
                  </a>
                  <div class="swiper-project-prev" slot="button-prev">
                    <i class="fas fa-chevron-left button-prev__project"></i>
                  </div>
                  <div class="swiper-project-next" slot="button-next">
                    <i class="fas fa-chevron-right button-next__project"></i>
                    </div>
                </div>
                <img class="project-content__img" src="../assets/project/4.png" alt="arctic sea" />
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide project-slide">
              <div class="project-block">
                <div class="project-content">
                  <p class="project-content__theme">Инфраструктура</p>
                  <h2 class="project-content__title">Уникальный животный мир Арктики</h2>
                  <p class="project-content__description">
                    Арктика остается одним из немногих уголков Земли,
                    сохранившихся в первозданном виде, и вопреки ожиданиям,
                    здесь кипит жизнь
                  </p>
                  <a href="#" class="project-content__link">
                    Подробнее
                    <i i class="fas fa-chevron-right"></i>
                  </a>
                  <div class="swiper-project-prev" slot="button-prev">
                    <i class="fas fa-chevron-left button-prev__project"></i>
                    </div>
                  <div class="swiper-project-next" slot="button-next">
                    <i class="fas fa-chevron-right button-next__project"></i>
                    </div>
                </div>
                <img class="project-content__img" src="../assets/project/5.png" alt="arctic sea" />
              </div>
            </swiper-slide>
          <!-- </div> -->
        </swiper>
      </div>
    </section>

    <section class="northway">
      <div class="container northway-container">
        <div class="northway-top">
          <h1 class="northway-top__title">Севморпуть</h1>
          <a href class="northway-top__link">Смотреть всё</a>
        </div>
        <div class="northway-news">
          <div class="northway-news__block">
            <p class="northway-news__theme">Объем грузоперевозок по СМП за 2019 год</p>
            <p class="northway-news__title">
              <span class="northway-news__first">26</span>млн тонн
            </p>
          </div>
          <div class="northway-news__block">
            <p class="northway-news__theme">К 2024 году его планируется увеличить до</p>
            <p class="northway-news__title">
              <span class="northway-news__first">80</span>млн тонн
            </p>
          </div>
          <div class="northway-news__block">
            <p class="northway-news__theme">К 2035 году объем СМП увеличится до</p>
            <p class="northway-news__title">
              <span class="northway-news__first">160</span>млн тонн
            </p>
          </div>
        </div>
        <div class="northway-content">
          <div class="northway-content__block">
            <img src="../assets/northWay/1.png" alt="men" class="northway-content__img" />
            <p class="northway-content__subtitle">АПИ участвует в разработке стратегии развития</p>
            <p class="northway-content__description">
              Агентство Дальнего Востока сопровождает инвестиционные проекты
              российских компаний в Арктике.
            </p>
          </div>
          <div class="northway-content__block">
            <img src="../assets/northWay/2.png" alt="ship" class="northway-content__img" />
            <p class="northway-content__subtitle">
              Правительство отметило важность ледокольного флота</p>
            <p class="northway-content__description">
              Его создание стало этапным событием в истории мирового
              судостроения.
            </p>
          </div>
          <div class="northway-content__block">
            <img src="../assets/northWay/3.png" alt="people" class="northway-content__img" />
            <p
              class="northway-content__subtitle"
            >Анадырь возглавил рейтинг городов по доступности жилья</p>
            <p class="northway-content__description">
              Наименьшую долю в расходах жилье занимает у выпускников в Анадыре
              и Салехарде.
            </p>
          </div>
        </div>
      </div>
    </section>

    <News></News>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import News from '../components/News.vue';

export default {
  components: {
    News,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        speed: 1900,
        loop: true,
        navigation: {
          nextEl: '.swiper-project-next',
          prevEl: '.swiper-project-prev',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../style/_main.scss";

body {
  font-family: "PT Sans";
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 95%;
}
.project-container{
  margin-bottom: 128px;
}
</style>
