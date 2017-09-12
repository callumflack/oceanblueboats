<template>
  <div>
    <navbar />
    <navbar-floating />
    <mobile-nav />

    <nuxt/>

    <div class="block container--md">
      <app-footer />
    </div>
  </div>
</template>

<script>
import Navbar from '~/layouts/mixins/navbar.vue'
import NavbarFloating from '~/layouts/mixins/navbar-floating.vue'
import MobileNav from '~/layouts/mixins/mobile-nav.vue'

import AppFooter from '~/layouts/mixins/footer.vue'

export default {
  components: {
    Navbar,
    NavbarFloating,
    MobileNav,
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
