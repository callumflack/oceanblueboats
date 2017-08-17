<template>
  <div>
    <nav>
      <router-link class="logo" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" class="hamburger">
        &#9776;
      </a>
    </nav>

    <nuxt/>
  </div>
</template>

<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.8rem;
  padding: 0.2rem 0;
  background-color: transparent;
  color: #fff;
  border-bottom: 1px solid currentColor;
  font-weight: bold;
}

nav .hamburger {
  font-size: 1.6rem;
  line-height: 1;
}
</style>
