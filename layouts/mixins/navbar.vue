<template>
  <div>
    <mobile-nav :close="closeMobileNav" :hidden="isMobileNavHidden" />

    <nav
      :class="{
        hidden: isNavHidden,
        fill: windowIsScrolled,
        white: $store.state.currentPage === '/'
      }"
    >
      <div class="nav-body">
        <router-link class="logo" to="/">
          OCEANBLUE BOATS
        </router-link>

        <a href="#" class="hamburger" @click.prevent="handleNavToggle">
          &#9776;
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import MobileNav from '~/layouts/mixins/mobile-nav.vue'

const transitionScrollPos = 200

export default {
  name: 'navbar',

  components: {
    MobileNav
  },

  data () {
    return {
      previousScrollPos: 0,
      windowIsScrolled: false,
      isNavHidden: false,
      isMobileNavHidden: true
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

      this.isNavHidden = scrolledDown

      this.windowIsScrolled = scrollPos > transitionScrollPos
    },

    handleNavToggle () {
      this.isMobileNavHidden = !this.isMobileNavHidden
    },

    closeMobileNav () {
      this.isMobileNavHidden = true
    }
  }
}
</script>

<style scoped>
nav {
  --transition-duration: 0.2s;
  position: fixed;
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

.nav-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.4rem 1.1rem;
  border-bottom: 1px solid currentColor;
  transition:
    border-bottom-color var(--transition-duration);
}

nav.white {
  color: #fff;
}

nav.fill {
  color: var(--color-brand);
  background-color: #fff;
}

nav.fill .nav-body {
  border-bottom-color: transparent;
  padding-bottom: 0;
}

nav.hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition:
    background-color var(--transition-duration),
    opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}

.logo {
  font-family: var(--font-header);
  letter-spacing: 0.105rem;
}

nav .hamburger {
  font-weight: bold;
}
</style>
