<template>
  <div @click="close" :class="['mobile-nav', { visible }]">
    <a class="close">&#10005;</a>

    <nav>
      <li>
        <nuxt-link class="display" to="/">Oceanblue Boats</nuxt-link>
      </li>

      <li v-for="link in navLinks">
        <nuxt-link :to='link.link'>{{link.label}}</nuxt-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mobile-nav',

  props: {
    visible: Boolean,
    close: Function
  },

  data () {
    return {
      navLinks: [
        {
          label: 'The home page',
          link: '/'
        }, {
          label: 'The history',
          link: '/the-history'
        }, {
          label: 'The factory',
          link: '/the-factory'
        }, {
          label: 'The process',
          link: '/the-process'
        }, {
          label: 'The boat builders',
          link: '/the-boat-builders'
        }, {
          label: 'The designs',
          link: '/the-designs'
        }
      ]
    }
  }
}
</script>

<style scoped>
.close {
  position: fixed;
  right: 1.1rem;
  top: 1.4rem;
}

.mobile-nav {
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: #fff;
}

.mobile-nav.visible {
  display: block;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: var(--text-size-lg);
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  line-height: 1.6;
}

nav .display {
  line-height: 1;
  margin-bottom: 1.25rem;
}
</style>
