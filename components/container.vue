<template>
  <div :class="['Container', {text, large, hero}]">
    <slot />
  </div>
</template>

<script scoped>
export default {
  name: 'container',
  props: {
    text: Boolean,
    large: Boolean,
    hero: Boolean
  }
}
</script>

<style scoped>
@import "../assets/vars.css";

.Container {
  margin-left: auto;
  margin-right: auto;
  max-width: var(--container-rg);
  padding-left: var(--grid-gutter);
  padding-right: var(--grid-gutter);
  width: 100%;

  &.text {
    margin-left: 0;
    max-width: var(--container-sm);
  }

  &.large {
    max-width: var(--container-lg);
  }

  &.hero {
    max-width: var(--container-xl);
    padding: 0;
  }

  /*@media (min-width: 30em) {
    color: yellow;
    color: color(red alpha(-50%));
  }*/
}

</style>
