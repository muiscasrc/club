<template>
  <div id="countDown" class="count">
    <div class="count__item">
      {{days}}
      <p class="count__item_label">days</p>
    </div>
    <div class="count__item">
      {{hours}}
      <p class="count__item_label">hours</p>
    </div>
    <div class="count__item">
      {{minutes}}
      <p class="count__item_label">minutes</p>
    </div>
    <div class="count__item">
      {{seconds}}
      <p class="count__item_label">seconds</p>
    </div>
  </div>
</template>
<script src="./script.js"></script>
