<template>
  <div id="app">
    <NavigationBar />
    <v-container fluid>
      <v-layout row>
        <v-flex xs6 sm3 md2 lg1>
          <SideBar />
        </v-flex>
        <v-flex xs6 sm9 md10 lg11>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar';
  import SideBar from './components/SideBar';

  export default {
    components: {
      NavigationBar,
      SideBar
    }
  };

</script>

<style>
  body {
    font-family: 'Lato', sans-serif;
  }
</style>
