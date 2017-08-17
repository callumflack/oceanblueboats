<template>
  <div>
    <navbar></navbar>

    <nuxt/>

    <appFooter></appFooter>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import appFooter from '~/components/footer.vue'

export default {
  components: {
    navbar,
    appFooter
  }
}
</script>

<style>
</style>
