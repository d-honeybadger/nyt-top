<!-- General-purpose round spinner -->
<template>
  <div class="loading-spinner text-xs-center">
    <VImg
      :src="require('../assets/loader.svg')"
      width="50"
      alt="Loading"
    />
  </div>
</template>

<style scoped>
  .loading-spinner {
    position: fixed;
    left: calc(50% - 19px);
    top: calc(50% - 19px);
  }
</style>
