<template>
  <div>
    <navbar />

    <nuxt/>

    <div class="block container--md">
      <app-footer />
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
.page-enter-active, .page-leave-active {
  transition: opacity 0.4s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
