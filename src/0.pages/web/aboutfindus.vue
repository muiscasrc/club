<template>
  <div class="page__aboutfindus">
    <div class="page__aboutfindus_title">
      <div class="page__aboutfindus_title--principal">
        {{$t('pages.about.find.title')}}
      </div>
      <div class="page__aboutfindus_title--secondary">
        <div class="page__aboutfindus_title--secondary-info">
          <Icons icon="Locale" class="icon" />
          <div class="label" v-html="$t('pages.about.find.labelAddress')">
          </div>
        </div>
        <div class="page__aboutfindus_title--secondary-info">
          <Icons icon="Email" class="icon" />
          <div class="label">
            {{$t('pages.about.find.labelEmail')}}:<br />
            <a href="mailto:muiscasrc@gmail.com">
              muiscasrc@gmail.com
            </a>
          </div>
        </div>
        <div class="page__aboutfindus_title--secondary-info">
          <Icons icon="Globe" class="icon" />
          <div class="info">
            {{$t('pages.about.find.labelNetwork')}}:<br />
            <div class="info__network">
              <span class="info__network_label">@muiscasrc</span>
              <PluginNetwork class="info__network_links" title=""
                :facebook="profile" :twitter="profile" :instagram="profile"
                :size="24" />
            </div>
          </div>
        </div>
        <div class="page__aboutfindus_title--secondary-info link__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.052599158239!2d-74.16003645010602!3d4.584580596652938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f1cbd748f83%3A0x9937660989eb8187!2sMuiscas%20Rugby%20Club!5e0!3m2!1ses-419!2sco!4v1594671446049!5m2!1ses-419!2sco" style="border:0" allowfullscreen aria-hidden="false" tabindex="0" width="100%" height="100%"></iframe>
        </div>
      </div>
      <PartialNavigateAbout class="page__aboutfindus_navigate" />
    </div>
    <div class="page__aboutfindus_map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.052599158239!2d-74.16003645010602!3d4.584580596652938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f1cbd748f83%3A0x9937660989eb8187!2sMuiscas%20Rugby%20Club!5e0!3m2!1ses-419!2sco!4v1594671446049!5m2!1ses-419!2sco" style="border:0" allowfullscreen aria-hidden="false" tabindex="0" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>
<script>
export default {

  name: 'WebAboutFindUs',
  data () {
    return {
      profile: 'muiscasrc'
    }
  }
}

</script>
