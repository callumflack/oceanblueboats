<template>
  <nav
    :class="['Navbar', {
      white: currentPage === '/'
    }]"
  >
    <div class="Navbar-body">
      <router-link class="smallheader" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" @click.prevent="handleNavToggle">
        <svg version="1.1" viewBox="0 0 23 18" class="svg-icon svg-fill" width="23" height="18" v-if="isVisible">
          <g data-name="Layer 1"><path pid="0" d="M2.655 1.577L4.07.162l16.267 16.26-1.414 1.415z"></path><path pid="1" d="M2.656 16.428L18.922.168l1.414 1.414L4.07 17.842z"></path></g>
        </svg>
        <svg version="1.1" viewBox="0 0 23 18" class="svg-icon svg-fill" width="23" height="18" v-else>
          <g data-name="Layer 1"><path pid="0" d="M0 0h23v2H0zM0 8h23v2H0zM0 16h23v2H0z"></path></g>
        </svg>
      </a>
    </div>
  </nav>
</template>



<script>
// svgicon does not support SSR
// import '~/static/icons'

export default {
  name: 'navbar',

  computed: {
    isVisible: function () {
      return this.$store.state.isMobileNavVisible
    },

    currentPage: function () {
      return this.$store.state.currentPage
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
