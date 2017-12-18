<template>
  <div :class="currentPage.substring(currentPage.lastIndexOf('/') + 1)">
    <navbar />
    <navbar-floating />
    <v-nav />

    <nuxt/>

    <v-footer />
  </div>
</template>

<script>
import Navbar from "~/layouts/mixins/navbar.vue";
import NavbarFloating from "~/layouts/mixins/navbar-floating.vue";
import Nav from "~/layouts/mixins/nav.vue";
import Footer from "~/layouts/mixins/footer.vue";

export default {
  components: {
    Navbar,
    NavbarFloating,
    "v-nav": Nav,
    "v-footer": Footer
  },

  computed: {
    currentPage: function() {
      return this.$store.state.currentPage;
    }
  }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
