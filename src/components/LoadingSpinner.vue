<template>
  <div class="loading-spinner text-xs-center">
    <v-img :src="require('../assets/loader.svg')" width="50" alt="Loading"/>
  </div>
</template>

<style>
  .loading-spinner {
    position: fixed;
    left: calc(50% - 19px);
    top: calc(50% - 19px);
  }
</style>
