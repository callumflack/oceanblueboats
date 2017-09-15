<template>
  <main>
    <div>
      <Block title textColumn>
        <h1 class="header">The Designs</h1>
        <h4 class="lede">Lede here.</h4>
      </Block>

      <!-- <hero
        :backgroundImage="/images/obb-designs.jpg"
      /> -->
    </div>

    <Block>
      <div class="u-size5of6 u-sm-size3of4 text">

        <section class="text">
          <img src="/images/4.55-01.jpg" alt="">
          <h2 class="smallheader">4.55 OB Adv (open boat we did)</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>

      </div>
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

export default {
  components: {
    Hero,
    Container,
    Block
  }
}
</script>

<style scoped>
@import "../assets/vars.css";




</style>
