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
      <div v-for='boat in boats' class="u-size5of6 u-sm-size3of4 text">

        <!-- <lightbox
          thumbnail="/images/obb-boats-1.jpg"
          :images="[
            '/images/obb-boats-1.jpg',
            '/images/obb-boats-2.jpg',
            '/images/obb-boats-3.jpg'
          ]"
        >

        </lightbox> -->

        <section class="text">
          <lightbox
              :thumbnail="boat.thumbnail"
              :images="boat.images"
          ></lightbox>

          <h2 class="smallheader">{{boat.title}}</h2>
          <p>{{boat.subtext}}</p>
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
// import Lightbox from 'vue-pure-lightbox'

// Vue.use(Lightbox)

const boats = [
  {
    thumbnail: '/images/4.55-01.jpg',
    images: [
      '/images/4.55-01.jpg'
    ],
    title: '4.55 OB Adv (open boat we did)',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

export default {
  name: 'the-designs',
  components: {
    Hero,
    Container,
    Block
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
