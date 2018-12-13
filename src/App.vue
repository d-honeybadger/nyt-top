<template>
  <VApp>
    <TheNavbar @search="handleSearch" />
    <VContainer fluid>
      <VLayout
        row
        wrap
        class="mt-5"
      >
        <VFlex
          xs12
          sm3
          md2
          lg1
        >
          <TheSidebar />
        </VFlex>
        <VFlex
          xs12
          sm9
          md10
          lg11
        >
          <RouterView :search="searchString" />
        </VFlex>
      </VLayout>
    </VContainer>
    <TheButtonUp />
  </VApp>
</template>

<script>
  import TheNavbar from './components/TheNavbar';
  import TheSidebar from './components/TheSidebar';
  import TheButtonUp from './components/TheButtonUp';

  export default {
    components: {
      TheNavbar,
      TheSidebar,
      TheButtonUp
    },
    data () {
      return {
        searchString: ''
      };
    },
    methods: {
      handleSearch (searchString) {
        this.searchString = searchString;
      }
    }
  };

</script>

<style scoped>
  .application {
    font-family: 'Lato', sans-serif;
  }
</style>
