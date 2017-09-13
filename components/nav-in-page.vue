<template>
  <div>
    <div class="u-inlineBlock smallheader">
      <hr>

      <ul class="Root">
        <nav-in-page-link
          v-for="link in navLinks"
          class="smallheader"
          :key="link.label"
          :label="link.label"
          :link="link.link"
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

.Root ul {
  display: inline-block;
  padding-right: 1.5rem;
}

.Root li {
  line-height: 1.5;

  & + li {
    margin-top: var(--s2);

    @media (--sm-viewport) {
      margin-top: var(--s1);
      margin-top: 0;
    }
  }
}
</style>
