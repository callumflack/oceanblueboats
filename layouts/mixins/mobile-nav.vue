<template>
  <div
    @click="close"
    :class="['mobile-nav',
      {
        hidden: !isVisible,
        'delay-transition': delayTransition
      }
    ]"
  >
    <div class="nav-body">
      <router-link class="smallheader" to="/">
        OCEANBLUE BOATS
      </router-link>

      <a href="#" @click.prevent="handleNavToggle">
        <svgicon name="close" width="23" height="18"></svgicon>
      </a>
    </div>

    <Block title textColumn>
      <nav>
        <!-- <li @click='applyDelayTransition'>
          <nuxt-link class="header" to="/">Oceanblue Boats</nuxt-link>
        </li> -->

        <li @click='applyDelayTransition' v-for="link in navLinks">
          <nuxt-link class="header" :to='link.link'>{{link.label}}</nuxt-link>
        </li>
      </nav>
    </Block>


  </div>
</template>

<script>
import Block from '~/components/block.vue'

export default {
  name: 'mobile-nav',

  components: {
    Block
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
@import "../../assets/vars.css";

.close {
  position: fixed;
  right: 1.1rem;
  top: 1.4rem;
}

.mobile-nav {
  --transition-duration: 0.2s;
  --transition-delayed: 0.4s;
  background-color: #fff;
  bottom: 0;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(0);
  transition:
    opacity var(--transition-duration),
    transform 0s 0s;
  z-index: 15;
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
}

nav li {
  list-style: none;
}

nav a {
  display: block;
}
</style>
