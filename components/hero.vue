<template>
  <section class="hero" :style="`background-image: url(${backgroundImage})`">
    <router-link :to="link">
      <div class="container--md">
        <div class="hero-body">
            <div :class="['columns', { reverse }]">
                <h1 class="display has-text-white">{{headline}}</h1>
                <h4>{{subtext}}</h4>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
  export default {
    name: 'hero',

    props: {
      headline: String,
      subtext: String,
      backgroundImage: String,
      link: String,
      reverse: Boolean
    }
  }
</script>

<style>
.hero {
  color: #fff;
  background-size: cover;
  background-position: center;
}

.hero-body {
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-transform: uppercase;
}

.columns {
  display: flex;
  flex-direction: column;
}

.columns.reverse {
  flex-direction: column-reverse;
}

.hero:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
