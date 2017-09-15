<template>
  <div>
    <div class="u-inlineBlock smallheader">
      <hr>

      <ul class="Root">
        <nav-in-page-link
          class="smallheader"
          v-for="item in navLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          :currentPage="currentPage"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import NavInPageLink from '~/components/nav-in-page-link.vue'

export default {
  name: 'nav-in-page',

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
        }, {
          label: 'The location',
          link: '/contact-us'
        }
      ]
    }
  },

  components: {
    NavInPageLink
  },

  props: {
    currentPage: String
  }
}
</script>

<style scoped>
@import "../assets/vars.css";

.Root li {
  line-height: 1.5;

  & + li {
    margin-top: var(--s2);

    @media (--sm-viewport) {
      margin-top: 0;
    }
  }
}
</style>
