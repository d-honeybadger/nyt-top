<template>
  <VToolbar app class="green darken-4">
    <VToolbarTitle class="headline">
      <span class="green--text text--accent-1">
        The New York Times
      </span>
    </VToolbarTitle>
    <VSpacer />
    <VToolbarTitle class="headline">
      <span
        :style="{ fontFamily: 'Cardo, serif' }"
        class="green--text text--accent-1"
      >
        {{ ' ' }}Top Stories
      </span>
    </VToolbarTitle>
    
  </VToolbar>
</template>


<style>
  .v-toolbar__title.headline {
    font-family: 'UnifrakturMaguntia', serif !important;
    font-size: 28px !important;
  }
</style>
