<template>
  <div>
    <div>
      <hero
        :headline="page.title"
        :subtext="page.subtitle"
        half
      ></hero>

      <hero
        backgroundImage="/rod-long.jpg"
        link="/about"
        half
      ></hero>
    </div>

    <div class="block container--md" v-html="page.body" />

    <div class="container--md">
      <nav-in-page></nav-in-page>
    </div>
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
