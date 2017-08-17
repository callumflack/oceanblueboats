<template>
  <nav>
    <router-link class="logo" to="/">
      OCEANBLUE BOATS
    </router-link>

    <a href="#" class="hamburger">
      &#9776;
    </a>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2rem 1.8rem;
  background-color: transparent;
  color: #fff;
  border-bottom: 1px solid currentColor;
}

.logo {
  font-family: var(--font-header);
  letter-spacing: 0.105rem;
}

nav .hamburger {
  font-weight: bold;
}
</style>
