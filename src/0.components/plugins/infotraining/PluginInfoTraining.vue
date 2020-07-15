<template>
  <div class="info">
    <div class="info__title">{{title}}</div>
    <div class="info__group ">
      <iconCalendar class="info__group_icon" />
      <div class="info__group_label">{{getDate}}</div>
    </div>
    <div class="info__group ">
      <iconMap class="info__group_icon" />
      <div class="info__group_label">{{getLocale}}</div>
    </div>
    <div class="info__group ">
      <iconClock class="info__group_icon" />
      <div class="info__group_label">{{getTime}}</div>
    </div>
  </div>
</template>
<script src="./script.js"></script>
