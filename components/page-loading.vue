
<template lang="pug">
  .loading-page.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter(v-if="loading")
    .header Oceanblue boats
</template>

<script>
export default {
  name: "page-loading",
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
@import "../assets/base.css";

.loading-page {
  background: var(--color-bg);
  height: 100%;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 999;
}

.header {
  /* color: var(--color-bg); */
  font-size: calc(0.5 * var(--header-s2));

  @media (--sm-viewport) {
    font-size: calc(0.5 * var(--header-s2));
  }

  @media (--lg-viewport) {
    font-size: calc(0.5 * var(--header-s3));
  }
}
</style>