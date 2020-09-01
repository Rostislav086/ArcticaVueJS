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
                <router-link to="/" class="footer-nav__link navigation-link">
                  Об Арктике
                </router-link>
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
        <div class="footer-contact">
          <div class="footer-contact__adress">
            <p class="contact-adress">
              123376, Россия, г. Москва,
              Большой Трёхгорный переулок, д. 15, с. 1
            </p>
          </div>
          <div class="footer-contact__email">
            <a href="#" class="contact-email__link">contact@arctic.gov.ru</a>
            <a href="#" class="contact-phone__link">+7 (499) 322 44 27</a>
          </div>
          <div class="footer-contact__social">
            <a href="" class="footer-social__link">
              <i class="fab fa-facebook-f social-links"></i>
              </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-vk social-links"></i>
            </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-instagram social-links"></i>
            </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-twitter social-links"></i>
            </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-youtube social-links"></i>
            </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-telegram-plane social-links"></i>
            </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-odnoklassniki social-links"></i>
            </a>
            <a href="" class="footer-social__link">
              <i class="fab fa-tiktok social-links"></i>
            </a>
            </div>
        </div>
      </div>
    </footer>
</template>

<style lang="scss">
   @import '../style/_footer.scss';
</style>
