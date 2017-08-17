<template>
  <div>
    <navbar></navbar>

    <nuxt/>

    <appFooter></appFooter>
  </div>
</template>

<script>
import navbar from '~/layouts/mixins/navbar.vue'
import appFooter from '~/layouts/mixins/footer.vue'

export default {
  components: {
    navbar,
    appFooter
  }
}
</script>

<style>
</style>
