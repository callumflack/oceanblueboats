<template>
  <main>
    <div>
      <Block title textColumn>
        <h1 class="header">Contact us</h1>
        <h4 class="lede">Lede here.</h4>
      </Block>

      <!-- <hero
        :backgroundImage="/images/obb-designs.jpg"
      /> -->
    </div>

    <Block>
      <div class="u-size5of6 u-sm-size3of4 text">
        Contact us

      </div>
    </Block>

    <Block>
      <form-contact />
    </Block>

    <Block>
      <nav-in-page />
    </Block>

  </main>
</template>

<script>
import Hero from '~/components/hero.vue'
import Container from '~/components/container.vue'
import Block from '~/components/block.vue'
import FormContact from '~/components/form-contact.vue'

export default {
  name: 'contact-us',
  components: {
    Hero,
    Container,
    Block,
    FormContact
  }
}
</script>

<style scoped>
@import "../assets/vars.css";




</style>
