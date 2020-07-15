<template>
  <div class="page__abouthistory">
    <div class="page__abouthistory_title">
      <div class="page__abouthistory_title--principal">
        {{$t('pages.about.history.title')}}
      </div>
      <div class="page__abouthistory_title--secondary">
        <div class="timeline">
          <div class="timeline__item" v-for="(t, ti, tk) in $t('pages.about.history.timeLine')" :key="tk">
            <div class="timeline__item_date">
              {{ $d(new Date(t.date), 'short') }}
            </div>
            <div class="timeline__item_content">
              {{t.content}}
            </div>
          </div>
        </div>
      </div>
      <PartialNavigateAbout class="page__abouthistory_navigate" />
    </div>
  </div>
</template>
<script>
export default {

  name: 'WebAboutHistory'
}

</script>
