<template>
  <div class="u-size3of4">
    <div class="header">Let's Talk</div>
    <div class="lede">Got ideas? Write to us:</div>

    <form action="http://formspree.io/hi@oceanblueboats.com.au" method="post">
      <div class="form-group">
        <input placeholder="Your name*" name="name">
        <input placeholder="Your email*" type="email" name="email">
        <textarea rows="4" placeholder="How can we help make your dream boat?" name="message" />
        <div class="u-textRight">
          <button class="lede button-fill" type="submit">Submit ›</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'form-contact'
}
</script>

<style scoped>

</style>
