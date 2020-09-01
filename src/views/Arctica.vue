<template>
  <div class="acrtica">
    <section class="container arctica-container">
      <nav class="arctica-nav">
        <i i class="fas fa-chevron-right">
          <a href class="arctica-nav__link">Арктическая зона сегодня</a>
        </i>
        <i i class="fas fa-chevron-right">
          <a href class="arctica-nav__link">Регионы</a>
        </i>
        <i i class="fas fa-chevron-right">
          <a href class="arctica-nav__link">Развитие</a>
        </i>
        <i i class="fas fa-chevron-right">
          <a href class="arctica-nav__link">Арктическая зона в 2035 году</a>
        </i>
        <i i class="fas fa-chevron-right">
          <a href class="arctica-nav__link">Статьи об Арктике</a>
        </i>
        <i i class="fas fa-chevron-right">
          <a href class="arctica-nav__link">Новости</a>
        </i>
      </nav>

      <div  class="today">
        <h1 class="today-title">Арктическая зона сегодня</h1>
        <div class="today-item" v-for="item in news" :key="item.id">
          <p class="today-item__description"> {{ item.description }} </p>
            <img :src="require('../assets' + item.srcImage)"  alt="1" class="today-item__img" />
        </div>
      </div>
    </section>

    <section class="region">
      <div class="container region-container">
        <h1 class="region-title">Регионы</h1>
        <div class="region-content">
          <div class="region-content__description">
            <p class="description-text">9 регионов, из которых: 4 субъекта РФ gолностью:
            Чукотский АО, Ямало-Ненецкий АО, Ненецкий АО, Мурманская обл.
            <br>
            27 муниципальных образований 5-ти субъектов РФ: респ.
            Карелия, респ. Коми, Архангельская обл., Красноярский край, респ.Саха (Якутия)
            </p>
          </div>
          <div class="region-content__statistic">
            <div class="statistic-item">
              <img src="../assets/arctic/region/gas.png" alt="gas" class="statistic-item__img">
              <div>
              <p class="statistic-item__subtitle">
                <span class="statistic-item__first">83%</span>
                газа
              </p>
              <p class="statistic-item__description">Добываемого в России</p>
              </div>
            </div>
            <div class="statistic-item">
              <img src="../assets/arctic/region/oil.png" alt="gas" class="statistic-item__img">
              <div>
              <p class="statistic-item__subtitle">
                <span class="statistic-item__first">17%</span>
                нефти
              </p>
              <p class="statistic-item__description">Добываемого в России</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="development">
      <swiper ref="mySwiper" :options="swiperDevelopmentOptions">
        <swiper-slide class="swiper-slide__one">
          <!-- <img src="../assets/arctic/development/bg.png" alt=""> -->
        </swiper-slide>
        <swiper-slide class="swiper-slide__two"></swiper-slide>
        <swiper-slide class="swiper-slide__three"></swiper-slide>
      </swiper>
      <div class="container development-container">
        <h1 class="development-title">Развитие</h1>
        <div class="development-content">
          <div class="development-content__item">
            <img src="../assets/arctic/development/gas.png" alt="gas" class="content-item__img">
            <p class="content-item__description">
              На Арктику приходится 17 % добычи всей российской нефти. К 2035
              году планируется довести ее до значения 25% от общей нефтедобычи в РФ.
            </p>
          </div>
          <div class="development-content__item">
            <img src="../assets/arctic/development/oil.png" alt="oil" class="content-item__img">
            <p class="content-item__description">
              Сегодня АЗ РФ дает 83 % всего российского газа. В 2035 году этот
              показатель должен достичь 92% от общей газодобычи в РФ.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="politic">
      <div class="container politic-container">
        <h1 class="politic-title">Государственная политика в Арктике</h1>
        <ul class="politic-list">
          <li class="politic-item">
            <a href="" class="politic-item__link">
              Обеспечение суверенитета и территориальной целостности Российской Федерации
            </a>
          </li>
          <li class="politic-item">
            <a href="" class="politic-item__link">
              Сохранение Арктики как территории мира, стабильного и взаимовыгодного партнерства
            </a>
          </li>
          <li class="politic-item">
            <a href="" class="politic-item__link">
              Обеспечение высокого качества жизни и благосостояния населения Арктической зоны РФ
            </a>
          </li>
          <li class="politic-item">
            <a href="" class="politic-item__link">
              Рациональное использование и развитие Арктической зоны РФ в
              качестве стратегической ресурсной базы
            </a>
          </li>
          <li class="politic-item">
            <a href="" class="politic-item__link">
              Развитие Северного морского пути на мировом рынке
            </a>
          </li>
          <li class="politic-item">
            <a href="" class="politic-item__link">
              Охрана окружающей среды в Арктике и защита традиционного образа
              жизни коренных малочисленных народов
            </a>
          </li>
        </ul>

      </div>
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

    <News></News>
  </div>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import News from '../components/News.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    News,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      news: [],
      dbJsonURL: 'http://localhost:3000/project',
      error: '',
      swiperDevelopmentOptions: {
        speed: 4500,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
        },
        loop: true,
      },
      swiperOptions: {
        speed: 2000,
        loop: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.swiper-project-next',
          prevEl: '.swiper-project-prev',
          clickable: true,
        },
        // Some Swiper option/callback...
      },
    };
  },

  methods: {
    getAllNews() {
      axios
        .get(this.dbJsonURL)
        .then((response) => {
          this.news = response.data;
        })
        .catch((e) => {
          this.error = e;
        });
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.getAllNews();
  },
};
</script>

<style lang="scss">
@import '../style/_arctica.scss';
</style>
