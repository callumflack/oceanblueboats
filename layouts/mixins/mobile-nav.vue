<template>
  <div
    @click="close"
    :class="[
      'mobile-nav',
      {
        hidden: !isVisible,
        'delay-transition': delayTransition
      }
    ]"
  >
    <a class="close">&#10005;</a>

    <nav>
      <li @click='applyDelayTransition'>
        <nuxt-link class="display" to="/">Oceanblue Boats</nuxt-link>
      </li>

      <li @click='applyDelayTransition' v-for="link in navLinks">
        <nuxt-link :to='link.link'>{{link.label}}</nuxt-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mobile-nav',

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
      ],
      delayTransition: false
    }
  },

  computed: {
    isVisible: function () {
      return this.$store.state.isMobileNavVisible
    }
  },

  methods: {
    applyDelayTransition (event) {
      if (event.target.getAttribute('href') === this.$route.path) {
        return
      }

      this.delayTransition = true

      setTimeout(() => {
        this.delayTransition = false
      }, 1000)
    },

    close () {
      this.$store.commit('SET_MODAL_VISIBILITY', false)
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
  --transition-duration: 0.2s;
  --transition-delayed: 0.4s;
  position: fixed;
  z-index: 15;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity var(--transition-duration),
    transform 0s 0s;
}

.mobile-nav.hidden {
  opacity: 0;
  transform: translateY(100vh);
  transition:
    opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}

.mobile-nav.delay-transition {
  transition:
    opacity var(--transition-duration) var(--transition-delayed),
    transform 0s var(--transition-delayed);
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
