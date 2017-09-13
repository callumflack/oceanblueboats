<template>
  <main>
    <div>
      <hero
        headline="Far-away places"
        subtext="Custom plate boats made for"
        reverse
        backgroundImage="/images/obb-hero.jpg"
      />

      <hero
        headline="The history"
        subtext="Established Cairns 2002. Started much earlier."
        backgroundImage="/images/obb-history.jpg"
        filterOpacity="0.8"
        link="/the-history"
      />

      <hero
        headline="The factory"
        subtext="Vince's hanger-sized dream shed. Big and capable."
        backgroundImage="/images/obb-factory.jpg"
        filterOpacity="0.3"
        link="/the-factory"
      />

      <hero
        headline="The process"
        subtext="Precision fabrication with water-jet cutting tech."
        backgroundImage="/images/obb-process.jpg"
        filterOpacity="0.8"
        link="/the-process"
      />

      <hero
        headline="The boat builders"
        subtext="Boat-lovers, from hair to toes."
        backgroundImage="/images/obb-team.jpg"
        filterOpacity="0.6"
        link="/the-boat-builders"
      />

      <hero
        headline="The designs"
        subtext="Your dream boat starts here."
        backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1503353103/RMP-main-img_iuuzym.jpg"
        filterOpacity="0.8"
        link="/the-designs"
      />
    </div>

    <Block>
      <form-contact />
    </Block>

    <a
      :class="['go-top', {
        hidden: !scrolledNearBottom
      }]"
      @click.prevent="scrollToTop"
    >
      <span class="smallheader">&uarr; Top</span>
    </a>

    <script src='/js/cloudinary.js'></script>
  </main>
</template>

<script>
import Hero from '~/components/hero.vue'
import Container from '~/components/container.vue'
import Block from '~/components/block.vue'
import FormContact from '~/components/form-contact.vue'

export default {
  components: {
    Hero,
    Container,
    Block,
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
@import "../assets/vars.css";

.go-top {
  --transition-debounce: 2.5s;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: calc(1.5 * var(--grid-gutter));
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
