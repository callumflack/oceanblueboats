<template>
  <div class="block container--md">
    <div class="display">Let's Talk</div>
    <div class="subtext">Got questions, ideas? Drop in or write:</div>

    <form action="#" method="post">
      <div class="form-group">
        <input placeholder="Your name*" name="name">
        <input placeholder="Your email*" name="email">
        <textarea rows='4' placeholder="How can we help make your dream boat?" name="message"></textarea>

        <div class="u-textRight">
          <button class="button-fill" type="submit">Submit <span class="icon">&rarr;</span></button>
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
