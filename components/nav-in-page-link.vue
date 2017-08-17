<template>
  <li>
    <a :href='currentPage'>
      <span v-if='label === currentPage'>&rarr;</span>
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
