<template>
  <nav>
    <div class="nav-body">
      <router-link class="logo" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" class="hamburger" @click.prevent="handleNavToggle">
        &#9776;
      </a>
    </div>
  </nav>
</template>

<script>
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
