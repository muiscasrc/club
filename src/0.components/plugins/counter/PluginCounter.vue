<template>
  <div class="plugin__counter">
    <div class="plugin__counter_button" @click="decr">
      <Icons icon="minus"/>
    </div>
    <span class="plugin__counter_number">{{counter}}</span>
    <div class="plugin__counter_button" @click="incr">
      <Icons icon="plus"/>
    </div>
  </div>
</template>
<script src="./script.js"></script>
