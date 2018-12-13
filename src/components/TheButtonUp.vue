<!-- Button that appears when page is scrolled down and lets the user go up -->
<template>
  <VBtn
    v-show="scrolled"
    fixed
    bottom
    right
    flat
    icon
    color="grey"
    @click="$vuetify.goTo(0, options)"
  >
    <VIcon>arrow_upward</VIcon>
  </VBtn>
</template>

<script>
  export default {
    data () {
      return {
        scrolled: false,
        options: { // for Vuetify scrolling animation
          duration: 300,
          easing: 'easeOutQuad'
        }
      };
    },
    // listen to scrolling while the button exists
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      // if scrolled, determine if should show/hide button
      handleScroll () {
        this.scrolled = window.scrollY > 10;
      }
    },
  };
</script>
