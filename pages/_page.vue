<template>
  <div>
    <div>
      <hero
        headline="The process"
        subtext="Precision fabircation with water-jet cutting techonology means we're more than capable."
        half
      ></hero>

      <hero
        backgroundImage="/rod-long.jpg"
        link="/about"
        half
      ></hero>
    </div>

    <div class="block container--md">
      <p>
        This will be imported markup. But for now, lorem ipsum.
      </p>

      <p>
        Elit excepturi laboriosam esse corporis sed unde voluptatibus hic officia quo? Similique amet at ducimus ipsa consequatur Tenetur temporibus totam totam voluptates voluptate quaerat. Cupiditate illum voluptates eum ab officia. Nihil maxime explicabo quam aperiam dolores Ullam earum dolorem mollitia!
      </p>

      <p>
        Dolor adipisci molestiae aliquid sed maiores Eveniet magni voluptatem illum enim nobis? Eum eaque fugiat dolore hic nam? Nulla qui natus possimus sunt necessitatibus quasi! Aspernatur vero recusandae accusamus velit aliquid, maxime Sunt nisi illo? Elit quidem esse voluptates corporis architecto
      </p>
      <p>
        Ipsum exercitationem mollitia necessitatibus laboriosam id. Quod nostrum possimus magnam culpa omnis Beatae assumenda voluptates cum ratione quod Veritatis at ipsa enim inventore ducimus accusamus Labore vitae eligendi eius nulla odit Reprehenderit beatae libero inventore expedita dolore Illo fuga error fugiat officia ut Consequatur architecto illo vero odio dolores ad nisi corrupti Adipisci fugiat molestiae.
      </p>
    </div>

    <nav-in-page></nav-in-page>
  </div>
</template>

<script>
import Hero from '~/components/hero.vue'
import NavInPage from '~/components/nav-in-page.vue'

export default {
  components: {
    Hero,
    NavInPage
  }
}
</script>

<style scoped>
</style>
