<template>
  <section
    :class="['hero', { 'text-white': backgroundImage }]"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <img v-if="backgroundImage" class="hero-background-image" :data-bg="backgroundImage ? backgroundImage : ''" />

    <div
      class='filter'
      :style='filterStyle'
    />
    <hero-link :link="link">
      <Container>
        <div :class="['hero-body', { 'hero-body--half': half }]">
          <div :class="['columns u-size5of6 u-size3of4', { reverse }]">
            <h1 class="header">{{headline}}</h1>
            <h4 class="lede">{{subtext}}</h4>
          </div>
        </div>
      </Container>
    </hero-link>
  </section>
</template>


<script>
import Container from '~/components/container.vue'
import HeroLink from '~/components/hero-link.vue'

export default {
  name: 'hero',
  components: {
    Container,
    HeroLink
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
  min-height: 100vh;
  min-width: 100vw;
}

.hero.text-white {
  color: #fff;
}

.hero:not(:last-child) {
  margin-bottom: 4px;

  @media (--lg-viewport) {
    margin-bottom: 8px;
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
  height: 50vh;

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

.hero:nth-of-type(4) .columns {
  width: 50%;
}
</style>
