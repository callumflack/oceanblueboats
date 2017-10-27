<template>
  <div
    :class="['Block', {
      'as-title': title,
      'as-nav': nav,
      'with-rule': rule,
      'with-bottom': footer,
      'with-bottom': bottom
    }]">
    <template v-if="footer">
      <slot />
    </template>
    <template v-else-if="textColumn">
      <container>
        <div class="u-size11of12 u-sm-size3of4">
          <slot />
        </div>
      </container>
    </template>
    <template v-else>
      <container>
        <slot />
      </container>
    </template>
  </div>
</template>



<script scoped>
import container from '~/components/container.vue'

export default {
  name: 'block',
  components: {
    container
  },
  props: {
    title: Boolean,
    nav: Boolean,
    rule: Boolean,
    textColumn: Boolean,
    footer: Boolean,
    bottom: Boolean
  }
}
</script>



<style scoped>
@import '../assets/vars.css';

.Block {
  padding-top: calc(0.75 * var(--block));
  width: 100%;

  @media (--lg-viewport) {
    padding-top: var(--block);
  }

  &.with-rule {
    border-top: 1px solid currentColor;
    /*padding-bottom: var(--block);*/
  }

  &.with-bottom {
    padding-bottom: var(--block);
  }

  &.as-title {
    padding-top: calc(0.75 * var(--blockPlusNav));
    padding-bottom: calc(0.5 * var(--blockPlusNav));

    @media (--lg-viewport) {
      padding-top: var(--blockPlusNav);
      padding-bottom: calc(0.9 * var(--blockPlusNav));
    }
  }

  &.as-nav {
    padding-top: calc(0.75 * var(--blockPlusNav));

    @media (--lg-viewport) {
      padding-top: var(--blockPlusNav);
    }
  }
}
</style>
