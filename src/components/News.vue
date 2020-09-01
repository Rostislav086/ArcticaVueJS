<template>
<section class="news">
      <div class="container news-container">
        <div class="news-top">
          <h1 class="news-top__title">Новости</h1>
          <a href="#" class="news-top__link">Смотреть всё</a>
        </div>
        <div class="news-content">
          <div class="news-content__item" v-for="item in news" :key="item.id">
            <a href="#" class="content-item__link">
              <img :src="require('../assets' + item.srcImage)"
              alt="ice"
              class="news-content__img" />
              <p class="news-content__date">{{item.date}}</p>
              <h4 class="news-content__subtitle"> {{item.subtitle}}</h4>
              <p class="news-content__desription"> {{item.description}} </p>
            </a>
            <a href="#" class="news-content__theme">{{item.section}}</a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      news: [],
      dbJsonURL: 'http://localhost:3000/news',
      error: '',
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

  mounted() {
    this.getAllNews();
  },
};
</script>
<style lang="scss">
@import '../style/_main.scss';
@import '../style/_normalize.scss';
</style>
