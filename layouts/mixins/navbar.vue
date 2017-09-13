<template>
  <nav
    :class="{
      white: $store.state.currentPage === '/'
    }"
  >
    <div class="nav-body">
      <router-link class="smallheader" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" @click.prevent="handleNavToggle">
        <svgicon name="hamburger" width="23" height="18"></svgicon>
      </a>
    </div>
  </nav>
</template>



<script>
import '~/static/icons'

export default {
  name: 'navbar',

  methods: {
    handleNavToggle () {
      this.$store.commit('SET_MODAL_VISIBILITY', !this.$store.state.isMobileNavVisible)
    }
  }
}
</script>



<style scoped>
@import "../../assets/vars.css";

nav {
  --transition-duration: 0.2s;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transform: translateY(0);
  transition:
    background-color var(--transition-duration),
    opacity var(--transition-duration),
    transform 0s 0s;
}

nav.white {
  color: white;
}

nav.fill {
  background-color: var(--color-bg);
  border-bottom: 1px solid currentColor;
  /*box-shadow:
    0 6px 30px 5px rgba(0,0,0,0.03),
    0 9px 20px 3px rgba(0,0,0,0.06);*/
  color: var(--color-brand);
}

nav.fill .nav-body {
  border-bottom-color: transparent;
  /*padding-bottom: 0;*/
}

nav.hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition:
    background-color var(--transition-duration),
    opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}

</style>
