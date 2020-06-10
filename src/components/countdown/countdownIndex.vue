<template>
  <div id="countDown" class="count">
    <div class="count__title" v-if="title !== ''" v-html="title">
    </div>
    <div class="count__wrapper">
      <div class="count__wrapper_item">
        {{days}}
        <p class="count__wrapper_item--label">days</p>
      </div>
      <div class="count__wrapper_item">
        {{hours}}
        <p class="count__wrapper_item--label">hours</p>
      </div>
      <div class="count__wrapper_item">
        {{minutes}}
        <p class="count__wrapper_item--label">minutes</p>
      </div>
      <div class="count__wrapper_item">
        {{seconds}}
        <p class="count__wrapper_item--label">seconds</p>
      </div>
    </div>
  </div>
</template>
<script src="./script.js"></script>
