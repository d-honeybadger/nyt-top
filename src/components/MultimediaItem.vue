<template v-if="media">
  <VLayout row>
    <VFlex>
      <VImg
        :src="media.url"
        :alt="media.caption"
        :width="media.width"
      />
      <p class="copyright-text grey--text">
        {{ media.copyright }}
      </p>
    </VFlex>
    <VFlex>
      <p class="caption grey--text">
        {{ media.caption }}
      </p>
    </VFlex>
  </VLayout>
</template>

<script>
  export default {
    props: ['media']
  }
</script>

<style>
  .copyright-text {
    font-size: 10px;
  }
</style>
