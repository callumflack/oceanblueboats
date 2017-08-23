<template>
  <div>
    <div>
      <hero
        headline="Far-away places"
        subtext="Custom plate boats made for"
        reverse
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353159/rod-long-204281_nbrsdv.jpg"
        opacity="0.8"
        link="/"
      />

      <hero
        headline="The history"
        subtext="EST. Carins 2002. But it all started much earlier that that."
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353159/rod-long-204281_nbrsdv.jpg"
        link="/the-history"
      />

      <hero
        headline="The factory"
        subtext="Vince's hanger-sized dream shed. We do general repairs and refits too."
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353159/rod-long-204281_nbrsdv.jpg"
        link="/the-factory"
      />

      <hero
        headline="The process"
        subtext="Precision fabrication with water-jet cutting technology."
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353159/rod-long-204281_nbrsdv.jpg"
        link="/the-process"
      />

      <hero
        headline="The boat builders"
        subtext="Boat-lovers, from hair to toes"
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353108/about-hero-160812-team_fc4zkf.jpg"
        link="/the-boat-builders"
      />

      <hero
        headline="The designs"
        subtext="Start here. We'll customise to your dreams"
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353103/RMP-main-img_iuuzym.jpg"
        link="/the-designs"
      />
    </div>

    <div class="block" />

    <div class="container--md">
      <form-contact />
    </div>

    <a
      :class="[
        'go-top',
        {
          hidden: !scrolledNearBottom
        }
      ]"
      @click.prevent="scrollToTop"
    >
      <h2>&uarr; Top</h2>
    </a>

    <script src='/js/cloudinary.js'></script>
  </div>
</template>

<script>
import Hero from '~/components/hero.vue'
import FormContact from '~/components/form-contact.vue'

export default {
  components: {
    Hero,
    FormContact
  },

  data () {
    return {
      scrolledNearBottom: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (event) {
      const offset = 550
      const scrolledNearBottom = (window.scrollY + window.innerHeight) >= (document.body.scrollHeight - offset)

      this.scrolledNearBottom = scrolledNearBottom
    },

    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.go-top {
  --transition-duration: 0.2s;
  --transition-debounce: 2.5s;
  position: fixed;
  right: 3.2rem;
  bottom: 2rem;
  font-weight: bold;
  transform: translateY(0);
  transition:
    opacity var(--transition-duration) var(--transition-debounce),
    transform 0s var(--transition-debounce);
}


.go-top.hidden {
  opacity: 0;
  transform: translateY(100vh);
  transition:
    opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}
</style>
