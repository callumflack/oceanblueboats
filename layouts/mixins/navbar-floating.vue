<template>
  <navbar
    :class="{
      hidden: isNavHidden,
      fill: windowIsScrolled,
      white: $store.state.currentPage === '/'
    }"
  />
</template>

<script>
import Navbar from '~/layouts/mixins/navbar.vue'

const transitionScrollPos = 200

export default {
  name: 'navbar-floating',

  components: {
    Navbar
  },

  data () {
    return {
      previousScrollPos: 0,
      windowIsScrolled: false,
      isNavHidden: true
    }
  },

  mounted () {
    if (window.scrollY > transitionScrollPos) {
      this.windowIsScrolled = true
    }

    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (event) {
      const scrollPos = window.scrollY
      const previousScrollPos = this.previousScrollPos
      this.previousScrollPos = scrollPos
      const scrolledDown = scrollPos > previousScrollPos

      this.isNavHidden = scrolledDown || scrollPos < 200

      this.windowIsScrolled = scrollPos > transitionScrollPos
    },

    handleNavToggle () {
      this.$store.commit('SET_MODAL_VISIBILITY', !this.$store.state.isMobileNavVisible)
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
}
</style>
