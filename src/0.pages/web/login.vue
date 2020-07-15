<template>
  <div class="page__login">
    <form class="page__login_form">
      <div class="page__login_form--header">
        <IconMuiscas label logoFlower="#e6e6e6" logoLetter="#e6e6e6" logoLetters="#e6e6e6" class="page__login_form--header-image" />
        <div class="page__login_form--header-title">
          Zona de jugadores
        </div>
      </div>
      <div class="page__login_form--input">
        <label for="user">{{$t($t('login.input.user'))}}</label>
        <input type="email" required name="user" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" />
      </div>
      <div class="page__login_form--input">
        <label for="password">{{$t($t('login.input.password'))}}</label>
        <input type="password" required name="password" />
      </div>
      <div class="page__login_form--actions">
        <router-link to="/forgot" class="page__login_form--actions-link">
          {{$t('login.input.forgot')}}
        </router-link>
        <button class="page__login_form--actions-button">{{$t('login.input.access')}}</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {

  name: 'WebLogin'
}

</script>
