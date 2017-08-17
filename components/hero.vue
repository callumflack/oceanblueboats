<template>
  <section :class="['hero', { 'text-white': backgroundImage }]" :style="`background-image: url(${backgroundImage})`">
    <heroLink :link="link">
      <div class="container--md">
        <div :class="['hero-body', { 'hero-body--half': half }]">
          <div :class="['columns', { reverse }]">
            <h1 class="display">{{headline}}</h1>
            <h4 class="subtext">{{subtext}}</h4>
          </div>
        </div>
      </div>
    </heroLink>
  </section>
</template>

<script>
import heroLink from '~/components/hero-link.vue'

export default {
  name: 'hero',

  components: {
    heroLink
  },

  props: {
    headline: String,
    subtext: String,
    backgroundImage: String,
    link: String,
    reverse: Boolean,
    half: Boolean
  }
}
</script>

<style>
.hero {
  background-size: cover;
  background-position: center;
}

.hero.text-white {
  color: #fff;
}

.hero:not(:last-child) {
  margin-bottom: 0.5rem;
}

.hero-body {
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
