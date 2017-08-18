<template>
  <li>
    <a :href='link'>
      <span class="icon" v-if='link === $store.state.currentPage'>&rarr;</span>
      {{label}}
    </a>
  </li>
</template>

<script>
export default {
  name: 'nav-in-page-link',

  props: {
    label: String,
    link: String,
    currentPage: String
  }
}
</script>

<style scoped>
</style>
