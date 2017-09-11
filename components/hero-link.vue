<template>
  <div>
    <router-link v-if="link" :to="link">
      <slot />
    </router-link>

    <div v-else>
      <slot />
    </div>

  </div>
</template>

<script scoped>
export default {
  props: {
    link: String
  }
}
</script>
