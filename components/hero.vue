<template>
  <section
    :class="['hero', { 'text-white': backgroundImage }]"
    :data-bg="backgroundImage ? backgroundImage : ''"
  >
    <div
      class='filter'
      :style='filterStyle'
    />
    <hero-link :link="link">
      <div class="container--md">
        <div :class="['hero-body', { 'hero-body--half': half }]">
          <div :class="['columns', { reverse }]">
            <h1 class="display">{{headline}}</h1>
            <h4 class="subtext">{{subtext}}</h4>
          </div>
        </div>
      </div>
    </hero-link>
  </section>
</template>

<script>
import HeroLink from '~/components/hero-link.vue'

export default {
  name: 'hero',

  components: {
    HeroLink
  },

  computed: {
    filterStyle () {
      return this.opacity ? `background-color: rgba(0, 0, 0, ${1 - this.opacity})` : ''
    }
  },

  props: {
    headline: String,
    subtext: String,
    backgroundImage: String,
    link: String,
    reverse: Boolean,
    half: Boolean,
    opacity: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  background-size: cover;
  background-position: center;
}

.hero.text-white {
  color: #fff;
}

.hero:not(:last-child) {
  margin-bottom: 0.5rem;
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
  height: 100vh;
}

.hero-body--half {
  height: auto;
  min-height: 50vh;
}

.columns {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.columns.reverse {
  flex-direction: column-reverse;
}
</style>
