<template>
  <div class="page__aboutobject">
    <div class="page__aboutobject_title">
      <div class="page__aboutobject_title--principal">
        {{$t('pages.about.object.title')}}
      </div>
      <div class="page__aboutobject_title--secondary" v-html="$t('pages.about.object.content')">
      </div>
      <PartialNavigateAbout class="page__aboutobject_navigate" />
    </div>
    <div class="page__aboutobject_background">
      <ImageH class="page__aboutobject_background--image" />
    </div>
  </div>
</template>
<script>
export default {

  name: 'WebAboutObject'
}

</script>
