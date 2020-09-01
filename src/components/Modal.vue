<template>
  <div class="header-modal" v-if="showModal" @close="showModal = false">
    <div class="modal-container">
    <h1 class="header-modal__title">
      Авторизация
    </h1>
    <p class="header-modal__text">
      Добрый день. <br>
      Данное модельно окно предназначено в качестве демонстрации и подтверждения
      работоспособности кнопки, а так же умения реализовать это с помощью JS.
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
    </div>
  </div>
</template>

<style lang="scss">
  @import "../style/modelWindow.scss";
</style>
