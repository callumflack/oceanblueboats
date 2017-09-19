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

        <section class="text">
          <h2 class="smallheader">Can't find what you're looking for?</h2>
          <p>These designs showcase our versatility. We've got many more, ranging from tiller steer, centre or side console, half cab to full cab and hard top to centre cab. You name it, we probably do it. To find out more, call up or drop by.</p>
        </section>

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
    title: '4.55 metre OB ADV',
    subtext: 'Great little boat for getting into those tight spaces, whether up the river catching sooty grunter, or around the dams catching barra. If that\'s what you like, then this is the boar for you.'
  }, {
    thumbnail: '/images/obb-boats-485-1.jpg',
    images: [
      '/images/obb-boats-485-1.jpg',
      '/images/obb-boats-485-2.jpg',
      '/images/obb-boats-485-3.jpg'
    ],
    title: '4.85 metre OB ADV',
    subtext: 'The smaller-sized great all-rounder for chasing barra and jacks in the estuaries with your mates. Plenty of room for casting lures and heaps of clean, uncluttered storage space under the floor',
    button: 'https://www.dropbox.com/s/k1m4ydx3lpewmfw/obb-design-485.pdf?dl=0'
  }, {
    thumbnail: '/images/obb-boats-560-1.jpg',
    images: [
      '/images/obb-boats-560-1.jpg',
      '/images/obb-boats-560-2.jpg',
      '/images/obb-boats-560-3.jpg',
      '/images/obb-boats-560-4.jpg'
    ],
    title: '5.6 metre OB ADV',
    subtext: 'After a serious fisherman\'s boat? You can\'t go past this one. This fella\'s for all the features for the adventurer who loves running the coastline to those isolated rivers.',
    button: 'https://www.dropbox.com/s/agal7autgwqju5e/obb-design-560.pdf?dl=0'
  }, {
    thumbnail: '/images/obb-boats-590-1.jpg',
    images: [
      '/images/obb-boats-590-1.jpg',
      '/images/obb-boats-590-2.jpg',
      '/images/obb-boats-590-3.jpg',
      '/images/obb-boats-590-4.jpg'
    ],
    title: '5.9 OB ADV',
    subtext: 'After a commercial boat for your surveying, work or passengers? This one\'s for you. From off this frame, we\'ll listen, show you what\'s possible and can customise build to fit your needs.',
    button: 'https://www.dropbox.com/s/ra4qdjz053phc9z/obb-design-590.pdf?dl=0'
  }, {
    thumbnail: '/images/obb-boats-680-1.jpg',
    images: [
      '/images/obb-boats-680-1.jpg',
      '/images/obb-boats-680-2.jpg',
      '/images/obb-boats-680-3.jpg',
      '/images/obb-boats-680-4.jpg'
    ],
    title: '6.8 OB Custom',
    subtext: 'The ultimate boat for offshore fishing adventures with your mates or family. This one has plenty of deck space to move around, and plenty of storage room below. Ideal for chasing Pelagics or bottom fishing.',
    button: 'https://www.dropbox.com/s/nn5b76ywdju3qjb/obb-design-680.pdf?dl=0'
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
  },

  head () {
    return {
      title: 'The designs',
      meta: [
        { hid: 'description', name: 'description', content: 'Design and customise your boat from our designs.' }
      ]
    }
  }
}
</script>

<style scoped>
@import "../assets/vars.css";

</style>
