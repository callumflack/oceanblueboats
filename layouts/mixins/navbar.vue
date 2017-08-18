<template>
  <nav :class="{hidden: isNavHidden, fill: windowIsScrolled}">
    <div class="nav-body">
      <router-link class="logo" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" class="hamburger">
        &#9776;
      </a>
    </div>
  </nav>
</template>

<script>
const transitionScrollPos = 200

export default {
  name: 'navbar',

  data () {
    return {
      previousScrollPos: 0,
      windowIsScrolled: false,
      isNavHidden: false
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
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transition:
    background-color 0.2s,
    opacity 0.2s;
}

.nav-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.4rem 1.1rem;
  border-bottom: 1px solid currentColor;
  transition:
    border-bottom-color 0.2s;
}

nav.fill {
  background-color: #fff;
}

nav.fill .nav-body {
  border-bottom-color: transparent;
  padding-bottom: 0;
}

nav.hidden {
  opacity: 0;
}

.logo {
  font-family: var(--font-header);
  letter-spacing: 0.105rem;
}

nav .hamburger {
  font-weight: bold;
}
</style>
