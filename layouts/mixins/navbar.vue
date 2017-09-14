<template>
  <nav
    :class="['Navbar', {
      white: $store.state.currentPage === '/'
    }]"
  >
    <div class="Navbar-body">
      <router-link class="smallheader" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" class="icon-placeholder" @click.prevent="handleNavToggle">

      </a>
    </div>
  </nav>
</template>



<script>
// https://github.com/craigh411/vue-star-rating/issues/17 fails:
// import Svgicon from '~/static/icons'
import '~/static/icons'

export default {
  name: 'navbar',

  props: {
    currentPage: String
  },

  computed: {
    isVisible: function () {
      return this.$store.state.isMobileNavVisible
    }
  },

  methods: {
    handleNavToggle () {
      this.$store.commit('SET_MODAL_VISIBILITY', !this.$store.state.isMobileNavVisible)
    }
  }
}
</script>



<style scoped>
@import "../../assets/vars.css";

.icon-placeholder {
  background-color: black;
  height: 18px;
  width: 23px;
}

.Navbar.white {
  color: white;
}

.Navbar.fill {
  background-color: var(--color-bg);
  border-bottom: 1px solid currentColor;
  /*box-shadow:
    0 6px 30px 5px rgba(0,0,0,0.03),
    0 9px 20px 3px rgba(0,0,0,0.06);*/
  color: var(--color-brand);
}

.Navbar.fill .Navbar-body {
  border-bottom-color: transparent;
  padding-bottom: 0;
}

.Navbar.hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition:
    background-color var(--transition-duration),
    opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}

</style>
