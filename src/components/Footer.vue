<template>
   <footer class="footer">
      <div class="container footer-container">
        <div class="footer-top">
          <nav class="footer-nav">
            <div class="footer-logo__container">
              <img src="../assets/logo.png" alt="logo" class="footer-nav__logo" />
            </div>
            <ul class="footer-nav__list">
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link navigation-link">
                  Об Арктике
                </a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link navigation-link"
                  >Инвестору</a
                >
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Проекты</a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Новости</a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link"> Севморпуть </a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Туризм</a>
              </li>
            </ul>
          </nav>
          <div class="footer-subscription">
            <p class="footer-subscription__title">
              Подпишитесь на обновления арктического бюллетеня
            </p>
            <input
              type="email"
              class="footer-subscription__email"
              placeholder="Ваш email адрес"
            />
          </div>
        </div>
        <div class="footer-contact"></div>
      </div>
    </footer>
</template>

<style lang="scss">
   @import '../style/_footer.scss';
</style>
