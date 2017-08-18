<template>
  <div>
    <navbar></navbar>

    <nuxt/>

    <div class="block container--md">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Navbar from '~/layouts/mixins/navbar.vue'
import AppFooter from '~/layouts/mixins/footer.vue'

export default {
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style scoped>
</style>
