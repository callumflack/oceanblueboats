<template>
  <section
    :class="['hero', { 'text-white': backgroundImage }]"
  >
    <lazy-image
      v-if="backgroundImage"
      class="hero-background-image"
      :src="backgroundImage"
    />

    <div
      class='filter'
      :style='filterStyle'
    />
    <hero-link :link="link">
      <Container>
        <div :class="['hero-body', { 'hero-body--half': half }]">
          <div :class="['columns u-size11of12 u-sm-size7of12', { reverse }]">
            <h1 class="header">{{headline}}</h1>
            <h4 class="lede" v-html="subtext" />
          </div>
        </div>
      </Container>
    </hero-link>
  </section>
</template>


<script>
import Container from '~/components/container.vue'
import HeroLink from '~/components/hero-link.vue'
import LazyImage from '~/components/lazy-image.vue'

export default {
  name: 'hero',
  components: {
    Container,
    HeroLink,
    LazyImage
  },
  computed: {
    filterStyle () {
      return this.filterOpacity ? `background-color: rgba(0, 0, 0, ${1 - this.filterOpacity})` : ''
    }
  },
  props: {
    headline: String,
    subtext: String,
    backgroundImage: String,
    link: String,
    reverse: Boolean,
    half: Boolean,
    filterOpacity: {
      type: String,
      default: '1'
    }
  }
}
</script>


<style scoped>
@import "../assets/vars.css";

.hero {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero-background-image {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  min-width: 100%;
}

.hero.text-white {
  color: #fff;
}

.hero:not(:last-child) {
  margin-bottom: 2px;

  @media (--lg-viewport) {
    margin-bottom: 4px;
  }
}

.filter {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.hero-body {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  height: 90vh;

  @media (--sm-viewport) {
    height: 70vh;
  }

  @media (--lg-viewport) {
    height: 90vh;
  }
}

.hero-body--half {
  height: auto;
  min-height: 45vh;
}

.columns {
  display: flex;
  flex-direction: column;
}

.columns.reverse {
  flex-direction: column-reverse;
}

.header {
  transform: translateX(-3px);
}

.hero:nth-of-type(3) .columns,
.hero:nth-of-type(4) .columns {
  @media (--lg-viewport) { width: 50% !important; }
}

.hero:nth-of-type(6) {
  background-position: 75%;

  @media (--lg-viewport) { }
}
</style>
