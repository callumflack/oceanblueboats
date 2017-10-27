<template>
  <main>
    <div>
      <Block title textColumn>
        <h1 class="header">The location</h1>
        <h4 class="lede">Drop by and see for yourself.</h4>
      </Block>
    </div>

    <Container>
      <div class="u-size11of12 u-sm-size3of4 text">
        <p>We love listening to what our customers want. Please drop by during business hours for a chat. We're open Monday through Friday, from 8am til 3.30pm, at <a href="https://goo.gl/maps/7TPnDqKrtby">The Factory, 116 Lyons Street, Cairns.</a></p>

        <figure>
          <a href="https://goo.gl/maps/7TPnDqKrtby">
            <img src="/images/obb-map.jpg" alt="map">
          </a>
        </figure>


        <p>Got ideas? Write to us:</p>
        <form-contact />
      </div>
    </Container>

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
import NavInPage from '~/components/nav-in-page.vue'

export default {
  name: 'contact-us',
  components: {
    Hero,
    Container,
    Block,
    FormContact,
    NavInPage
  }
}
</script>

<style scoped>
@import "../assets/vars.css";




</style>
