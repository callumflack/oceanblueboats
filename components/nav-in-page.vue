<template>
  <div>
    <div class="u-inlineBlock font-header">
      <hr>

      <ul>
        <nav-in-page-link
          v-for="link in navLinks"
          :key="link.label"
          :label="link.label"
          :link="link.link"
          :currentPage="currentPage"
        ></nav-in-page-link>
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
ul {
  display: inline-block;
  padding-right: 1.5rem;
}

li {
  line-height: 1.5;
}

li.active::before {
  content: 'asdf';
  color: red;
}
</style>
