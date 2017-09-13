<template>
  <Block footer bottom>
    <hr>

    <Container>
      <footer class="Footer small">

        <div class="u-size3of4">
          <h3 class="smallheader">Contact Us</h3>

          <div class="Grid Grid--withGutter">
            <div class='Grid-cell u-sm-size5of12 space'>
              <ul>
                <li><a href="tel:0409 726 128"><span>t: </span>0409 726 128</a></li>
                <li><a href="mailto:hi@oceanblueboats.com.au"><span>e: </span>hi@oceanblueboats.com.au</a></li>
              </ul>
            </div>

            <div class='Grid-cell u-sm-size5of12 space'>
              <ul>
                <li><a href="https://www.facebook.com/oceanblueliving">Find us on Facebook</a></li>
                <li><a href="https://www.instagram.com/oceanblueliving">Gram us on Instagram</a></li>
              </ul>
            </div>

            <div class='Grid-cell u-sm-size5of12 space'>
              <a href="https://goo.gl/maps/6DvEDu1kzDm">
                <ul>
                  <li>Open Mon-Fri, 9am-3.30pm</li>
                  <li>116 Lyons Street, Cairns</li>
                  <li>Queensland 4870 Australia</li>
                </ul>
              </a>
            </div>

            <div class='Grid-cell u-sm-size5of12 space'>
              <ul>
                <li>&copy; 2017 Oceanblue Boats</li>
                <li><a href="https://www.patternworks.com.au/">Website by Patternworks</a></li>
              </ul>
            </div>

          </div>

        </div>
      </footer>
    </Container>

  </Block>
</template>

<script>
import Block from '~/components/block.vue'
import Container from '~/components/container.vue'

export default {
  name: 'v-footer',
  components: {
    Block,
    Container
  }
}
</script>

<style scoped>
@import "../../assets/vars.css";

.space {
  margin-top: var(--s2);

  @media (--sm-viewport) {
    margin-top: var(--s2a);
  }

  & span {
    display: inline-block;
    font-family: var(--font-subheader);
    width: 1.5em;
  }
}
</style>
