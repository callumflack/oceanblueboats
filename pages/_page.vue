<template>
  <div>
    <div>
      <hero
        :headline="page.title"
        :subtext="page.subtitle"
        half
      />

      <hero
        :backgroundImage="page.heroImage"
        half
      />
    </div>

    <div class="block container--md" v-html="page.body" />

    <div class="container--md">
      <nav-in-page />
    </div>

    <script src='/js/cloudinary.js'></script>
  </div>
</template>

<script>
import Hero from '~/components/hero.vue'
import NavInPage from '~/components/nav-in-page.vue'

export default {
  components: {
    Hero,
    NavInPage
  },

  async asyncData ({ app, route, payload }) {
    return {
      page: await app.$content('/').get(route.path)
    }
  }
}
</script>

<style scoped>
</style>
