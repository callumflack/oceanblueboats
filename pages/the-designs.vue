<template>
  <main>
    <Block title textColumn>
      <h1 class="header">The Designs</h1>
      <h4 class="lede">Your custom plate boat starts here.</h4>
    </Block>

    <Container>
      <div class="u-size11of12 u-sm-size3of4 text">

        <template v-for='boat in boats'>
          <section class="text">
            <lightbox
                :thumbnail="boat.thumbnail"
                :images="boat.images"
            >
              <h2 class="smallheader u-textCenter">{{boat.title}}</h2>
            </lightbox>

            <h2 class="smallheader">{{boat.title}}</h2>
            <p>{{boat.subtext}}</p>
            <p v-if="boat.button">
              <a :href="boat.button" class="small lede button" >Download spec</a>
            </p>
          </section>
        </template>

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
import NavInPage from '~/components/nav-in-page.vue'

const boats = [
  {
    thumbnail: '/images/obb-boats-455-1.jpg',
    images: [
      '/images/obb-boats-455-1.jpg',
      '/images/obb-boats-455-2.jpg',
      '/images/obb-boats-455-3.jpg'
    ],
    title: '4.55 OB Adv (open boat we did)',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }, {
    thumbnail: '/images/obb-boats-455-1.jpg',
    images: [
      '/images/obb-boats-455-1.jpg'
    ],
    title: '4.85 plate alloy Adv ( casting platforms/ Side console)',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    button: 'https://www.dropbox.com/s/k1m4ydx3lpewmfw/obb-boats-485.pdf?dl=0'
  }, {
    thumbnail: '/images/obb-boats-455-1.jpg',
    images: [
      '/images/obb-boats-455-1.jpg'
    ],
    title: '5.3 OB Std Adv ( demo/Modular)',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    button: 'https://www.dropbox.com/s/k1m4ydx3lpewmfw/obb-boats-485.pdf?dl=0'
  }, {
    thumbnail: '/images/obb-boats-56-1.jpg',
    images: [
      '/images/obb-boats-56-1.jpg',
      '/images/obb-boats-56-2.jpg',
      '/images/obb-boats-56-3.jpg',
      '/images/obb-boats-56-4.jpg'
    ],
    title: '5.6 OB Adv (latest build)',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }, {
    thumbnail: '/images/obb-boats-59-1.jpg',
    images: [
      '/images/obb-boats-59-1.jpg',
      '/images/obb-boats-59-2.jpg',
      '/images/obb-boats-59-3.jpg',
      '/images/obb-boats-59-4.jpg'
    ],
    title: '5.9 OB Adv (yarrabah)',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }, {
    thumbnail: '/images/obb-boats-68-1.jpg',
    images: [
      '/images/obb-boats-68-1.jpg',
      '/images/obb-boats-68-2.jpg',
      '/images/obb-boats-68-3.jpg',
      '/images/obb-boats-68-4.jpg'
    ],
    title: '6.8 OB Custom',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

export default {
  name: 'the-designs',
  components: {
    Hero,
    Container,
    Block,
    NavInPage
  },

  data () {
    return {
      boats
    }
  }
}
</script>

<style scoped>
@import "../assets/vars.css";




</style>
