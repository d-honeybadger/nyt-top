<!-- Fixed-top navigation bar with a search box -->
<template>
  <VToolbar
    app
    class="green darken-4"
  >
    <VToolbarTitle class="headline">
      <span class="grey--text text--lighten-4 hidden-sm-and-down">
        The New York Times
      </span>
    </VToolbarTitle>
    <VSpacer />
    <VToolbarTitle class="headline hidden-xs-only">
      <span
        class="grey--text text--lighten-4"
        :style="{ fontFamily: 'Cardo, serif' }"
      >
        {{ ' ' }}Top Stories
      </span>
    </VToolbarTitle>
    <VSpacer />
    <VTextField
      v-model="searchString"
      color="grey"
      append-icon="search"
      :placeholder="`Search in ${$route.name}`"
      @keyup="search"
    />
  </VToolbar>
</template>


<script>
  export default {
    data () {
      return {
        searchString: ''
      }
    },
    methods: {
      search () {
        // send searchString to parent
        this.$emit('search', this.searchString);
      }
    }
  };
</script>


<style scoped>
  .v-toolbar__title.headline {
    font-family: 'UnifrakturMaguntia', serif !important;
    font-size: 28px !important;
  }
</style>
