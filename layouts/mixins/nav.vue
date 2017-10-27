<template>
  <div
    @click="close"
    :class="['nav',
      {
        hidden: !isVisible,
        'delay-transition': delayTransition
      }
    ]"
  >
    <navbar />

    <Block nav>
      <nav>
        <ul>
          <nav-in-page-link
            class="header"
            @click='applyDelayTransition'
            v-for="item in navLinks"
            :key="item.label"
            :label="item.label"
            :link="item.link"
            :currentPage="currentPage"
          />
        </ul>

        <div class="second-nav">
          <hr>
          <ul class="small">
            <li><a href="tel:0409 726 128"><span class="contact-marker">t: </span>0409 726 128</a></li>
            <li><a href="mailto:hi@oceanblueboats.com.au"><span class="contact-marker">e: </span>hi@oceanblueboats.com.au</a></li>
            <li><a href="https://goo.gl/maps/7TPnDqKrtby">116 Lyons Street, Cairns</a></li>
          </ul>
        </div>

      </nav>
    </Block>

  </div>
</template>

<script>
import Navbar from '~/layouts/mixins/navbar.vue'
import Block from '~/components/block.vue'
import NavInPageLink from '~/components/nav-in-page-link.vue'

export default {
  name: 'v-nav',

  components: {
    Navbar,
    Block,
    NavInPageLink
  },

  data () {
    return {
      navLinks: [
        {
          label: 'The home page',
          link: '/'
        },
        {
          label: 'The history',
          link: '/the-history'
        },
        {
          label: 'The factory',
          link: '/the-factory'
        },
        {
          label: 'The process',
          link: '/the-process'
        },
        {
          label: 'The boat builders',
          link: '/the-boat-builders'
        },
        {
          label: 'The designs',
          link: '/the-designs'
        },
        {
          label: 'The location',
          link: '/contact-us'
        }
      ],
      delayTransition: false
    }
  },

  computed: {
    isVisible: function () {
      return this.$store.state.isMobileNavVisible
    },

    currentPage: function () {
      return this.$store.state.currentPage
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
@import '../../assets/vars.css';

.arrange-responsively {
  @media (max-width: 1440px) and (max-height: 900px) {
    display: flex;
  }
}

.second-nav {
  display: inline-block;
  margin-top: var(--s2);

  @media (--md-viewport) {
    margin-top: var(--s3);
  }

  @media (--lg-viewport) {
    margin-top: var(--s4);
  }

  @media (min-width: 512px) and (max-width: 1440px) and (max-height: 900px) {
    display: none;
  }
}

.nav {
  background-color: #fff;
  bottom: 0;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(0);
  transition: opacity var(--transition-duration), transform 0s 0s;
  z-index: 15;
}

.nav.hidden {
  opacity: 0;
  transform: translateY(100vh);
  transition: opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}

.nav.delay-transition {
  transition: opacity var(--transition-duration) var(--transition-delayed),
    transform 0s var(--transition-delayed);
}
</style>
