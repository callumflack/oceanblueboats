<template>
  <div>
    <div>
      <hero
        headline="Far-away places"
        subtext="Custom plate boats made for"
        reverse
        backgroundImage="/rod-long.jpg"
        link="/"
      ></hero>

      <hero
        headline="The history"
        subtext="EST. Carins 2002. But it all started much earlier that that."
        backgroundImage="/rod-long.jpg"
        link="/about"
      ></hero>

      <hero
        headline="The factory"
        subtext="Vince's hanger-sized dream shed. We do general repairs and refits too."
        backgroundImage="/rod-long.jpg"
        link="/about"
      ></hero>

      <hero
        headline="The process"
        subtext="Precision fabrication with water-jet cutting technology."
        backgroundImage="/rod-long.jpg"
        link="/about"
      ></hero>

      <hero
        headline="The boat builders"
        subtext="Boat-lovers, from hair to toes"
        backgroundImage="/rod-long.jpg"
        link="/about"
      ></hero>

      <hero
        headline="The designs"
        subtext="Start here. We'll customise to your dreams"
        backgroundImage="/rod-long.jpg"
        link="/about"
      ></hero>
    </div>

    <div class="block container--md">
      <form-contact></form-contact>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/hero.vue'
import FormContact from '~/components/form-contact.vue'

export default {
  components: {
    Hero,
    FormContact
  }
}
</script>

<style scoped>
</style>
