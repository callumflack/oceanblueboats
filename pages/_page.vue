<template>
  <div>
    <div>
      <Block title textColumn>
        <h1 class="header">{{page.title}}</h1>
        <h4 class="lede" v-html="page.subtitle" />
      </Block>

      <hero
        :backgroundImage="page.heroImage"
      />
    </div>

    <Block>
      <div class="u-size11of12 u-sm-size3of4 text" v-html="page.body" />
    </Block>

    <Block>
      <nav-in-page />
    </Block>
  </div>
</template>

<script>
import Hero from '~/components/hero.vue'
import Block from '~/components/block.vue'
import NavInPage from '~/components/nav-in-page.vue'

export default {
  components: {
    Hero,
    Block,
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
@import "../assets/vars.css";


</style>
