<template>
  <li class="u-posRelative">
    <nuxt-link :class="currentPage" :to='link'>
      <span class="marker">›</span>
      {{label}}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'nav-in-page-link',

  props: {
    label: String,
    link: String
  },

  computed: {
    currentPage () {
      let classes = ['Root']
      if (this.link === this.$store.state.currentPage) {
        classes.push('active')
      } else {
        classes.push('in-active')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
@import "../assets/vars.css";

.marker {
  display: inline-block;
  font-family: var(--font-text);
  font-size: 70%;
  transform: translateY(-20px);
  transform: translateY(-0.333em);
}

.header .Root {
  transform: translateX(-0.55em);
}

.smallheader .Root {
  transform: translateX(-0.75em);
}

.Root {
  --duration: 0.25s;
  display: block;
  position: relative;
  /*transform: translateX(-0.75em);*/
  transition: all var(--duration) ease-in-out;

  & /deep/ span {
    opacity: 0;
    transition: opacity var(--duration) ease-in-out;
  }
}

.Root:hover {
  transform: translateX(0);
  transition: all var(--duration) ease-in-out;

  & /deep/ span {
    opacity: 1;
    transition: opacity var(--duration) ease-in-out;
  }
}


.Root.active {
  transform: translateX(0);

  & span {
    opacity: 1;
  }
}

</style>
