<template>
  <div>
    <navbar></navbar>

    <nuxt/>

    <app-footer></app-footer>
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
